import axios from "axios";
import Bed from "../model/Bed";

class BedService {
    /**
     * Retrieves a list of assigned beds from the API.
     * @returns {Bed[]} An array of Bed objects representing the assigned beds.
     */
    static async getAssignedBeds() {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/beds");
        let beds = [];
        res.data.forEach((json) => {
            if (json.patient != null) {
                beds.push(Bed.fromJson(json));
            }
        });
        return beds;
    }
}

export default BedService;
