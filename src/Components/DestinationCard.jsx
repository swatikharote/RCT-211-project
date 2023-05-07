import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
;

export const DestinationCard = ({ id, destination, details, image }) => {
    return (
        <DIV key={id}>
            <Link to={`/housing/${id}`}> <img src={image} />
                <h1>{destination}</h1>
                <p>{details}</p>
            </Link>



        </DIV>
    )
}

const DIV = styled.div`

border-radius:5px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
align-items:center;
padding:10px;
height:auto;

.img{
    width:100%;
    padding:5px;    

}


`
