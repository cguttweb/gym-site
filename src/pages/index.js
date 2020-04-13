import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from '../components/NavBar'
import Button from '../components/button'
import MapImage from '../components/mapImage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <div className="tablet-content" style={{ float: `right`, maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <h2>What We Offer</h2>
      <p>A range of world class facilities in a picturesque setting.</p>
      <p>Classes to suit everyone from beginners to fitness fanatics and everything frrom yoga and pilates to weight training and cardio workouts. There is even a private gym from one-on-one instruction from our personal trainers. </p>
      <p>Rest, relaxation and rejuventation with our range of spa treatments from arometherapy and acupuncture to beauty treatments such as facials, manicures and pedicures and our very own hair salon. </p>
      <p>The choice is yours. Why not pay us a visit and take a tour of our facilities for yourself.</p>
      <MapImage />
    </div>
    <div className="tablet-content" style={{ float: `left`, maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <Image />
      <h3 style={{ paddingTop: `1rem` }}>Where are we?</h3>
      <p>We are located in Hampshire with easy access from the motorway and just a short walk from the town centre. We are open 7 days a week so you please drop whenever you are free.</p>
      <section style={{ border: `1px solid #000000`, fontSize: `0.9rem`, maxWidth: `250px`, padding: `0.25rem` }}>
        <h4>Opening Hours:</h4>
        <ul>
          <li>Monday-Friday: 8am - 9pm</li>
          <li>Saturday: 8am - 8pm</li>
          <li>Sunday 10am - 6pm</li>
        </ul>
      </section>
    </div>
    <div>
      <Link to="/membership">
        <Button buttonText="Join Us now for an exclusive offer" />
      </Link>
    </div>
  </Layout>
)

export default IndexPage
