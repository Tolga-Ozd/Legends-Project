import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";
import logo from "../assets/logo.png";


const Header = () => {
  return(
    
<div>
<Image src= {logo}  width= "200px"/>

<h1 className="my">Best of 10 Archers Of Earth </h1>
</div>

  
  )

}

export default Header
