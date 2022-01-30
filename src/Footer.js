import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import './Footer.css'

export default function footer() {
    return (
        <div>
            <div className="main-footer">
                <InstagramIcon fontSize="large" />
                <FacebookIcon fontSize="large"/>
                <MailIcon fontSize="large"/>
                <YouTubeIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
            </div>
        </div>
    )
}
