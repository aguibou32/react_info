import { useState, useEffect } from "react"

export default function Api() {


  const [starWarsData, setStarWarsData] = useState({});
  const [id, setId] = useState(1);

  useEffect(function () {

    console.log("Effect ran !");

    fetch(`https://swapi.dev/api/people/${id}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setStarWarsData(data);
      });
  }, [id]);

  function nextPerson(e) {
    e.preventDefault();

    setId((prevPersonId) => {
      return prevPersonId + 1;
    })
  }

  // fetch("https://swapi.dev/api/people/1")
  // .then(function(res) {
  //   return res.json();
  // })
  // .then(function(data) {
  //   setStarWarsData(data);
  // });

  return <div>
    <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    <p>Person id: {id}</p>

    <button onClick={nextPerson}>Next</button>
  </div>
}