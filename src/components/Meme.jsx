// import memesDataImport from "../memesData";
import { useEffect, useState } from 'react';
import './Meme.css';


export default function Meme() {

  const [memesData, setMemesData] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes").
      then(function (response) {
        return response.json();
      }).
      then(function (receivedData) {
        console.log(receivedData)
        setMemesData(receivedData.data.memes); 
      })
  }, []);

  function getNewRandomMeme(e) {
    e.preventDefault();
    const memesArray = memesData;

    const randomMemeId = Math.floor(Math.random() * memesArray.length);
    const randomMeme = memesArray[randomMemeId];

    setMeme((prevMemeState) => {
      return {
        ...prevMemeState,
        randomImage: randomMeme.url
      }
    })
  }


  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMemeState) => {
      return {
        ...prevMemeState,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="form--button"
          onClick={getNewRandomMeme}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}