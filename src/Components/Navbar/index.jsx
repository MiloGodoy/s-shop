import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav
      id="menu-responsive"
      className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white"
    >
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            S-Shop
          </NavLink>
        </li>
        <div id="nav-links" className="flex items-center gap-3">
          <li>
            <NavLink
              to="/"
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              onClick={() => context.setSearchByCategory("clothes")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              onClick={() => context.setSearchByCategory("electronics")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/furnitures"
              onClick={() => context.setSearchByCategory("furnitures")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              onClick={() => context.setSearchByCategory("toys")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/others"
              onClick={() => context.setSearchByCategory("others")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Others
            </NavLink>
          </li>
        </div>
      </ul>
      <ul className="flex items-center gap-3">
        {/*<li className="text-black/60">milogodoy@hotmail.com</li> */}
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li> */}
        <li id="last-item" className="flex items-center">
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <ShoppingCartIcon className="h-5 w-6 text-black" />
          </NavLink>
          <span>{context.cartProducts.length}</span>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay         flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    context.setSearchByCategory();
                    setToggleMenu(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  All
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clothes"
                  onClick={() => {
                    context.setSearchByCategory("clothes");
                    setToggleMenu(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  Clothes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/electronics"
                  onClick={() => {
                    context.setSearchByCategory("electronics");
                    setToggleMenu(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  Electronics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/furnitures"
                  onClick={() => {
                    context.setSearchByCategory("furnitures");
                    setToggleMenu(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  Furnitures
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/toys"
                  onClick={() => {
                    context.setSearchByCategory("toys");
                    setToggleMenu(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/others"
                  onClick={() => {
                    context.setSearchByCategory("others");
                    setToggleMenu(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  Others
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
