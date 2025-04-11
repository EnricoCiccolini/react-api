import { useEffect, useState } from 'react'
import axios from 'axios'




function App() {

  const [actres, setactres] = useState([])
  function actresapi() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then((result) => setactres(result.data))

  }


  useEffect(actresapi, [])
  console.log(actres)
  return (
    <>
      <main>
        <div>
          {actres.map(item => (
            <div key={item.id}>
              <div className="card" style={{ width: 18 + 'rem ' }}>
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

        <div></div>
      </main>
    </>
  )
}

export default App
