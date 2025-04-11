import { useEffect, useState } from 'react'
import axios from 'axios'




function App() {

  const [actres, setActres] = useState([])
  function actresapi() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then((result) => setActres(result.data))

  }

  const [actor, setActor] = useState([])
  function actorsapi() {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then((result) => setActor(result.data))

  }


  useEffect(actresapi, [])


  useEffect(actorsapi, [])
  console.log(actres)
  console.log(actor)

  return (
    <>
      <main>
        <div className="container text-center">
          <h2>ACCTRES</h2>
          <div className="d-flex flex-wrap gap-3">
            {actres.map(item => (
              <div key={item.id}>
                <div className="card col-4" style={{ width: 18 + 'rem ' }}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">birth year {item.birth_year}</li>
                    <li className="list-group-item">naziolity {item.nationality}</li>
                    <li className="list-group-item">biography {item.biography}</li>
                    <li className="list-group-item">awards {item.awards}</li>
                  </ul>

                </div>
              </div>

            ))}

          </div>
          <h2>ACTORS</h2>
          <div className="d-flex flex-wrap gap-3">
            {actor.map(item => (
              <div key={item.id}>
                <div className="card col-4" style={{ width: 18 + 'rem ' }}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">birth year {item.birth_year}</li>
                    <li className="list-group-item">naziolity {item.nationality}</li>
                    <li className="list-group-item">biography {item.biography}</li>
                    <li className="list-group-item">awards {item.awards}</li>
                  </ul>

                </div>
              </div>

            ))}

          </div>

        </div>
      </main>
    </>
  )
}

export default App
