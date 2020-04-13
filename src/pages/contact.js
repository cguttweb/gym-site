import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import NavBar from '../components/NavBar'

function handleClicks(e) {
    e.preventDefault()
}

const contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <NavBar />
            <h2 style={{ textAlign: `center` }}>Contact Page</h2>
            <form action="#" style={{ padding: `2rem` }}>
                <label for="firstName">First Name:
                <input type="text" name="firstName" />
                </label>
                <label for="lastName">Last Name:
                <input type="text" name="lastName" />
                </label>
                <label for="email">Email:
                <input type="email" name="email" />
                </label>
                <label for="message">Message:
                <textarea name="message"></textarea>
                </label>
                <button style={{ backgroundColor: `#663399`, border: `1px solid #663399`, color: `#ffffff`, padding: `0.5rem`, textTransform: `uppercase` }} onClick={handleClicks}>Submit</button>
            </form>
        </Layout>
    )
}

export default contact
