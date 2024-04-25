import { useEffect, useState } from "react";
import Home from "../view/pages/Home";
import BedService from "../service/BedService";
import PatientService from "../service/PatientService";

function HomeController() {
    const [sortedPatients, setSortedPatients] = useState([]);

    const updatePatients = (list) => {
        setSortedPatients(list);
    };

    const fetchPatients = async () => {
        const patients = await PatientService.getPatients();
        const sort = PatientService.sortPatients(await BedService.getAssignedBeds(), patients);
        updatePatients(sort);
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    return <>{sortedPatients && <Home patients={sortedPatients} />}</>;
}

export default HomeController;
