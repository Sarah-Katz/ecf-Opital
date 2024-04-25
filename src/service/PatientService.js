import axios from "axios";
import Patient from "../model/Patient";
import Detail from "../model/Detail";

class PatientService {
    static async getPatients() {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/patients");
        let patients = [];
        res.data.forEach((json) => {
            patients.push(Patient.fromJson(json));
        });
        return patients;
    }

    static async deletePatient(idPatient) {
        await axios.delete(import.meta.env.VITE_API_URL + "/patients/" + idPatient);
    }

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
