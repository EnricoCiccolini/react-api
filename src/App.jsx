import { useEffect, useState } from 'react'
import axios from 'axios'




function App() {

  const [actor, setActor] = useState([])
  const [resarc, setresarc] = useState('')
  const [filterActor, setfilterActor] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const promis1 = await fetch('https://www.freetestapi.com/api/v1/actresses')
        const promis2 = await fetch('https://www.freetestapi.com/api/v1/actors')
        const [attori, attrici] = await Promise.all([promis2.json(), promis1.json()])
        const newArray = [...attori, ...attrici].sort((a, b) => a.name.localeCompare(b.name, { ignorePunctuation: true }))
        setActor(newArray)
      } catch (err) { console.error(err) }
    })()
  }, [])

  const handelfilter = () => {


    console.log('sono qui dentro')
    axios.get(`https://www.freetestapi.com/api/v1/actors?search=${resarc}`)
      .then(res => {
        if (res.data.length === 0) {
          axios.get(`https://www.freetestapi.com/api/v1/actresses?search=${resarc}`)
            .then(res2 => setfilterActor(res2.data))
        } else {
          setfilterActor(res.data)
        }

      })

  }
  console.log(filterActor)




  // let actorsAndActres = [...actor, ...actres].sort((a, b) => a.name.localeCompare(b.name, { ignorePunctuation: true }));





  return (
    <>
      <main>
        <input type="text" value={resarc} onChange={(e) => setresarc(e.target.value)} />
        <button onClick={handelfilter}>cerca</button>

        <div className="container text-center">
          <h2>ACCTRES and ACTORS</h2>
          <div className="d-flex flex-wrap gap-3">
            {(actor.length > 0 && filterActor.length > 0 ?
              filterActor.map(item => (
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

              ))

              : actor.map(item => (
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
              ))
            )
            }



          </div>

        </div>
      </main>
    </>
  )
}

export default App
