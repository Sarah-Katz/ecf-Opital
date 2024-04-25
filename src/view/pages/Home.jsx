import { Link } from "react-router-dom";

function Home({ patients }) {
    return (
        <div className='mt-6'>
            {patients
                ? patients.map((patient, index) => {
                      //Add spaces to the social security number to make it easier to read
                      const socialSecurityNumber = patient.socialSecurityNumber.replace(
                          /(\d)(\d{2})(\d{2})(\d{2})(\d{3})(\d{3})(\d{2})/,
                          "$1 $2 $3 $4 $5 $6 $7"
                      );
                      return (
                          <div key={index} className='columns is-centered px-5'>
                              <div className='column is-4'>
                                  <div className='card p-5 is-color-accent'>
                                      <div className='card-content'>
                                          <p className='title is-4'>
                                              {patient.firstName} {patient.lastName}
                                          </p>
                                          <p className='subtitle is-4 has-text-white'>
                                              N° de sécurité sociale:{" "}
                                              <span className='has-text-secondary has-text-weight-semibold'>
                                                  {socialSecurityNumber}
                                              </span>
                                          </p>
                                          {patient.detail ? (
                                              <p className='subtitle is-4 has-text-white'>
                                                  Se trouve en service : {patient.detail.service.name}, chambre :{" "}
                                                  {patient.detail.room.number}
                                              </p>
                                          ) : null}
                                      </div>
                                      <footer className='card-footer'>
                                          <Link
                                              to={`patient/${patient.idPatient}`}
                                              state={patient}
                                              className='card-footer-item is-color-secondary has-text-white is-size-5'>
                                              <div className='icon pr-5'>
                                                  <i className='fas fa-lg fa-pencil'></i>
                                              </div>
                                              Modifier
                                          </Link>
                                          <button className='card-footer-item is-color-danger has-text-white is-size-5'>
                                            <div className="icon pr-5">
                                                <i className="fas fa-lg fa-trash-alt"></i>
                                            </div>
                                              Supprimer
                                          </button>
                                      </footer>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : "pas de patients"}
        </div>
    );
}
export default Home;
