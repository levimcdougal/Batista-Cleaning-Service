import { useState } from 'react'
import { Phone, MessageSquare, Mail, CalendarCheck, Sparkles, ThumbsUp, ChevronDown } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const contactMethods = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '(480) 226-8435',
    desc: 'Give us a call anytime during business hours. We love hearing from you.',
    btnLabel: 'Call Now',
    href: 'tel:+14802268435',
  },
  {
    Icon: MessageSquare,
    label: 'Text Us',
    value: '(480) 226-8435',
    desc: "Prefer to text? Send us a message and we'll get back to you quickly.",
    btnLabel: 'Send a Text',
    href: 'sms:+14802268435',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'batistacleaningservicellc@gmail.com',
    smallValue: true,
    desc: 'Drop us an email for quotes, questions, or scheduling.',
    btnLabel: 'Send Email',
    href: 'mailto:batistacleaningservicellc@gmail.com',
  },
]

const steps = [
  {
    Icon: Phone,
    step: '01',
    title: 'Reach Out',
    desc: "Call, text, or email us to tell us about your space and what you need. We'll get back to you promptly.",
  },
  {
    Icon: CalendarCheck,
    step: '02',
    title: 'Schedule Your Clean',
    desc: "We'll find a date and time that works for you. No complicated booking — just a quick conversation.",
  },
  {
    Icon: Sparkles,
    step: '03',
    title: 'We Show Up & Clean',
    desc: "Our team arrives on time, fully equipped, and gets to work. You don't have to lift a finger.",
  },
  {
    Icon: ThumbsUp,
    step: '04',
    title: 'Enjoy Your Space',
    desc: "Walk into a spotless home or business and enjoy the results. We're not done until you're happy.",
  },
]

const faqs = [
  {
    q: 'How do I get a quote?',
    a: "Simply call, text, or email us with details about your space — square footage, number of rooms, and the type of clean you need. We'll give you a fair, transparent quote with no hidden fees.",
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: "Not at all. Many of our clients provide access and go about their day. We're fully insured and trustworthy, so you can have peace of mind whether you're home or not.",
  },
  {
    q: 'What cleaning products do you use?',
    a: 'We use eco-friendly, non-toxic cleaning products that are safe for kids, pets, and the environment — without sacrificing results.',
  },
  {
    q: 'How far in advance should I book?',
    a: "We recommend booking at least 48 hours in advance, but we do our best to accommodate last-minute requests. Give us a call and we'll see what we can do.",
  },
  {
    q: 'Do you offer recurring cleaning services?',
    a: 'Yes! We offer weekly, bi-weekly, and monthly recurring cleans at discounted rates. Consistency means a consistently clean space.',
  },
  {
    q: "What if I'm not satisfied with the clean?",
    a: "Your satisfaction is our priority. If something wasn't done to your standard, let us know within 24 hours and we'll come back to make it right — at no extra charge.",
  },
]

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  const answerId = `faq-answer-${index}`
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span>{q}</span>
        <ChevronDown size={18} strokeWidth={2} className="faq-chevron" />
      </button>
      {open && <p id={answerId} className="faq-answer">{a}</p>}
    </div>
  )
}

export default function Contact() {
  return (
    <main className="page-wrapper contact-page-new">
      <section className="page-hero">
        <p className="page-hero-kicker">Let’s make your space shine</p>
        <h1>Get In Touch</h1>
        <p>Arizona's highest-rated cleaning company since 1981. Reach out by phone, text, or email — Joshua and the team are ready to help.</p>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="section-inner">
          <div className="contact-intro">
            <p className="section-label">Contact us directly</p>
            <h2>Let&apos;s start with<br />a conversation.</h2>
            <p>No forms, no waiting. Pick your preferred way to reach us and we'll respond promptly.</p>
          </div>

          <FadeIn><div className="contact-cards">
            {contactMethods.map(({ Icon, label, value, smallValue, desc, btnLabel, href }) => (
              <div className="contact-card" key={label}>
                <div className="contact-card-icon">
                  <Icon size={30} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{label}</h3>
                <div className={`contact-card-value${smallValue ? ' contact-card-value-sm' : ''}`}>{value}</div>
                <p className="contact-card-desc">{desc}</p>
                <a href={href} className="contact-card-btn">{btnLabel}</a>
              </div>
            ))}
          </div></FadeIn>

        </div>
      </section>

      {/* Business Hours Banner */}
      <section className="hours-banner">
        <p className="hours-banner-label">Business Hours</p>
<div className="hours-banner-cols">
          <div className="hours-banner-col">
            <span className="hours-banner-day">Monday – Friday</span>
            <span className="hours-banner-time">8:00 AM – 6:00 PM</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Saturday</span>
            <span className="hours-banner-time">9:00 AM – 4:00 PM</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Sunday</span>
            <span className="hours-banner-time">By Appointment</span>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">The Process</p>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              Getting started is simple. Here's how it works from first contact to a spotless space.
            </p>
          </div>
          <FadeIn delay={150}><div className="steps-grid">
            {steps.map(({ Icon, step, title, desc }) => (
              <div className="step-card" key={step}>
                <div className="step-number">{step}</div>
                <div className="step-icon">
                  <Icon size={24} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know before booking. Can't find your answer? Just reach out.
            </p>
          </div>
          <FadeIn><div className="faq-list">
            {faqs.map(({ q, a }, index) => (
              <FaqItem key={q} q={q} a={a} index={index} />
            ))}
          </div></FadeIn>
        </div>
      </section>
    </main>
  )
}
