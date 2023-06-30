import { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);
  const [isGoing, setIsGoing] = useState(true);
  const [thingsArray, setThingsArray] = useState([]);

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+1 230 4344-434",
    isAdmin: false
  });

  // function incrementCount(e) {
  //   e.preventDefault();
  //   setCount(prevCount => prevCount + 1)
  // }

  function incrementCount(e) {
    e.preventDefault();
    setCount(count + 1)
  }
 
  function decrementCount(e) {
    e.preventDefault(); 
    setCount(prevCount => prevCount - 1)
  }

  function toggleIsGoing() {
    setIsGoing(prevState => !prevState);
  }

  function toggleIsGoing() {
    setIsGoing(function (prevState) {
      return !prevState
    })
  }

  function addThing(e) {
    e.preventDefault();

    console.log(...thingsArray);
    console.log([...thingsArray, `thing ${thingsArray.length + 1}`]);

    setThingsArray(prevThingsArray => [...prevThingsArray, `thing ${thingsArray.length + 1}`]
      // setThingsArray([...thingsArray, `thing ${thingsArray.length + 1}`]) // not good practice because this does not ensure you are working with the 
      // latest state of the array

    )
  }

  function makeAdmin(e){
    e.preventDefault();
    setPerson((prevPersonState)=>{
      return {
        ...prevPersonState,
        isAdmin: !prevPersonState.isAdmin 
      }
    })
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>

      <div>
        <p>Do I feel like going out tonight ?</p>
        <button onClick={toggleIsGoing}>{isGoing ? "Yes" : "No"}</button>
      </div>

      <div>
        <ul>
          {thingsArray.map((thing) => {
            return <li>{thing}</li>
          })}
        </ul>
        <button onClick={addThing}>Add thing</button>
      </div>

      <div>
        <h1>Person</h1>
        <ul>
          <li>
            {person.firstName}
          </li>
          <li>
            {person.lastName}
          </li>
          <li>
            {person.phoneNumber}
          </li>
          <li>
            isAdmin: {person.isAdmin ? "Yes" : "No"}
          </li>
        </ul>

        <button onClick={makeAdmin}>{person.isAdmin ? "Revoke Admin Role" : "Make Admin"}</button>
      </div>
    </div>
  )

}