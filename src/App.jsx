import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'

function HomeContent() {
    return (
        <main>
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Education />
            <Projects />
            {/* <Philosophy /> */}
            <Contact />
        </main>
    );
}

function App() {
    return (
        <Router>
            <div className="app w-full min-h-screen bg-[#05060a] overflow-x-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
