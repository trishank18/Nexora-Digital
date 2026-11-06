import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'lucide-react'

export function ContactForm({ career = false }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [success, setSuccess] = useState(false)
  const submit = () => { setSuccess(true); reset() }
  const error = (field) => errors[field] && <small id={`${field}-error`} role="alert">{errors[field].message}</small>
  const describedBy = (field) => errors[field] ? `${field}-error` : undefined

  return <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
    <div className="form-grid">
      <label>Your name<input autoComplete="name" placeholder="Alex Morgan" aria-invalid={!!errors.name} aria-describedby={describedBy('name')} {...register('name', { required: 'Please enter your name.' })}/>{error('name')}</label>
      <label>Email address<input type="email" autoComplete="email" placeholder="alex@company.com" aria-invalid={!!errors.email} aria-describedby={describedBy('email')} {...register('email', { required: 'Please enter your email.', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' } })}/>{error('email')}</label>
      {career ? <label className="full">Role you’re interested in<input placeholder="e.g. Product designer" aria-invalid={!!errors.subject} aria-describedby={describedBy('subject')} {...register('subject', { required: 'Please enter a role.' })}/>{error('subject')}</label> : <>
        <label>Phone number<input type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" aria-invalid={!!errors.phone} aria-describedby={describedBy('phone')} {...register('phone', { required: 'Please enter your phone number.', pattern: { value: /^[+\d().\s-]{7,20}$/, message: 'Enter a valid phone number.' } })}/>{error('phone')}</label>
        <label>What can we help with?<select defaultValue="" aria-invalid={!!errors.subject} aria-describedby={describedBy('subject')} {...register('subject', { required: 'Choose a service to get started.' })}><option value="" disabled>Select a service</option><option>Website development</option><option>UI/UX design</option><option>Mobile app development</option><option>Digital marketing</option><option>Something else</option></select>{error('subject')}</label>
      </>}
      <label className="full">{career ? 'A little about you' : 'Tell us about your project'}<textarea rows="5" placeholder={career ? 'Share a little about your experience…' : 'What are you working on, and what would success look like?'} aria-invalid={!!errors.message} aria-describedby={describedBy('message')} {...register('message', { required: 'Please add a message.', minLength: { value: 20, message: 'Please write at least 20 characters.' } })}/>{error('message')}</label>
    </div>
    <div className="form-actions"><button className="button" type="submit">{career ? 'Send application' : 'Send your message'} <ArrowRight size={16}/></button><span>We’ll be in touch within two business days.</span></div>
    {success && <div className="success-message" role="status">Thanks for reaching out! This demo form is frontend-only; no information was sent to a server.</div>}
    <p className="form-disclosure">Frontend-only demo form. Submissions are not stored or sent.</p>
  </form>
}
