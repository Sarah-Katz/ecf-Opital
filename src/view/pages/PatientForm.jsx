import { useParams } from "react-router-dom";

function PatientForm() {
    const patient = useParams();
    return <p>Patient Form</p>;
}

export default PatientForm;
