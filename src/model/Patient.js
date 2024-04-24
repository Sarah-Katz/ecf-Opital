class Patient {
    idPatient;
    firstName;
    lastName;
    birthdate;
    socialSecurityNumber;
    createdAt;
    modifiedAt;

    /**
     * Creates a new Patient object
     * @param {number} idPatient The patient's id
     * @param {string} firstName The patient's first name
     * @param {string} lastName The patient's last name
     * @param {Date} birthdate The patient's birthdate
     * @param {String} socialSecurityNumber The patient's social security number
     * @param {Date} createdAt The patient's creation date
     * @param {Date} modifiedAt The patient's last modification date
     */
    constructor(idPatient, firstName, lastName, birthdate, socialSecurityNumber, createdAt, modifiedAt) {
        this.idPatient = idPatient;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.socialSecurityNumber = socialSecurityNumber;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}

export default Patient;
