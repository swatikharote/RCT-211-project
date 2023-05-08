import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Image } from "@chakra-ui/react"

export const Navbar = () => {
    const link = [
        { to: '/about', text: 'About' },
        { to: '/support', text: 'Support' },
        { to: '/product', text: 'Housing' },
        { to: '/community', text: 'Community' },
        { to: '/login', text: 'Login' },
        { to: './signup', text: 'Providing Housing' }
        

    ]
    return (
        <Box width={"auto"} p={"10px"} background={"#c4d3e8"} mt={2}>
            <Flex m={"10px 0"} justifyContent={"space-around"} alignItems={"center"} >
                <Link to="/" ><Image w={'60px'} src="./safe_travel_logo.png" /></Link>
                {link.map((item) => (
                    <Link to={item.to} style={{ textDecoration: "none", color: " #484848" }}>{item.text}</Link>
                ))}
            </Flex>
        </Box>
    )
}
