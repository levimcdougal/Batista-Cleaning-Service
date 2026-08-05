import { Link } from 'react-router-dom'
import {
  ArrowRight, CalendarCheck, CheckCircle2,
  MessageCircle, ShieldCheck, Sparkles, Star,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/back-optimized.jpg'
import aboutImg from '../assets/clean-optimized.jpg'
import rentalImg from '../assets/air-optimized.jpg'
import residentialImg from '../assets/res-optimized.jpg'
import deepImg from '../assets/de-optimized.jpg'
import moveImg from '../assets/move-optimized.jpg'

const coreServices = [
  { image: residentialImg, width: 1000, height: 666, title: 'Residential Cleaning', text: 'Recurring, reliable home cleaning shaped around your schedule.' },
  { image: deepImg, width: 1000, height: 750, title: 'Deep Cleaning', text: 'A detailed reset for first visits, seasonal refreshes, and special occasions.' },
  { image: moveImg, width: 1000, height: 666, title: 'Move In / Move Out', text: 'A complete clean that lets you move forward without the mess.' },
  { image: rentalImg, width: 1000, height: 750, title: 'Vacation Rental Turnovers', text: 'Fast, hotel-quality resets that keep every stay guest-ready.' },
]

const difference = [
  { Icon: ShieldCheck, title: 'Trusted professionals', text: 'Careful, respectful service from a team that treats your property like its own.' },
  { Icon: CheckCircle2, title: 'Consistent quality', text: 'Clear standards and attention to the small details that guests and families notice.' },
  { Icon: MessageCircle, title: 'Real communication', text: 'Call, text, or email and reach a real local team that is ready to help.' },
]

export default function HomePage() {
  return (
    <main className="page-wrapper home-new">
      <section className="hero hero-new" style={{ backgroundImage: `url(${heroBg})` }}>
        <img
          className="hero-background"
          src={heroBg}
          alt=""
          width="1400"
          height="933"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-inner hero-new-inner">
          <div className="hero-eyebrow"><Star size={15} fill="currentColor" /> Arizona&apos;s 5-star cleaning team</div>
          <h1>More time for life.<br /><em>Less time cleaning.</em></h1>
          <p>Professional home cleaning and vacation rental management, delivered with the care and consistency your space deserves.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={17} /></Link>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
        </div>
        <div className="hero-trust">
          <span><strong>5.0</strong> customer rating</span>
          <span><strong>40+</strong> years of care</span>
          <span><strong>Local</strong> & family owned</span>
        </div>
      </section>

      <section className="platform-strip" aria-label="Customer ratings">
        <span className="platform-intro">Five-star rated across</span>
        <span>Google</span><i>★</i><span>Yelp</span><i>★</i><span>Facebook</span>
      </section>

      <section className="section about-new" id="about">
        <div className="section-inner about-new-grid">
          <FadeIn><div className="about-new-copy">
            <p className="section-label">About us</p>
            <h2 className="section-title">Clean spaces.<br />Clear minds.</h2>
            <p className="about-lead">Batista Cleaning Service is a family-owned Arizona company built around one simple belief: a clean space should make life feel lighter.</p>
            <p>Since 1981, we have helped homeowners and vacation rental hosts protect their time, their property, and their peace of mind. We bring dependable people, thoughtful communication, and a sharp eye for detail to every visit.</p>
            <Link to="/contact" className="text-link">Meet your local cleaning team <ArrowRight size={16} /></Link>
          </div></FadeIn>
          <FadeIn delay={120}><div className="about-image-card">
            <img
              src={aboutImg}
              alt="A bright, professionally cleaned home"
              loading="lazy"
              decoding="async"
              width="1100"
              height="733"
            />
            <div className="about-stamp"><strong>Since</strong><span>1981</span><small>Arizona</small></div>
          </div></FadeIn>
        </div>
      </section>

      <section className="section services-new" id="services">
        <div className="section-inner">
          <FadeIn><div className="section-heading-row">
            <div><p className="section-label">What we do</p><h2 className="section-title">A better clean for<br />every kind of home.</h2></div>
            <p>From everyday upkeep to a complete turnover, our team arrives prepared and leaves every space ready to enjoy.</p>
          </div></FadeIn>
          <div className="service-editorial-grid">
            {coreServices.map((service, index) => (
              <FadeIn delay={index * 75} key={service.title}><article className="service-editorial-card">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={service.width}
                  height={service.height}
                />
                <div className="service-editorial-content"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><Link to="/services" aria-label={`Learn more about ${service.title}`}><ArrowRight size={18} /></Link></div>
              </article></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-new" id="process">
        <div className="section-inner">
          <FadeIn><div className="center-heading"><p className="section-label">Our process</p><h2 className="section-title">Simple from start to spotless.</h2></div></FadeIn>
          <div className="process-line">
            {[
              ['01', CalendarCheck, 'Tell us what you need', 'Share your space, schedule, and priorities. We’ll create a clear quote.'],
              ['02', Sparkles, 'We take care of it', 'Our prepared team arrives on time and cleans with a consistent standard.'],
              ['03', Star, 'Enjoy the difference', 'Come back to a refreshed space—and more time for what matters.'],
            ].map(([number, Icon, title, text]) => <article key={number}><div className="process-icon"><Icon size={24} /></div><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section difference-new" id="difference">
        <div className="section-inner difference-grid">
          <div><p className="section-label">The Batista Difference</p><h2 className="section-title">Care you can see.<br />Service you can feel.</h2><p>Great cleaning is more than a checklist. It is the confidence that your team will show up, communicate, and care about the result every single time.</p><Link to="/contact" className="btn-primary">Experience the difference</Link></div>
          <div className="difference-list">{difference.map(({ Icon, title, text }) => <article key={title}><Icon size={25} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section home-services-after-difference">
        <div className="section-inner">
          <FadeIn><div className="section-heading-row">
            <div><p className="section-label">Our services</p><h2 className="section-title">The right care for<br />every space.</h2></div>
            <div className="home-services-intro"><p>Explore our complete range of residential cleaning, deep cleaning, move services, and vacation-rental care.</p><Link to="/services" className="btn-primary">View all services <ArrowRight size={17} /></Link></div>
          </div></FadeIn>
          <div className="home-service-pills">
            {coreServices.map(({ title, text }) => <article key={title}><Sparkles size={20}/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="review-feature">
        <div className="section-inner">
          <div className="review-section-heading">
            <div><p className="section-label">Client experiences</p><h2>Loved by homeowners<br />and hosts.</h2></div>
            <div className="review-summary"><strong>5.0</strong><span>★★★★★</span><small>Five-star rated service</small></div>
          </div>
          <div className="review-card-row">
            <article><div>★★★★★</div><p>“Reliable, fast, and my listings stay 5-star rated.”</p><span>Vacation rental owner</span></article>
            <article><div>★★★★★</div><p>“They are thorough, on time, and always leave the place looking amazing.”</p><span>Recurring cleaning client</span></article>
            <article><div>★★★★★</div><p>“Every corner was spotless. I will definitely be booking again.”</p><span>Deep cleaning client</span></article>
          </div>
          <div className="review-platforms"><span>Rated on Google</span><span>Yelp</span><span>Facebook</span></div>
        </div>
      </section>

      <section className="cta-banner cta-new"><div className="section-inner"><p>Ready when you are</p><h2>Let&apos;s make your space shine.</h2><Link to="/contact" className="btn-primary">Get your free quote <ArrowRight size={17} /></Link></div></section>
    </main>
  )
}
