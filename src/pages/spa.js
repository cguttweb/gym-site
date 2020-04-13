import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from '../components/NavBar'
import Image from '../components/therapyImage'

const SpaPage = () => (
  <Layout>
    <SEO title="Spa" />
    <NavBar />
    <h2>Spa</h2>
    <p>We also have a range of spa treatments for those of you that wish to relax and rejuvenate after hard day or week at work and get away from the stresses of fast-paced modern life.</p>
    <div style={{ float: `left`, paddingRight: `1rem` }}>
      <Image />
    </div>
    <ul>
      <li>Massages – individual and couples</li>
      <li>Alternative therapies – aromatherapy</li>
      <li>Beauty treatments – manicures, pedicures, hair salon, waxing, body wraps</li>
      <li>Packages – we also offer a range of packages to spoil yourself with a complete day of relaxation starting with manicure/pedicure, facial, waxing and to finish soak in a mud bath and a swedish massage. Jacuzzi/hot tub and even a sauna.</li>
    </ul>
    <p>Spa days are also an option costing £60 per person you can choose from a range of activities as well as enjoy a 2 course lunch.</p>
  </Layout>
)

export default SpaPage
