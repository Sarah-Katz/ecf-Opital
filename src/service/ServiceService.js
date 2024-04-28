import axios from "axios";
import Service from "../model/Service";

class ServiceService {
    /**
     * Fetches all the services from the API.
     * @returns {Service[]} - An array of Services objects.
     */
    static async getServices() {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/services");
        let services = [];
        res.data.forEach((json) => {
            services.push(Service.fromJson(json));
        });
        return services;
    }
}

export default ServiceService;
