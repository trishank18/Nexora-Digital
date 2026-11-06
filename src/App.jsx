import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './components/Shared.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Services } from './pages/Services.jsx'
import { Contact } from './pages/Contact.jsx'
import { Portfolio } from './pages/Portfolio.jsx'
import { Careers } from './pages/Careers.jsx'
import { NotFound } from './pages/NotFound.jsx'

function RouteEffects() {
 const { pathname } = useLocation()
 useEffect(() => { const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' }); const titles = { '/': 'Nexora Digital — Make your next move count', '/about': 'About us — Nexora Digital', '/services': 'Services — Nexora Digital', '/contact': 'Contact — Nexora Digital', '/work': 'Our work — Nexora Digital', '/careers': 'Careers — Nexora Digital' }; document.title = titles[pathname] || 'Page not found — Nexora Digital' }, [pathname])
 return null
}
export default function App() { return <><RouteEffects/><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/contact" element={<Contact/>}/><Route path="/work" element={<Portfolio/>}/><Route path="/careers" element={<Careers/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></> }
