import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <>
    <nav>
      <div className="navLinks">
        <NavLink className="link" to="/"><FontAwesomeIcon icon={faArrowLeft} /></NavLink>
        <NavLink className="link" to="/">
          Stocks
        </NavLink>

        <NavLink className="link" to="#">
          <FontAwesomeIcon icon={faMicrophone} />
        </NavLink>
        {/* <NavLink className="link" to="/myprofile">
          My Profile
        </NavLink> */}
      </div>
    </nav>
  </>
);

export default Navbar;
