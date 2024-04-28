import PropTypes from "prop-types";

// eslint-disable-next-line jsdoc/require-jsdoc
function PatientForm({ data }) {
    PatientForm.propTypes = {
        data: PropTypes.shape({
            idPatient: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            birthdate: PropTypes.string,
            socialSecurityNumber: PropTypes.string,
            createdAt: PropTypes.string,
            modifiedAt: PropTypes.string,
            services: PropTypes.arrayOf(
                PropTypes.shape({
                    idService: PropTypes.number,
                    name: PropTypes.string,
                })
            ),
        }),
    };

    return (
        <form className='column is-4 is-offset-4'>
            <div className='level'>
                <div className='level-left'>
                    <div className='level-item'>
                        <div className='field'>
                            <label className='label' htmlFor='firstName'>
                                Prénom
                            </label>
                            <div className='control'>
                                <input className='input' id='firstName' type='text' value={data[0]?.firstName} />
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
                                <input className='input' id='lastName' type='text' value={data[0]?.lastName} />
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
                                    value={data[0] != undefined ? new Date(data[0].birthdate).toISOString().split("T")[0] : ""}
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
                                <input className='input' id='ssn' type='text' value={data[0]?.socialSecurityNumber} />
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
                            <div className='control' id='service'>
                                <div className='select'>
                                    <select value={data[0]?.detail?.service.idService}>
                                        <option value={0}>{"Aucun service sélectionné"}</option>
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
                                    value={data[0]?.detail?.room.number || "/"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PatientForm;
