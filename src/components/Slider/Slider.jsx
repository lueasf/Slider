// import React from 'react'
import leftChevron from '../../assets/left-arrow.svg'
import rightChevron from '../../assets/right-arrow.svg'
import "./Slider.css"

export default function Slider() {
  return (
    <>
        <p className="index-info">1 / 4</p>
        <div className="slider">
          <p className="image-info">Error, Process 1</p>  
          <img src="/images/P1.JPG" alt="painting" className="slider-img" />

          <button className="navigation-button prev-button">
            <img src={leftChevron} alt="previous image" />
          </button>

          <button className="navigation-button prev-button">
            <img src={rightChevron} alt="next image" />
          </button>

        </div>
    </>
  )
}
