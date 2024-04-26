import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import PatientForm from "../view/pages/PatientForm";
import PatientService from "../service/PatientService";

function PatientFormController() {
    const params = useParams();
    const [patient, setPatient] = useState(null);

    const fetchPatient = async () => {
        console.log("idPatient", params.id);
        const patientData = await PatientService.getPatient(12);
        console.log(patientData);
        //setPatient(patientData);
    };

    useEffect(() => {
        fetchPatient();
    }, []);

    return <PatientForm patient={patient} />;
}

export default PatientFormController;
