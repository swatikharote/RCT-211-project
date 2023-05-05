import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminSideBar from '../Components/AdminSideBar'
import styled from 'styled-components'

const AddProduct = () => {
    const initialState={
        name:"",
        image:"",
        location:"",
        price:"",
        category:"",
        gender:""
    
      }
      const [product, setProduct]=useState(initialState)
    
      const handleChange=(e)=>{
    const {name, value}=e.target
    setProduct((prev)=>{
      return {...prev, [name]: name==='price' ? +value : value}
    })
      }
      const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(product)
        
        setProduct(initialState)
      }
  return (
   <Flex>
    <AdminSideBar/>
    <DIV>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Product Name'
        name='name' value={product.name} onChange={(e)=>handleChange(e)} />
        <input type="text" placeholder='Product Image'
        name='image' value={product.image} onChange={(e)=>handleChange(e)} />
        <input type="text" placeholder='Product Brand'
        name='location' value={product.location} onChange={(e)=>handleChange(e)} />
        <input type="number" placeholder='Price'
        name='price' value={product.price} onChange={(e)=>handleChange(e)} />
        <select name="category" value={product.category}
         onChange={(e)=>handleChange(e)} >
            <option value="">Select Category</option>
            <option value="top-wear">Top Wear</option>
            <option value="bottom-wear">Bottom Wear</option>
            <option value="shoes">Shoes</option>
        </select>
        <select name="gender" value={product.gender}
         onChange={(e)=>handleChange(e)} >
            <option value="">Select Gender</option>
            <option value="male">Mens</option>
            <option value="female">Womens</option>
            <option value="kids">Kids</option>
        </select>
        <button type='submit'>ADD PRODUCT</button>
      </form>
    </DIV>
   </Flex>
  )
}

export default AddProduct

const DIV=styled.div`
width: 330px;
margin: auto;
border: 1px solid gray;
padding: 31px;

form{
  display:flex;
  flex-direction:column;
}
input{
  height: 23px;
  width: 100%;
  font-size: larger;
  margin-top: 13px;
  border: 1px solid black;
}
select{
  height: 28px;
  width: 100%;
  font-size: large;
  margin-top: 13px;
  border: 1px solid black;
}
button {
  margin-top: 10px;
  width: 102.5%;
  height: 28px;
  border: none;
}
`