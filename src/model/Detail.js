import Bed from "./Bed";
import Room from "./Room";
import Service from "./Service";

class Detail {
    bed;
    room;
    service;

    /**
     * Creates a new Detail object.
     * @param {Bed} bed - The bed of the patient.
     * @param {Room} room - The room of the patient.
     * @param {Service} service - The service of the patient.
     */
    constructor(bed, room, service) {
        this.bed = bed;
        this.room = room;
        this.service = service;
    }
}

export default Detail;
