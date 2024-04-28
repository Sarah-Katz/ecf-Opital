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
     * Fetches the patient with the provided id from the API.
     * @param {number} idPatient - The id of the patient to be fetched.
     * @returns {Patient} - A Patient object.
     */
    static async getPatient(idPatient) {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/patients/" + idPatient);
        const patient = Patient.fromJson(res.data);
        const bedRes = await axios.get(import.meta.env.VITE_API_URL + "/beds/byPatient/" + idPatient);
        if (bedRes.data !== "") {
            patient.detail = new Detail(bedRes.data, bedRes.data.room, bedRes.data.room.service);
        }
        return patient;
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

    /**
     * Updates the patient with the provided id.
     * @param {Patient} patient - The updated patient object.
     * @returns {Promise<Response>} - A Promise that resolves to the response of the PUT request.
     */
    static async updatePatient(patient) {
        axios
            .put(import.meta.env.VITE_API_URL + "/patients", Patient.toJson(patient))
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    }

    /**
     * Assigns a service to a patient.
     * @param {Patient} patient - The patient object.
     * @param {number} idService - The id of the service to be assigned.
     * @returns {number} - The status code of the response of the POST request.
     */
    static async assignService(patient, idService) {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/patients/assign/" + idService, patient);
        return res.status;
    }

    /**
     * Unassign a patient from the service.
     * @param {Patient} patient - The patient object.
     * @returns {number} - The status code of the response of the POST request.
     */
    static async unassignService(patient) {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/patients/unassign", patient);
        return res.status;
    }
}

export default PatientService;
