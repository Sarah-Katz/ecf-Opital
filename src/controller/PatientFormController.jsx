import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PatientForm from "../view/pages/PatientForm";
import PatientService from "../service/PatientService";
import ServiceService from "../service/ServiceService";

// eslint-disable-next-line jsdoc/require-jsdoc
function PatientFormController() {
    const params = useParams();
    const [data, setData] = useState([]);

    const createPatient = (patient) => {
        return PatientService.createPatient(patient);
    };

    const updatePatient = (patient) => {
        return PatientService.updatePatient(patient);
    };

    const assignService = (patient, idService) => {
        const res = PatientService.assignService(patient, idService);
        return res;
    };

    const unassignService = (patient) => {
        return PatientService.unassignService(patient);
    };

    const updateData = (newData) => {
        setData(newData);
    };

    const fetchData = async () => {
        const patientData = await PatientService.getPatient(params.id);
        const servicesData = await ServiceService.getServices();
        updateData([patientData, servicesData]);
    };

    useEffect(() => {
        if (params.id) {
            fetchData();
        }
    }, []);

    useEffect(() => {}, [data]);

    return (
        <PatientForm
            data={data}
            createCallback={createPatient}
            updateCallback={updatePatient}
            assignCallback={assignService}
            unassignCallback={unassignService}
            refreshDataCallback={fetchData}
        />
    );
}

export default PatientFormController;
