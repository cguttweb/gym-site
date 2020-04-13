import React from 'react'
import { FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa'

const footer = () => (
    <div style={{ clear: `both`, color: `#663399`, }}>
        <footer style={{ display: `flex`, justifyContent: `space-between` }}>
            <div style={{ fontSize: `0.8rem` }}>
                <p>Heather Valley Leisure<br />
                Hampshire Way<br />
                Hampshire<br />
                SO20 5ER
            </p>
            </div>
            <div className="social">
                <a href="mailto:info@heathervalleyleisure.com?subject=An Enquiry">
                    <FaEnvelope />
                </a>
                <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <FaTwitter />
                </a>
                <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <FaFacebook />
                </a>
            </div>
        </footer>
        <div style={{ display: `block`, fontSize: `0.8rem`, textAlign: `center` }}>Copyright  © {new Date().getFullYear()}, Heather Valley Leisure All Rights Reserved. Built with
            {` `}
            <span style={{ fontSize: `0.7rem` }}><a href="https://www.gatsbyjs.org">Gatsby</a></span></div>
    </div>

)

export default footer