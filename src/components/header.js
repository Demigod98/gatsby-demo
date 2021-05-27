import * as React from "react"
import PropTypes from "prop-types"
import { useState } from "react"
import styled from "styled-components"

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: space-around;
  -webkit-justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  /* border: button; */
  cursor: pointer;
  z-index: 5;
  margin: 0;
  outline: 0;
  align-items: center;
  -webkit-align-items: center;
  @media (min-width: 960px) {
    display: none;
  }

  div {
    width: 1.2rem;
    height: 0.2rem;
    background: white;
    border-radius: 5px;
    -webkit-transform-origin: -5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 200ms, transform 300ms;
    margin-left: ${({ nav }) => (nav ? "0.3rem" : "0rem")};

    :first-child {
      -webkit-transform: ${({ nav }) =>
        nav ? "rotate(-48grad)" : "rotate(0)"};
      transform: ${({ nav }) => (nav ? "rotate(48grad)" : "rotate(0)")};
    }
    :nth-child(2) {
      transform: ${({ nav }) => (nav ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      -webkit-transform: ${({ nav }) =>
        nav ? "rotate(-48grad)" : "rotate(0)"};
      transform: ${({ nav }) => (nav ? "rotate(-48grad)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
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
  @media (min-width: 960px) {
    width: 100%;
    pointer-events: none;
    background-color: transparent;
    transform: translateX(0);
  }

  ul {
    list-style-type: none;

    @media (min-width: 960px) {
      display: flex;
      flex-direction: row;
      position: relative;
      top: -43.5%;
      left: 30%;
      margin-right: 5rem;
    }
  }

  li {
    margin-top: 1rem;
    margin-right: 2.5rem;
  }

  a {
    text-decoration: none;
    color: white;
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
        <h1
          style={{
            color: `white`,
            margin: 0,
            marginRight: `5rem`,
          }}
        >
          Gatsby Page
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
