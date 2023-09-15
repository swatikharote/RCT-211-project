import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundPage = () => {
    const navigate=useNavigate()

    const handleNotFound=()=>{
        navigate("/")
    }
  return (
    <DIV>
      <h1>Page Not Found</h1>
      <button onClick={handleNotFound}>Go to Home</button>
    </DIV>
  )
}

const DIV=styled.div`
    h1{
        text-align: center;
        font-size: 30px;
        color: #1b481b;
    }
    button{
        color: white;
        background-color: #1b481b;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 15px;
        padding: 5px;
        margin-top: 30px;
        display: block;
        margin: auto;
    }
`

export default NotFoundPage
