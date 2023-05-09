import { Box, Flex, LinkBox, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styled from "styled-components"


export const Footer = () => {
  return (
    <FOOTER  id="footer">
      
        <div id="footer-filter">
           
            <div id="footer-top">
                <div className="top-list">
                    <ul>
                      <p>Support</p>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation options</a></li>
                        <li><a href="#">Our COVID-19 Response</a></li>
                        <li><a href="#">Supporting people with disabilities</a></li>
                        <li><a href="#">Report a neighborhood concern</a></li>
                        
                    </ul>
                </div>
                <div className="top-list">
                    <ul>
                    <p>Community</p>
                        <li><a href="#">Disaster relief housing</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Celebrating diversity & belonging</a></li>
                        <li><a href="#">Combating discrimination</a></li>
                    </ul>
                </div>
                <div className="top-list">
                    <ul>
                      <p>Housing</p>
                        <li><a href="#">Try housing</a></li>
                        <li><a href="#">Pretection for Homeowner</a></li>
                        <li><a href="#">Explore housing resources</a></li>
                        <li><a href="#">Visit our community forun</a></li>
                        <li><a href="#">How to homeowner responsibly</a></li>
                    </ul>
                </div>
                <div className="top-list">
                    <ul>
                    <p>About</p>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Learn about new features</a></li>
                        <li><a href="#">Letter from our founder</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">WorldTravel Luxe</a></li>
                    </ul>
                </div>
    
            </div>
            <hr></hr>
            <div id='footer-bottom'>
            <div id="copyright">
            <span>© 2023 SafeTravel.inc. |</span>
            <a href="#"><span> Privacy Policy | Terms & Conditions</span></a>
            
        </div>
        <div>
            <Link style={{textDecoration:'none'}} to='/admin-destination'>Admin </Link>
        </div>
            </div>
      
        </div>
        
        
    </FOOTER>
  )
}
const FOOTER=styled.footer`
  
    margin-top:30px;
  
  #footer-option {
    display: flex;
    width: 515px;
    margin: auto;
    padding-top: 10px;
    color: black;
    height: 40px;
    text-align: center;
    padding-bottom: 10px;
    justify-content: space-between;
    flex-direction: row;
    
    font-family: Arial, Helvetica, sans-serif;
}
p{
  font-size: 16px;
  color: #23689B;
}

#footer-filter {
    background-color: #8EC3B0;

}
#footer-top{
    width: 90%;
    color: black;
    margin: auto;
    padding-bottom: 8px;
    padding-top: 10px;
}

#footer-filter ul {
    list-style: none;
}

#footer-filter a {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
}

#footer-filter a:hover {
    text-decoration: underline;
}

/* #footer-top {
        =======#footer-filter a {
            color: #eee;
            text-decoration: none;
            font-family: Arial, Helvetica, sans-serif;
        } */

#footer-top {
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    padding-right: 65px;
    padding-left: 22px;
    font-size: 13px;
    line-height: 23px;
    flex-direction: row;
    padding-top: 15px;
    padding-bottom: 25px;

}

/* footer-mid-section */


#footer-text {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 90%;
    margin: auto;
}
#footer-text>p{
    font-size: 11px;
    text-align: justify;
    font-weight: lighter;
}

#payment-logo span {
    font-size: 18px;

    color: rgb(254, 249, 249);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 10px;
    padding-top: 6px;
    padding-right: 15px;
}

#payment-logo i {
    padding-right: 20px;
    padding-top: 3px;
}

#copyright {
    height: 33px;
    text-align: left;
    padding-top: 15px;
    padding-bottom: 35px;
    background-color: #8EC3B0;
    color: #223143;
    font-size: 13px;
    font-family: Verdana, Geneva, Tahoma, sans-serif
}

#copyright a {
    text-decoration: none;
    color: rgb(32, 101, 191);
}
#footer-bottom{
  background-color: #8EC3B0;
  width: 88%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
}
/* #footer-bottom p{
  color: #223143;
} */
hr{
  
        height: 0.5px;
        background-color: rgb(31, 63, 107);
        border: none;
     
    
}
@media all and (max-width: 450px){
  #footer-top{
    flex-direction: column;
  }
}


`
