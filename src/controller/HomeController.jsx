import { useEffect, useState } from "react";
import Patient from "../model/Patient";
import Home from "../view/pages/Home";
import BedService from "../service/BedService";
import PatientService from "../service/PatientService";

// eslint-disable-next-line jsdoc/require-jsdoc
function HomeController() {
    /**
     * @type {Patient[]}
     */
    const [sortedPatients, setSortedPatients] = useState([]);

    /**
     * Deletes a patient from the system.
     * @param {number} idPatient - The ID of the patient to delete.
     */
    const deletePatient = async (idPatient) => {
        await PatientService.deletePatient(idPatient);
        fetchPatients();
    };

    /**
     * Updates the list of patients.
     * @param {Patient[]} list - The list of patients to display.
     */
    const updatePatients = (list) => {
        setSortedPatients(list);
    };

    /**
     * Fetches the list of patients from the system and sorts those with and without beds.
     */
    const fetchPatients = async () => {
        const patients = await PatientService.getPatients();
        const sort = PatientService.sortPatients(await BedService.getAssignedBeds(), patients);
        updatePatients(sort);
    };

    useEffect(() => {
        document.title = "Opital - Liste des patients";
        fetchPatients();
    }, []);

    return <>{sortedPatients && <Home patients={sortedPatients} callback={deletePatient} />}</>;
}

export default HomeController;
