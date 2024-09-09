import React, { useState, useEffect } from 'react';
import './header.scss';
import {
  //Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  // NavLink,
  //NavbarText,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu
} from 'reactstrap';

import brandlogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  // header scroll start
  const [scroll, setScroll] = useState(false);
  // const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  // header scroll end

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={scroll ? 'navbgset' : ''}>
        <Navbar color="light" light expand="xl" className="mynavbar px-xl-0" fixed="top">
          <div className="container">
            <NavbarBrand href="/">
              <img style={{ width: '60px' }} src={brandlogo} class="logo" alt="brandlogo" />
            </NavbarBrand>
            <NavbarToggler className="p-0">
              <div className={`smClose ${isOpen ? 'active' : ''}`} onClick={toggle}>
                <svg className="closeicon" viewBox="0 0 800 600">
                  <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                  <path d="M300,320 L460,320" className="middle"></path>
                  <path
                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                    className="bottom"
                    transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                  ></path>
                </svg>
              </div>
            </NavbarToggler>

            <div isOpen={isOpen} navbar className={`menucollapse ${isOpen ? 'show' : ''}`}>
              <Nav className="ml-auto" navbar>
                <NavItem style={{ paddingRight: '15px' }}>
                  <Link className="nav-link" to="/roadmap">
                    <span>Roadmap</span>
                  </Link>
                </NavItem>
                <NavItem style={{ paddingRight: '15px' }}>
                  <UncontrolledDropdown className="position-relative d-inline-block">
                    <DropdownToggle tag="a" className="btn btn-Icon nav-link">
                      <span>
                        Products <img style={{ width: '10px' }} src={require('../../assets/images/arrowdown.svg').default} alt="arrowdown.svg" />
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right className="custom-dropdownmenu">
                      <ul id="usermenu" role="menu" style={{ padding: '15px 0px' }}>
                        <li role="menuitem">
                          <Link style={{ fontSize: '16px', paddingBottom: '5px' }} className="dropdown-item" to="/tech-nexus-app">
                            Tech nexus
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link style={{ fontSize: '16px', paddingBottom: '5px' }} className="dropdown-item" to="/visa-processing-app">
                            Visa processing app
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link style={{ fontSize: '16px', paddingBottom: '5px' }} className="dropdown-item" to="/career-development-app">
                            Career development app
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link style={{ fontSize: '16px', paddingBottom: '5px' }} className="dropdown-item" to="/decentralised-trade">
                            Decentralised Trade
                          </Link>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem style={{ paddingRight: '15px' }}>
                  <Link className="nav-link" to="/blog">
                    <span>News</span>
                  </Link>
                </NavItem>
              </Nav>
              <NavbarText>
                <Link to="/" class="btn button-primary buttonheader" role="button">
                  {' '}
                  <span class="px-2">Buy</span>
                </Link>
              </NavbarText>
            </div>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
