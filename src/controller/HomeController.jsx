import { useEffect, useState } from "react";
import Home from "../view/pages/Home";
import BedService from "../service/BedService";
import PatientService from "../service/PatientService";

function HomeController() {
    const [sortedPatients, setSortedPatients] = useState([]);

    const updatePatients = (list) => {
        console.log("UPDATING");
        setSortedPatients(list);
        console.log("UPDATED");
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
