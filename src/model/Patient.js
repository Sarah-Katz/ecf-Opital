class Patient {
    idPatient;
    firstName;
    lastName;
    birthdate;
    socialSecurityNumber;
    createdAt;
    modifiedAt;
    detail;

    /**
     * Creates a new Patient object.
     * @param {number} idPatient - The patient's id.
     * @param {string} firstName - The patient's first name.
     * @param {string} lastName - The patient's last name.
     * @param {Date} birthdate - The patient's birthdate.
     * @param {string} socialSecurityNumber - The patient's social security number.
     * @param {Date} createdAt - The patient's creation date.
     * @param {Date} modifiedAt - The patient's last modification date.
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

    /**
     * Converts a JSON object into a Patient object.
     * @param {object} json - The JSON object containing the patient's data.
     * @returns {Patient} - A new Patient object created from the provided JSON.
     */
    static fromJson(json) {
        if (json === null) {
            return null;
        }
        return new Patient(
            json.idPatient,
            json.firstName,
            json.lastName,
            Date.parse(json.birthdate),
            json.socialSecurityNumber,
            Date.parse(json.createdAt),
            Date.parse(json.modifiedAt)
        );
    }

    /**
     * Converts a Patient object into a JSON object.
     * @param {Patient} patient - The Patient object to be converted to JSON.
     * @returns {object} - A new JSON object created from the provided Patient.
     */
    static toJson(patient) {
        return {
            idPatient: patient.idPatient,
            firstName: patient.firstName,
            lastName: patient.lastName,
            birthdate: new Date(patient.birthdate).toISOString(),
            socialSecurityNumber: patient.socialSecurityNumber,
            createdAt: new Date(patient.createdAt).toISOString(),
            modifiedAt: patient.modifiedAt ? new Date(patient.modifiedAt).toISOString() : null,
        };
    }
}

export default Patient;
