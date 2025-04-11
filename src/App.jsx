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
        <h1>hi</h1>
      </main>
    </>
  )
}

export default App
