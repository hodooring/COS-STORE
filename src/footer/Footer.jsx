import { Link } from "react-router-dom";
import { FooterWrap } from "./FooterStyle";

 
const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <h2><Link to={"/"}>  <img src="./images/logo.svg" alt="" style={{width:'70px'}} /> </Link></h2>
                
            </div>
        </FooterWrap>
    );
};

export default Footer;