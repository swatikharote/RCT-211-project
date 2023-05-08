import React from 'react'
import DestinationList from './DestinationList'
import { ImageSlider } from './ImageSlider'
import { useNavigate } from 'react-router-dom'
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
      <Button bg={'red.200'} mt={'20px'}onClick={handleNavigate} _hover={{background:'#E41749', color:'white'}} >Show more</Button>


    </div>
  )
}
