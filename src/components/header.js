import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useState } from "react"
import styled from "styled-components"

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  /* border: button; */
  cursor: pointer;
  z-index: 5;
  margin: 0;
  outline: 0;
  align-items: center;

  div {
    width: 1.157rem;
    height: 0.2rem;
    background: white;
    border-radius: 5px;
    -webkit-transform-origin: 1px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    margin-left: ${({ nav }) => (nav ? "0.3rem" : "0rem")};

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
  display: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 30%;
  background: #663399a0;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  z-index: 4;

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
    margin-right: 2.5rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;

    &:hover {
      color: #6ab4ff;
    }
  }
`

const Header = ({ siteTitle }) => {
  const [nav, showNav] = useState(false)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        position: `sticky`,
        top: `0`,
        right: `0`,
        left: `0`,
        zIndex: `5`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              marginRight: `5rem`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Bio</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </MenuLinks>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
