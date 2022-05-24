
import "./Waiter.css";
import LogoImage from "../../img/Logo_Image.png";
import LogoLogout from "../../img/Logo_out.png";
import { logout } from "../../lib/firebaseAuth";
import { auth } from "../../lib/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../Menu";



export default function WaiterPage() {
  const navigate = useNavigate();

  const handleClick = async () => {
    await logout(auth);
    navigate("/");
  };

  const [filterMenu, setFilterMenu] = useState();
 
 
  return (
    <div className="container-waiter">
      <nav className="container-head">
        <img className="logo-icon-waiter-out" src={LogoLogout} alt="logo-icon"  onClick={handleClick}/>
      
        <img className="logo-icon-waiter" src={LogoImage} alt="logo-icon" />
      </nav>
      <section className="container-products">
        <div className="option-menu">
          <button className="btn-menu" value="breakfast" onClick={(e) => setFilterMenu(e.target.value)}>
          {" "}
          Breakfast          
          </button>
          <button type="button" className="btn-menu" value="burgers" onClick={(e) => setFilterMenu(e.target.value)}>
            {" "}
            Burger
          </button>
          <button type="button" className="btn-menu" value="dessert" onClick={(e) => setFilterMenu(e.target.value)}>
            {" "}
            Dessert
          </button>
          <button type="button" className="btn-menu" value="beverage" onClick={(e) => setFilterMenu(e.target.value)}>
            {" "}
            Beverage
          </button>
        </div>
        <div className="container-menu1" >
      <Menu option={filterMenu}/>

        </div>
      </section>
      <section className="container-order">
        <div className="container-status-order">
          <h3>Status Ordenes</h3>
          <h3>Orden 1</h3>
          <h3>Orden 2</h3>
        </div>
       
           <button type="button" className="btn-new-order" value="beverage" >
            {" "}
           New Order
          </button>
     
          <div className="container-new-order">

          </div>
      
      </section>
      <section></section>
    </div>
  );
}
