import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
export function NotFound() { return <section className="not-found"><span className="eyebrow">404 · WRONG TURN?</span><h1>This page took<br/><em>a little detour.</em></h1><p>The page you’re looking for isn’t here, but there’s plenty more to explore.</p><Link className="button" to="/"><ArrowLeft size={16}/> Back to home</Link></section> }
