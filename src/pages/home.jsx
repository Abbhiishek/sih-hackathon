import React from 'react'
import NavBar from '../Components/navbar'
import AboutPage from '../Components/about'
import Resources from '../Components/resources'
import TeamPage from '../Components/developer'
import FeaturesPage from '../Components/features'
import NewsLetterPage from '../Components/newsletter'
import Footer from '../Components/footer'
export default function App() {


    return(
        <div>
        <NavBar/>
        <AboutPage/>
        <Resources/>
        <TeamPage/>
        <FeaturesPage/>
        <NewsLetterPage/>
        <Footer/>
        </div>
        
    )

}