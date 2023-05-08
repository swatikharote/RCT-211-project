import React from 'react'
import { useState, useEffect } from 'react';
import styled from "styled-components";



export const ImageSlider = () => {


    const [currentSlide, setCurrentSlide] = useState(0);

    const images = ["https://media.istockphoto.com/id/173096906/photo/a-lounge-beside-the-pool-with-cocktails-on-table.jpg?s=612x612&w=0&k=20&c=NbLFIVE7_vp_pbivo-hZZxMLqKS7V5KXo065_NpkX-A="
        , "https://i.pinimg.com/originals/8a/42/c3/8a42c34cd06cdf879436f74ef8df8d6a.jpg "

        , "https://static.vecteezy.com/system/resources/previews/012/168/187/original/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG"
        , "https://static.vecteezy.com/system/resources/previews/012/168/187/original/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG"]


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlide,  images.length]);

    return (
        <DIV className="slideshow">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </DIV>
    )
}

const DIV = styled.div`

width :98%;

margin:auto;
margin-top:35px;


img{
    width:100%;
    height: 300px;
    border-radius:10px;
  
    
}
`
