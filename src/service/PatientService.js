import axios from "axios";
import Patient from "../model/Patient";
import Detail from "../model/Detail";
import Bed from "../model/Bed";

class PatientService {
    /**
     * Fetches all the patients from the API.
     * @returns {Patient[]} - An array of Patient objects.
     */
    static async getPatients() {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/patients");
        let patients = [];
        res.data.forEach((json) => {
            patients.push(Patient.fromJson(json));
        });
        return patients;
    }

    /**
     * Deletes the patient with the provided id.
     * @param {number} idPatient - The id of the patient to be deleted.
     */
    static async deletePatient(idPatient) {
        await axios.delete(import.meta.env.VITE_API_URL + "/patients/" + idPatient);
    }

    /**
     * Sorts the patients assigned to beds and those who aren't, for patients whoa re assigned to a bed, it also adds details to it (Bed Room and Service).
     * @param {Bed[]} beds - An array of all the beds which are assigned to a patient.
     * @param {Patient[]} patients - An array of every patients in the database.
     * @returns {Patient[]} - An array of sorted Patient objects.
     */
    static sortPatients(beds, patients) {
        let sortedPatient = [];
        patients.forEach((patient) => {
            beds.forEach((bed) => {
                if (patient.idPatient == bed.patient.idPatient) {
                    patient.detail = new Detail(bed, bed.room, bed.room.service);
                }
                if (!sortedPatient.includes(patient)) {
                    sortedPatient.push(patient);
                }
            });
        });
        return sortedPatient;
    }
}

export default PatientService;
