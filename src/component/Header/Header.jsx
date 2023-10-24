import { Link } from "react-router-dom";
import '../css/header.css'
import { GlobalHooks } from "../context/CartContextProvider";


const Header = () => {
  const {state} = GlobalHooks()
  return (
    <div className="header">
      <div className="container">
        <div className="col-flex">
          <div className="logo">
            <Link to={'/'}><p to={'/'}>OnlineShop</p></Link>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/cart"}> cart <span>{state.cart.length}</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
