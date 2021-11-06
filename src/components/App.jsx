import React, {useEffect, useState} from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import {PortfolioProvider} from '../context/context';
import {aboutData, contactData, contractData, footerData, heroData, projectsData} from '../mock/data';

function App() {
    const [hero, setHero] = useState({});
    const [about, setAbout] = useState({});
    const [projects, setProjects] = useState([]);
    const [contact, setContact] = useState({});
    const [footer, setFooter] = useState({});

    useEffect(() => {
        setHero({...heroData});
        setAbout({...aboutData});
        setAbout({...contactData});
        setProjects([...projectsData]);
        setFooter({...footerData});
    }, []);

        return (
            <PortfolioProvider value={{hero, about, projects, contact, footer}}>
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </PortfolioProvider>
        );
    }


export default App;
