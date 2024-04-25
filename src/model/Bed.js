import Patient from "./Patient";
import Room from "./Room";

class Bed {
    idBed;
    patient;
    room;

    /**
     * Creates a new Bed object
     * @param {number} idBed The bed's id
     * @param {Patient} patient The patient assigned to this bed
     * @param {Room} room The room in which the bed is assigned
     */
    constructor(idBed, patient, room) {
        this.idBed = idBed;
        this.patient = patient;
        this.room = room;
    }

    /**
     * Converts a JSON object into a Bed object.
     * @param {Object} json - The JSON object containing the bed's data.
     * @returns {Bed} - A new Bed object created from the provided JSON.
     */
    static fromJson(json) {
        if (json === null) {
            return null;
        }
        return new Bed(
            json.idBed,
            Patient.fromJson(json.patient),
            Room.fromJson(json.room)
        );
    }

    /**
     * Converts a Bed object into a JSON object.
     * @param {Bed} bed - The Bed object to be converted to JSON.
     * @returns {Object} - A new JSON object created from the provided Bed.
     */
    static toJson(bed) {
        return {
            idBed: bed.idBed,
            patient: Patient.toJson(bed.patient),
            room: Room.toJson(bed.room),
        };
    }
}

export default Bed;
