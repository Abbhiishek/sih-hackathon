import React from 'react'
import NavBar from '../Components/navbar'
import LandingPage from '../Components/footer'
import AboutPage from '../Components/footer'
import Resources from '../Components/footer'
import TeamPage from '../Components/footer'
import FeaturesPage from '../Components/footer'
import NewsLetterPage from '../Components/footer'
import Footer from '../Components/footer'
export default function App() {


    return(
        <div>
        <NavBar/>
        <LandingPage/>
        <AboutPage/>
        <Resources/>
        <TeamPage/>
        <FeaturesPage/>
        <NewsLetterPage/>
        <Footer/>
        </div>
        
    )

}