import React from 'react'
import DestinationList from './DestinationList'
import { ImageSlider } from './ImageSlider'
import { ButtonComp } from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export const Index = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/destination")
  }
  return (
    <div>
      <ImageSlider />
      <DestinationList />
      {/* <ButtonComp text={"Show more"} color={"pink"} onClick={handleNavigate} /> */}
      <Button onClick={handleNavigate} >Show more</Button>


    </div>
  )
}
