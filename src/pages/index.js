import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

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
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: `2rem`,
        }}
      >
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div>
      <form action="https://www.youtube.com/results">
        <label htmlFor="search">
          <h3 style={{ display: `inline`, color: `rebeccapurple` }}>
            Enter The Song You Want To Listen
          </h3>{" "}
        </label>
        <input
          type="text"
          id="search"
          placeholder="Elitni odredi ne koci"
          name="search_query"
          style={{ marginLeft: `1rem` }}
        />
        <button
          type="submit"
          style={{
            display: `block`,
            margin: `1rem auto`,
            borderRadius: `20px`,
            background: `rebeccapurple`,
            color: `white`,
          }}
        >
          Submit Song!
        </button>
      </form>

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
