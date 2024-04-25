class Service {
    idService;
    name;

    /**
     * Creates a new Service object
     * @param {number} idService The service's id
     * @param {string} name The service's name
     */
    constructor(idService, name) {
        this.idService = idService;
        this.name = name;
    }

    /**
     * Converts a JSON object into a Service object.
     * @param {Object} json - The JSON object containing the service's data.
     * @returns {Service} - A new Service object created from the provided JSON.
     */
    static fromJson(json) {
        if (json === null) {
            return null;
        }
        return new Service(json.idService, json.name);
    }

    /**
     * Converts a Service object into a JSON object.
     * @param {Service} service - The Service object to be converted to JSON.
     * @returns {Object} - A new JSON object created from the provided Service.
     */
    static toJson(service) {
        return {
            idService: service.idService,
            name: service.name,
        };
    }
}

export default Service;
