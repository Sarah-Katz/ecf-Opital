import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Patient from "../../model/Patient";

// eslint-disable-next-line jsdoc/require-jsdoc
function PatientForm({ data, updateCallback, assignCallback, unassignCallback }) {
    PatientForm.propTypes = {
        data: PropTypes.shape({
            idPatient: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            birthdate: PropTypes.string,
            socialSecurityNumber: PropTypes.string,
            services: PropTypes.arrayOf(
                PropTypes.shape({
                    idService: PropTypes.number,
                    name: PropTypes.string,
                })
            ),
        }),
        updateCallback: PropTypes.func,
        assignCallback: PropTypes.func,
        unassignCallback: PropTypes.func,
    };

    const [formData, setFormData] = useState({ firstName: "", lastName: "", birthdate: "", ssn: "" });
    const [error, setError] = useState("");
    const [modalState, setModalState] = useState("");
    const [assignedService, setAssignedService] = useState();

    useEffect(() => {
        if (data[0]?.idPatient) {
            document.title = `Opital - ${data[0].lastName} ${data[0].firstName}`;
        } else {
            document.title = "Opital - Nouveau patient";
        }
        setAssignedService(data[0]?.detail?.service.idService);
        setFormData({
            firstName: data[0]?.firstName,
            lastName: data[0]?.lastName,
            birthdate: data[0]?.birthdate != undefined ? new Date(data[0]?.birthdate).toISOString().split("T")[0] : "",
            ssn: data[0]?.socialSecurityNumber,
        });
    }, [data]);

    const handleServiceChange = async (idService) => {
        if (idService === "0") {
            unassignCallback(data[0], idService);
            setError("Patient.e correctement désassigné.e du service.");
            showErrorModal();
        } else {
            const res = await assignCallback(data[0], idService);
            console.log(res);
            setError(res === 200 ? "Patient.e correctement assigné.e au service" : "Aucun lit n'est disponible pour ce service");
            showErrorModal();
        }
    };

    const handleChange = (e) => {
        switch (e.target.id) {
            case "firstName":
                setFormData({ ...formData, firstName: e.target.value });
                break;
            case "lastName":
                setFormData({ ...formData, lastName: e.target.value });
                break;
            case "birthdate":
                setFormData({ ...formData, birthdate: e.target.value });
                break;
            case "ssn":
                setFormData({ ...formData, ssn: e.target.value });
                break;
            case "service":
                handleServiceChange(e.target.value);
                break;
        }
    };

    const showErrorModal = () => {
        setModalState("is-active");
    };

    const closeModal = () => {
        setError("");
        setModalState("");
    };

    const checkErrors = (e) => {
        e.preventDefault();
        const errors = {};
        if (formData.firstName.length < 3) {
            errors.firstName = "Le prénom doit contenir au moins 3 caractères.";
        }
        if (!formData.lastName) {
            errors.lastName = "Le nom est obligatoire.";
        }
        if (!formData.birthdate) {
            errors.birthdate = "La date de naissance est obligatoire.";
        }
        if (formData.ssn.length !== 15) {
            errors.ssn = `Le numéro de sécurité sociale doit être de 15 chiffres (actuellement ${formData.ssn.length})`;
        }
        if (!RegExp(/^\d+$/).exec(formData.ssn)) {
            errors.ssn = "Le numéro de sécurité sociale doit contenir uniquement des chiffres.";
        }
        if (formData.ssn.slice(0, 1) > 2 || formData.ssn.slice(0, 1) < 1) {
            errors.ssn = "Le numéro de sécurité sociale doit commencer par 1 ou 2.";
        }
        if (Object.keys(errors).length === 0) {
            const updatedPatient = {
                idPatient: data[0]?.idPatient,
                firstName: formData.firstName,
                lastName: formData.lastName,
                birthdate: new Date(formData.birthdate).toISOString(),
                socialSecurityNumber: formData.ssn,
                createdAt: new Date(data[0].createdAt).toISOString(),
            };
            const res = updateCallback(Patient.fromJson(updatedPatient));
            if (res) {
                setError("Patient mis à jour avec succès");
                showErrorModal();
            }
        } else {
            setError(Object.values(errors).join("\n - "));
            showErrorModal();
        }
    };

    return (
        <>
            <form className='column is-4 is-offset-4 mt-5 is-color-accent has-round-edge'>
                <div className='level'>
                    <div className='level-left'>
                        <div className='level-item'>
                            <div className='field'>
                                <label className='label' htmlFor='firstName'>
                                    Prénom
                                </label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        id='firstName'
                                        type='text'
                                        value={formData?.firstName || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='level-right'>
                        <div className='level-item'>
                            <div className='field'>
                                <label className='label' htmlFor='lastName'>
                                    Nom
                                </label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        id='lastName'
                                        type='text'
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='level'>
                    <div className='level-left'>
                        <div className='level-item'>
                            <div className='field'>
                                <label className='label' htmlFor='birthdate'>
                                    Date de naissance
                                </label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        id='birthdate'
                                        type='date'
                                        value={data[0] != undefined ? formData.birthdate : ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='level-right'>
                        <div className='level-item'>
                            <div className='field'>
                                <label className='label' htmlFor='ssn'>
                                    N° de sécurité sociale
                                </label>
                                <div className='control'>
                                    <input className='input' id='ssn' type='text' value={formData.ssn} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='level'>
                    <div className='level-left'>
                        <div className='level-item'>
                            <div className='field'>
                                <label className='label' htmlFor='service'>
                                    Service
                                </label>
                                <div className='control'>
                                    <div className='select'>
                                        <select id='service' value={assignedService} onChange={handleChange}>
                                            <option value={0}>{"Aucun service assigné"}</option>
                                            {data[1]?.map((service) => {
                                                return (
                                                    <option key={service.idService} value={service.idService}>
                                                        {service.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='level-right'>
                        <div className='level-item'>
                            <div className='field'>
                                <label htmlFor='room' className='label'>
                                    N° de Chambre
                                </label>
                                <div className='control'>
                                    <input
                                        disabled
                                        type='text'
                                        id='room'
                                        className='input'
                                        value={data[0]?.detail?.room.number || "Aucune chambre assignée"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='control'>
                    <button className='button is-color-secondary has-text-white' onClick={checkErrors}>
                        <div className='icon p-3 mr-2'>
                            <i className='fas fa-pencil'></i>
                        </div>
                        Mettre à jour le patient
                    </button>
                </div>
            </form>
            <div id='deleteConfirmModal' className={`modal ${modalState}`}>
                <div className='modal-background'></div>
                <div className='modal-content has-text-centered is-color-primary has-round-edge'>
                    <div className='content p-5'>
                        <p className='title is-4 has-text-weight-semibold has-text-white'>{error}</p>
                        <div className='buttons is-centered'>
                            <button className='button is-color-accent has-text-white' onClick={closeModal}>
                                OK
                            </button>
                        </div>
                    </div>
                    <button className='modal-close is-large' aria-label='close' onClick={() => closeModal()}></button>
                </div>
            </div>
        </>
    );
}

export default PatientForm;
