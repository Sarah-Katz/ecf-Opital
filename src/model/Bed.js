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
}

export default Bed;