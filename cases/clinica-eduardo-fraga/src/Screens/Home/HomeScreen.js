import React from 'react'
import ImageSlider from '../../components/Slides/ImageSlider'
import { SliderData } from '../../components/Slides/SliderData'


const HomeScreen = () => {
  return (
    <div >
      <ImageSlider slides = {SliderData} />
      

    </div>
  )
}

export default HomeScreen