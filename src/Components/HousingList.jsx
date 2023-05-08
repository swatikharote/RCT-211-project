import React from 'react'

export const HousingList = ({ person_image, person_name, ownerShip, id, address, price, type, rating, guestAllowed, amenities }) => {
    return (
        <div>
            <img src={person_image} />
            <p>{person_name}</p>
            <p>{ownerShip}</p>
            <p>{address}</p>
            <p>Rs.{price} /day</p>
            <p>{rating}</p>
            <p>{guestAllowed}</p>
            <p>{amenities}</p>



        </div>
    )
}
