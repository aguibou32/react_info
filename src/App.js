
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Meme from './components/Meme';
import Box from './components/Box';

import boxesData from './boxesData';
import { useState } from 'react';
import Form from './components/Form';
import SignUp from './components/SignUp';
import Api from './components/Api';

function App() {

  const [squares, setSquares] = useState(boxesData);

  function toggle(id) {

    setSquares((prevState) => {
      const newSquaresArray = [];

      for (let i = 0; i < prevState.length; i++) {
        const currentSquare = prevState[i];

        if (currentSquare.id === id) {
          const newSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquaresArray.push(newSquare)
        } else {
          newSquaresArray.push(currentSquare);
        }
      }
      return newSquaresArray;
    })

    // setSquares((prevStateSquares) => {
    //   return prevStateSquares.map((square) =>{
    //     return square.id === id ? {...square, on: !square.on}: square
    //   })
    // })
  }

  return (
    <>
      <Header />
      <Meme />
      <Counter />
      {
        squares.map((square) => {
          return <Box
            key={square.id}
            id={square.id}
            on={square.on}
            handleClick={toggle}
          />
        })
      }
      <Form />
      <SignUp />
      <Api/>
    </>
  );
}

export default App;
