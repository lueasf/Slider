// import React from 'react'
import {useState} from 'react'
import leftChevron from '../../assets/left-arrow.svg'
import rightChevron from '../../assets/right-arrow.svg'
import "./Slider.css"
import sliderData from "../../data/sliderData" // import des données statiques

export default function Slider() {
  
  const [sliderIndex, setSliderIndex] = useState(1);
  // cette ligne de code permet de changer l'image en cliquant sur le bouton suivant
  // useSate permet de stocker la valeur de l'index de l'image et de commencer par la prem.

  function toggleImage(index){
    let newState; // pour boucler
    if (index + sliderIndex > sliderData.length){
      newState = 1;
    }
    else if(index + sliderIndex < 1){
      newState = sliderData.length; // ici 4
    }
    else {
      newState = index + sliderIndex
    }
    setSliderIndex(newState); // ici on change l'index de l'image

  }

  return (
    <>
    <h1>Artworks by <a href="https://www.instagram.com/lukomade/">Lvko</a></h1>
    <h2>Process series</h2>
        <p className="index-info">{sliderIndex}/{sliderData.length}</p>
        <div className="slider">
          <p className="image-info">{sliderData[sliderIndex-1].description}</p>  
          <img src={`/images/P${sliderIndex}.JPG`} alt="painting" className="slider-img" />
      
          <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button">
            <img src={leftChevron} alt="previous image" />
          </button>

          <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button">
            <img src={rightChevron} alt="next image" />
          </button>

        </div>
    </>
  )
}


// <p className="image-info">{sliderData[sliderIndex-1].description}</p>  
// peut etre remplacé par ...info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>

// onClick={() => toggleImage(-1)}, comme toggleImage prend un arg, on doit lui passer une fonction anonyme.
// On ne peut pas passer directement toggleImage(-1) car cela appelerait la fonction directement.

