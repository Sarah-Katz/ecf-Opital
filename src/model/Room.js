import Service from "./Service";

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

    /**
     * Converts a JSON object into a Room object.
     * @param {Object} json - The JSON object containing the room's data.
     * @returns 
     */
    static fromJson(json) {
        return new Room(json.idRoom, json.number, Service.fromJson(json.service));
    }
}

export default Room;