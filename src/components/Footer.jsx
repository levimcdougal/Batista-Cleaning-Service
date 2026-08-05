import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Batista Cleaning Service
            </div>
            <p className="footer-tagline">
              Arizona's leading home cleaning experts since 1981. Voted highest-rated cleaning company on Yelp, Google, Facebook, and Industry Oversight.
            </p>
            <p className="footer-areas">Est. 1981 · Serving Arizona</p>
          </div>

          <div className="footer-col footer-col-services">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">House Cleaning</Link></li>
              <li><Link to="/services">Deep Cleaning</Link></li>
              <li><Link to="/services">Move In / Move Out</Link></li>
              <li><Link to="/services">Vacation Rental</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              (480) 226-8435<br />
              <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              (480) 226-8435<br />
              <Mail size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              batistacleaningservicellc@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} Batista Cleaning Service LLC. All rights reserved. · Joshua Batista, Owner
        </div>
      </div>
    </footer>
  )
}
