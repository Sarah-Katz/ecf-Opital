import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line jsdoc/require-jsdoc
function Home({ patients, callback }) {
    const [modalState, setModalState] = useState("");
    const [patientToDelete, setPatientToDelete] = useState(null);

    const handleModal = (idPatient) => {
        setModalState("is-active");
        setPatientToDelete(idPatient);
    };

    const closeModal = () => {
        setModalState("");
        setPatientToDelete(null);
    };

    const handleDelete = () => {
        callback(patientToDelete);
        closeModal();
    };

    return (
        <div className='mt-6'>
            <div className='columns is-centered'>
                <div className='column is-10'>
                    <div className='columns is-centered is-multiline px-5'>
                        {patients
                            ? patients.map((patient, index) => {
                                  //Add spaces to the social security number to make it easier to read
                                  const socialSecurityNumber = patient.socialSecurityNumber.replace(
                                      /(\d)(\d{2})(\d{2})(\d{2})(\d{3})(\d{3})(\d{2})/,
                                      "$1 $2 $3 $4 $5 $6 $7"
                                  );
                                  return (
                                      <div key={index} className='column is-5'>
                                          <div className='card p-5 is-color-accent'>
                                              <div className='card-content'>
                                                  <p className='title is-3 mb-1'>
                                                      <span className='icon mr-2'>
                                                          <i className='fas fa-sm fa-user'></i>
                                                      </span>
                                                      {patient.firstName} {patient.lastName}
                                                  </p>
                                                  <p className='subtitle is-4 has-text-white mb-1'>
                                                      <span className='icon mr-2'>
                                                          <i className='fas fa-sm fa-id-card'></i>
                                                      </span>
                                                      N° de sécurité sociale:{" "}
                                                      <span className='has-text-secondary has-text-weight-semibold'>
                                                          {socialSecurityNumber}
                                                      </span>
                                                  </p>
                                                  {patient.detail ? (
                                                      <p className='subtitle is-4 has-text-white'>
                                                          <span className='icon mr-2'>
                                                              <i className='fas fa-sm fa-bed'></i>
                                                          </span>
                                                          Service : {patient.detail.service.name}, Chambre :{" "}
                                                          {patient.detail.room.number}
                                                      </p>
                                                  ) : (
                                                      <p className='subtitle is-4 has-text-white'>
                                                          <span className='icon mr-2'>
                                                              <i className='fas fa-sm fa-exclamation-triangle'></i>{" "}
                                                          </span>{/* */}
                                                          Le.a patient.e n&aposest pas assigné.e à un service
                                                      </p>
                                                  )}
                                              </div>
                                              <footer className='card-footer'>
                                                  <Link
                                                      to={`patient/${patient.idPatient}`}
                                                      state={patient.idPatient}
                                                      className='card-footer-item is-color-secondary has-text-white is-size-5'>
                                                      <div className='icon pr-5'>
                                                          <i className='fas fa-lg fa-pencil'></i>
                                                      </div>
                                                      Modifier
                                                  </Link>
                                                  <button
                                                      className='card-footer-item is-color-danger has-text-white is-size-5'
                                                      onClick={() => {
                                                          handleModal(patient.idPatient);
                                                      }}>
                                                      <div className='icon pr-5'>
                                                          <i className='fas fa-lg fa-trash-alt'></i>
                                                      </div>
                                                      Supprimer
                                                  </button>
                                              </footer>
                                          </div>
                                      </div>
                                  );
                              })
                            : "pas de patients"}
                    </div>
                </div>
            </div>
            <div id='deleteConfirmModal' className={`modal ${modalState}`}>
                <div className='modal-background'></div>
                <div className='modal-content has-text-centered is-color-primary has-round-edge'>
                    <div className='content p-5'>
                        <p className='title is-4 has-text-weight-semibold has-text-white'>
                            Êtes-vous sûr de vouloir supprimer ce patient?
                        </p>
                        <div className='buttons is-centered'>
                            <button className='button is-color-danger has-text-white' onClick={() => handleDelete()}>
                                Oui, supprimer le patient
                            </button>
                            <button className='button is-color-accent has-text-white' onClick={() => closeModal()}>
                                non, revenir en arrière
                            </button>
                        </div>
                    </div>
                    <button className='modal-close is-large' aria-label='close' onClick={() => closeModal()}></button>
                </div>
            </div>
        </div>
    );
}
export default Home;
