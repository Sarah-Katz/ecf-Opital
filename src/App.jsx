import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeController from "./controller/HomeController";
import PatientFormController from "./controller/PatientFormController";
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
