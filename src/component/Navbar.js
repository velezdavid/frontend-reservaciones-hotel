import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";
import { LogOut, User } from "react-feather";
import { cerrarSesion, obtenerUsuario } from "../services/auth.service";
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: true,
      videoModal: false,
      usuario: {},
    };

    this.openModal = this.openModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    window.addEventListener("scroll", this.windowScroll);

    this.state.usuario = obtenerUsuario();
  }

  /**
   * Video modal open
   */
  openModal() {
    this.setState({ videoModal: true });
  }
  toggleMenu() {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
    if (document.getElementById("navigation")) {
      var elements = document
        .getElementById("navigation")
        .getElementsByTagName("a");
      for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
          if (elem.target.getAttribute("href") !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        };
      }
    }
  }
  windowScroll() {
    const navbar = document.getElementById("topnav");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (navbar !== null) {
        navbar?.classList.add("nav-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("nav-sticky");
      }
    }

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }

  getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = this.getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = this.getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = this.getClosest(
          parent || immediateParent,
          ".parent-menu-item"
        );

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = this.getClosest(
            parent,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = this.getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }

    var elements = document
      .getElementById("navigation")
      .getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].onclick = function (elem) {
        if (elem.target.getAttribute("href") === "#") {
          var submenu = elem.target.nextElementSibling.nextElementSibling;
          submenu.classList.toggle("open");
        }
      };
    }
  }

  render() {
    const toggleClass = this.state.isOpenMenu ? "hidden" : "block";

    return (
      <React.Fragment>
        <nav
          id="topnav"
          className={`defaultscroll is-sticky ${
            this.props.topnavClass ? this.props.topnavClass : ""
          }`}
        >
          {console.log(this.props.topnavClass)}
          <div
            className={`${
              this.props.topnavClass !== "" &&
              this.props.topnavClass !== undefined
                ? "container-fluid md:px-8 px-3"
                : "container"
            }`}
          >
            {/* <!-- Logo container--> */}
            {this.props.navClass === "" || this.props.navClass === undefined ? (
              <Link className="logo" to="/">
                <img
                  src={LogoDark}
                  className="inline-block dark:hidden"
                  alt=""
                />
                <img
                  src={LogoLight}
                  className="hidden dark:inline-block"
                  alt=""
                />
              </Link>
            ) : (
              <Link className="logo" to="#">
                <span className="inline-block dark:hidden">
                  <img src={LogoDark} className="l-dark" height="24" alt="" />
                  <img src={LogoLight} className="l-light" height="24" alt="" />
                </span>
                <img
                  src={LogoLight}
                  height="24"
                  className="hidden dark:inline-block"
                  alt=""
                />
              </Link>
            )}
            {/* <!-- End Logo container--> */}

            {/* <!-- Start Mobile Toggle --> */}
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  className="navbar-toggle"
                  id="isToggle"
                  onClick={this.toggleMenu}
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            {/* <!-- End Mobile Toggle --> */}

            {/* <!-- Login button Start --> */}
            {!this.state.usuario?.jwt && (
              <ul className="buy-button list-none mb-0">
                <li className="inline mb-0">
                  <Link
                    to="/auth-login"
                    className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
                  >
                    <User className="h-4 w-4 stroke-[3]"></User>
                  </Link>
                </li>

                <li className="sm:inline ps-1 mb-0 hidden">
                  <Link
                    to="/auth-signup"
                    className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
                  >
                    Registro
                  </Link>
                </li>
              </ul>
            )}
            {this.state.usuario?.jwt && (
              <ul className="buy-button list-none mb-0">
                <li className="inline mb-0">
                  <Link
                    onClick={cerrarSesion}
                    className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
                  >
                    <LogOut className="h-4 w-4 stroke-[3]"></LogOut>
                  </Link>
                </li>
              </ul>
            )}
            {/* <!--Login button End--> */}

            <div id="navigation" className={`${toggleClass}`}>
              {/* <!-- Navigation Menu--> */}
              <ul
                className={`navigation-menu  ${
                  this.props.navClass === "" ||
                  this.props.navClass === undefined
                    ? ""
                    : "nav-light"
                }   ${
                  this.props.topnavClass !== "" &&
                  this.props.topnavClass !== undefined
                    ? "justify-center"
                    : "justify-end"
                }`}
              >
                <li className="has-submenu parent-menu-item">
                  <Link to="/index-two" className="sub-menu-item">
                    Inicio
                  </Link>
                </li>

                {this.state.usuario?.jwt && (
                  <li className="has-submenu parent-parent-menu-item">
                    <Link to="/grid" className="sub-menu-item">
                      Habitaciones
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/list-map" className="sub-menu-item">
                    Mis reservaciones
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="sub-menu-item">
                    Contactos
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="sub-menu-item">
                    Términos y Servicios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar  */}
      </React.Fragment>
    );
  }
}

export default Navbar;
