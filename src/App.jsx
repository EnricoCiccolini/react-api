import { useEffect, useState } from 'react'
import axios from 'axios'




function App() {

  const [actor, setActor] = useState([])
  function actresapi() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then((result) => setActor(oldArray => [...oldArray, ...result.data]))
  }

  function actorsapi() {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then((result) => {
        setActor(oldArray => [...oldArray, ...result.data])
      })
  }

  console.log(actor)
  useEffect(actresapi, [])
  useEffect(actorsapi, [])


  // let actorsAndActres = [...actor, ...actres].sort((a, b) => a.name.localeCompare(b.name, { ignorePunctuation: true }));





  return (
    <>
      <main>
        <div className="container text-center">
          <h2>ACCTRES and ACTORS</h2>
          <div className="d-flex flex-wrap gap-3">
            {actor.map(item => (
              <div key={item.id + item.name}>
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
