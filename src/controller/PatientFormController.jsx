import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PatientForm from "../view/pages/PatientForm";
import PatientService from "../service/PatientService";
import ServiceService from "../service/ServiceService";

// eslint-disable-next-line jsdoc/require-jsdoc
function PatientFormController() {
    const params = useParams();
    const [data, setData] = useState([]);

    const updateData = (newData) => {
        setData(newData);
    };

    const fetchData = async () => {
        const patientData = await PatientService.getPatient(params.id);
        const servicesData = await ServiceService.getServices();
        updateData([patientData, servicesData]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
    }, [data]);

    return <PatientForm data={data} />;
}

export default PatientFormController;
