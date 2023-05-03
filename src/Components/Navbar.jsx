import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const link=[
    {to:'/about', text:'About'},
    {to:'/support', text:'Support'},
    {to:'/product', text:'Housing'},
    {to:'/community', text:'Community'},
    {to:'/login', text:'Login'},
    {to:'/signup', text:'SignUp'}

  ]
  return (
    <div>
{link.map((item)=>(
  <Link to={item.to}>{item.text}</Link>
))}
    </div>
  )
}
