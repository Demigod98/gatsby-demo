import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: ${({ nav }) => (nav ? "2rem" : "2.2rem")};
  background: transparent;
  border: button;
  cursor: pointer;
  z-index: 5;
  margin: 0;
  outline: 0;
  align-items: center;

  div {
    width: 1.2rem;
    height: 0.2rem;
    background: white;
    border-radius: 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 30%;
  background: rebeccapurple;
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

const IndexPage = () => {
  const [nav, showNav] = useState(false)

  return (
    <Layout>
      <Seo title="Home" />
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
      <h1>Hello Gatsby</h1>
      <p>This is my first Gatsby site.</p>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
        }}
      >
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{
            marginBottom: `1.45rem`,
          }}
        />
      </div>
      <h2>Link To About Page</h2>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div>
      <button>Click This Button</button>
      <p>This is Gatsby Astronaut Picture!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero
        dolor voluptates optio dolorum, quisquam sed deleniti a sit totam
        laudantium ad! Perspiciatis illum doloribus blanditiis sit cumque totam
        maiores beatae eligendi, cupiditate laboriosam iste aut provident sequi
        esse! Alias, odio. Quidem ratione at perspiciatis perferendis officia,
        ut suscipit sint enim nihil. Dolores nostrum libero nemo delectus ad
        voluptatem ducimus modi quam in repellendus sit sed numquam mollitia
        blanditiis, repudiandae perferendis neque. Fugiat earum praesentium
        velit repudiandae eos atque quasi maxime, nemo, numquam vero deserunt
        molestiae, ratione sequi! Quisquam ad quibusdam aliquam corporis itaque
        fuga rem, libero unde officiis exercitationem.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        assumenda esse fugiat tenetur sint totam aut porro modi! Explicabo
        inventore voluptates accusamus libero veritatis porro dolore placeat
        quasi assumenda eveniet rem, quos cupiditate, sapiente ut officia,
        suscipit deleniti! Quos eaque deleniti quae, ut ab, tempore repellendus
        atque sit iure natus adipisci, suscipit eius et velit! Quas temporibus
        perferendis assumenda nobis quaerat, fugit repellat, velit eaque
        laudantium enim hic vitae ea doloremque! Optio architecto totam labore
        porro suscipit obcaecati quae nihil odit voluptate harum voluptatum
        facilis id, veniam magnam illum dolorum non illo, accusamus excepturi ab
        libero incidunt consequatur! Fuga quis animi aut, minima esse
        exercitationem temporibus, ab est dignissimos ut ullam vitae, voluptates
        culpa perspiciatis. Amet commodi quis similique eos deserunt minima
        tempora laboriosam impedit, delectus harum molestias repellendus dolorum
        neque modi nam a dolor mollitia incidunt accusantium id provident
        asperiores? Natus molestiae, harum asperiores iusto adipisci error saepe
        fugiat quasi ex tenetur perferendis, id, culpa illo. Eius molestiae quis
        eligendi quidem suscipit qui tenetur, possimus numquam veniam corporis,
        explicabo animi? Accusantium, non a? Maxime quibusdam odio temporibus
        voluptatibus dolore ea, labore veritatis, maiores nam ipsa nihil
        inventore obcaecati sed corporis quam eius reiciendis earum expedita
        nesciunt sunt ex repudiandae in? Quasi doloremque sequi quibusdam
        voluptatum dicta adipisci aliquam! Adipisci quos dolores quod
        dignissimos, ex aspernatur repellat odio deleniti, hic neque delectus
        ullam beatae placeat quas quisquam vel sunt esse saepe voluptatum alias
        distinctio doloribus amet. Dicta aliquid, error minima fugit nostrum
        doloremque adipisci nesciunt quae provident. Nulla commodi natus fuga
        pariatur distinctio tenetur qui voluptate sint voluptas modi, dolore
        doloremque nemo sed delectus eos temporibus dolor nisi vitae sapiente,
        quod fugiat quas quia perferendis eum. Voluptate explicabo voluptas
        tenetur iure ipsam qui minima saepe asperiores omnis harum, molestiae
        dolorem nulla exercitationem nihil quasi numquam aliquid odit
        consequatur distinctio consectetur.
      </p>
    </Layout>
  )
}
export default IndexPage
