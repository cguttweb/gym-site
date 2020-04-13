import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import NavBar from '../components/NavBar'
import Button from '../components/button'
import PoolImage from '../components/poolImage'

const membership = () => {
    return (
        <Layout>
            <SEO title="Membership" />
            <NavBar />
            <h2>Membership</h2>
            <h4>Why Join?</h4>
            <p>Join now for just £25/month and £70 enrolment fee for new members (usually £40/month) this includes a tour of the site, access to all gym facilities including our personal fitness and nutritional sessions to have you achieve your fitness goals.</p>
            <PoolImage />
            <h4>Do I need to join?</h4>
            <p>No. You can choose to pay per day for the gym facilities. Each spa treatment is individually priced to suit your needs or should you wish you create a mix of treatments to suit you.</p>
            <ul>
                <li>Individual</li>
                <li>Corporate - groups of 5 or more people</li>
            </ul>
            <p>Downloadable form with acceptable payment methods = all major credit/debit cards and paypal.</p>
            <a href="form.pdf">
                <Button buttonText="Download Form" />
            </a>
        </Layout>
    )
}

export default membership
