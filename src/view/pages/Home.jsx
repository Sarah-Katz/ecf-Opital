import { useEffect } from "react";

function Home({ patients }) {
    useEffect(() => {
        console.log(patients);
    }, [patients]);

    return (
        <>
            {patients
                ? patients.map((patient, index) => {
                      return (
                          <div key={index} className='columns is-vcentered'>
                              <div className='column is-12'>
                                  <div className='card'>
                                      <div className='card-content'>
                                          <div className='media'>
                                              <div className='media-content'>
                                                  <p className='title is-4'>{patient.firstName}</p>
                                                  <p className='subtitle is-4'>{patient.lastName}</p>
                                                  <p className='subtitle is-6'>
                                                      {patient.detail ? patient.detail.service.name : null}
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : "pas de patients"}
        </>
    );
}
export default Home;
