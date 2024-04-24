class Room {
    idRoom;
    number;
    service;

    /**
     * Creates a new Room object
     * @param {number} idRoom The room's id
     * @param {string} number The room's number
     * @param {Service} service The room's service
     */
    constructor(idRoom, number, service) {
        this.idRoom = idRoom;
        this.number = number;
        this.service = service;
    }
}

export default Room;