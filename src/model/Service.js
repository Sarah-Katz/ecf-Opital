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
}

export default Service;
