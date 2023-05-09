import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  const link = [
    { to: "/about", text: "About" },
    { to: "/support", text: "Support" },
    { to: "/product", text: "Housing" },
    { to: "/community", text: "Community" },
    { to: "/login", text: "Login" },
    { to: "./signup", text: "Providing Housing" },
  ];
  return (
    <Box>
      <Box width={"100%"} p={"10px"} background={"#c4d3e8"}>
        <DIV>
          <div className="logo">
            <Link to="/">
              <Image w={"60px"} src="./safe_travel_logo.png" />
            </Link>
          </div>
          <div className="menu-bar">
            {link.map((item) => (
              <div className={"menu-list"}>
                <div>
                  <Link
                    to={item.to}
                    style={{ textDecoration: "none", color: " #484848" }}
                  >
                    {item.text}
                  </Link>
                </div>
              </div>
            ))}
            <div className="hamburger">
              <button onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </DIV>
      </Box>
      <Box textAlign={"left"} pl="20px" pt="18px" fontSize={"20px"}>
        {show
          ? link.map((item) => (
              
                <div style={{marginBottom: "13px",}} >
                  <Link
                    to={item.to}
                    style={{
                      textDecoration: "none",
                      color: " #484848",
                      
                    }}
                  >
                    {item.text}
                  </Link>
                </div>
              
            ))
          : null}
      </Box>
    </Box>
  );
};

const DIV = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 20%;
  }
  .menu-bar {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }

  .hamburger {
    display: none;
  }

  @media all and (max-width: 425.5px) {
    margin-left: 10px;

    .menu-list {
      display: none;
    }
    .hamburger {
      display: block;
      font-size: 1.5rem;
    }
  }
  @media all and (max-width: 768px) {
    margin-left: 20px;

    .menu-bar {
      justify-content: end;
    }
    .menu-list {
      display: none;
    }
    .hamburger {
      display: block;
      font-size: 1.5rem;
    }
  }
`;
