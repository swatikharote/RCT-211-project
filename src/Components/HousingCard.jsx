import { Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'


export const HousingCard = ({ person_image, person_name, ownerShip, id, address, price, type, rating, guestAllowed, amenities }) => {
    return (


        <DIV>
            <div className='ProductCard-image'>
                <img src={person_image} />
            </div>

            <Text fontSize={"25"}>{person_name}</Text>
            <p>{ownerShip}</p>
            <p>{type}</p>
            <p>{address}</p>
            <p>Rs.{price}</p>
            <p>{rating}</p>
            <p>{guestAllowed}</p>
            <p>{amenities}</p>



        </DIV>

    )
}


const DIV = styled.div`
    /* border:1px solid black; */
    height:auto;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 10px;
  


.image-card{
    min-height: 310px;
    border-radius:10%;
}

.ProductCard-image {
  display: flex;
  width: 100%;
  height: 350px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.ProductCard-image > img {
  width: 100%;
  height: 350px;
  border-radius:10%;
}
 h3 {
   font-weight:17px;

 }
`

