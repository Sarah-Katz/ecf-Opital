import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeController from "./controller/HomeController";
import ServiceController from "./controller/ServiceController";
import PatientFormController from "./controller/PatientFormController";
import ServiceDetailController from "./controller/ServiceDetailController";
import NavBar from "./view/components/NavBar";


// eslint-disable-next-line jsdoc/require-jsdoc
function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomeController />} />
                <Route path='/patient/add' element={<PatientFormController />} />
                <Route path='/patient/:id' element={<PatientFormController />} />
                <Route path='/services' element={<ServiceController />} />
                <Route path='services/:id' element={<ServiceDetailController />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
