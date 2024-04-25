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
        if (json === null) {
            return null;
        }
        return new Room(json.idRoom, json.number, Service.fromJson(json.service));
    }

    /**
     * Converts a Room object into a JSON object.
     * @param {Room} room - The Room object to be converted to JSON.
     * @returns {Object} - A new JSON object created from the provided Room.
     */
    static toJson(room) {
        return {
            idRoom: room.idRoom,
            number: room.number,
            service: Service.toJson(room.service),
        };
    }
}

export default Room;
