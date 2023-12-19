
import {  Link  } from "react-router-dom";
import NavBar from "./NavBar"; 
import { HeaderWrap } from "./HeaderStyle";

const Header = () => {
     
    return (
        <HeaderWrap>
            <div className="inner">
                <h1><Link to={"/"}>  <img src="./images/logo.svg" alt="" style={{width:'70px'}} /> </Link></h1>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;