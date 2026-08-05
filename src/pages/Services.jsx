import { Link } from 'react-router-dom'
import { Home, Sparkles, Key, Package, Headphones, KeyRound, LineChart, MessageCircle, Wrench } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import resImg from '../assets/res-optimized.jpg'
import cleanImg from '../assets/de-optimized.jpg'
import airImg from '../assets/air-optimized.jpg'
import moveImg from '../assets/move-optimized.jpg'

const services = [
  {
    Icon: Home,
    image: resImg,
    title: 'House Cleaning',
    desc: 'Your home deserves to be a sanctuary. Our residential cleaning service covers every room, every corner, and every surface — leaving your space fresh, organized, and truly clean. Available on a weekly, bi-weekly, monthly, or one-time basis.',
    includes: [
      'Kitchen deep clean (counters, appliances, sink)',
      'Bathroom scrubbing and sanitizing',
      'Vacuuming and mopping all floors',
      'Dusting surfaces, blinds, and fans',
      'Bedroom tidying and linen change (on request)',
      'Trash removal throughout',
      'Weekly, bi-weekly, and monthly scheduling available',
    ],
  },
  {
    Icon: Sparkles,
    image: cleanImg,
    title: 'Deep Cleaning',
    desc: 'More thorough than a standard clean, our deep cleaning service tackles the buildup and grime that regular cleaning misses. Perfect for first-time visits, seasonal refreshes, before a big event, or move-in prep.',
    includes: [
      'Inside oven, fridge, and microwave',
      'Baseboards, trim, and windowsills wiped down',
      'Scrubbing grout and tile in bathrooms',
      'Interior cabinet and drawer cleaning',
      'Light fixtures and ceiling fans detailed',
      'Behind and underneath furniture cleaned',
    ],
  },
  {
    Icon: Package,
    image: moveImg,
    title: 'Move In / Move Out',
    desc: "Moving is stressful enough. Let us handle the cleaning so you can focus on your next chapter. Whether you're leaving a place behind or starting fresh, we'll make sure every inch is spotless.",
    includes: [
      'Interior cabinet and drawer cleaning',
      'Appliance deep clean inside and out',
      'Baseboards, trim, and windowsills wiped',
      'Walls spot-cleaned where needed',
      'All floors scrubbed and polished',
      'Final walkthrough to ensure nothing is missed',
    ],
  },
  {
    Icon: Key,
    image: airImg,
    title: 'Vacation Rental',
    desc: 'Full turnover management for your vacation rental. We specialize in fast, thorough 5-star turnovers timed to your check-in and check-out windows — so every guest walks into a hotel-quality space.',
    includes: [
      '5-star turnover cleaning between guests',
      'Full linen change, bed making, and linen rental program',
      'Kitchen and dishes cleaned and reset',
      'Bathroom scrubbed and restocked',
      'Inventory restocking of amenities and supplies',
      'Repair coordination as needed',
    ],
  },
]

const managementServices = [
  { Icon: Headphones, title: 'Guest Management', text: 'Responsive support from the first booking question through check-out.' },
  { Icon: MessageCircle, title: 'Guest Communication', text: 'Personal, dependable help when guests need an answer—day or night.' },
  { Icon: LineChart, title: 'Booking Optimization', text: 'Thoughtful pricing and listing oversight designed to support occupancy.' },
  { Icon: Sparkles, title: 'Turnover Coordination', text: 'Cleaning, linen changes, restocking, and final checks between every stay.' },
  { Icon: Wrench, title: 'Property Care', text: 'Repair coordination, routine audits, lawn care, and pool-service scheduling.' },
]

const standardCleanRooms = [
  {
    room: 'Throughout Home',
    items: [
      'Sweep and mop floors',
      'Vacuum all carpeted areas, including area rugs',
      'Lightly dust baseboards',
      'Wipe window sills',
      'Dust blinds and report broken slats',
      'Straighten art and mirrors on walls and surfaces',
      'Empty all trash, line trash cans with new bags, and remove used bags',
      'Wipe down all surfaces including beneath items on countertops, then replace items neatly',
      'Check windows for interior smudges',
    ],
  },
  {
    room: 'Kitchen',
    items: [
      'Clean countertops and stovetop',
      'Inspect toaster for crumbs, clean interior, wipe exterior & underneath',
      'Check/replenish coffee and creamer supply',
      'Check coffee machine for used pod and clean',
      'Straighten drawers/cabinet',
      'Swap out used kitchen towels for fresh ones',
      'Clean microwave inside (remove tray), outside, and underneath (if applicable)',
      'Check hand and dish soap supply, replenish (if necessary)',
      'Wipe outside of trash can, including lid',
      'Clean sink, run disposal to clear of particulates/food',
      'Dry sink (no spots)',
    ],
  },
  {
    room: 'Living Room',
    items: [
      'Dust all tables & TV console',
      'Vacuum sofa & chairs',
      'Fluff/straighten pillows & throw blanket',
      'Straighten coffee and end tables',
    ],
  },
  {
    room: 'Bedrooms',
    items: [
      'Dust all tables and bed frame',
      'Change sheets, make bed with hotel corners (Vacation rentals or customer request)',
      'Check throw blankets and pillows for stains, wash or spot clean if necessary',
    ],
  },
  {
    room: 'Bathrooms',
    items: [
      'Clean counter & sink (watching for hair)',
      'Clean soap container and replenish soap if necessary',
      'Wipe sink fixtures and all chrome (spot free)',
      'Clean mirror/medicine cabinet mirror',
      'Check tissue level, replace if low',
      'Clean toilet (inside & out/behind)',
      'Refresh toilet paper and fold ends into triangle',
      'Stock 2 extra rolls of toilet paper per bathroom, + 1 extra roll per additional guests (Vacation rentals)',
      'Clean bathtub and/or shower, including pan and surrounding walls (watching for hair)',
      'Clean bath amenity dispenser, replenish if necessary',
      'Check for signs of mold on shower liner, wash or replace if necessary',
    ],
  },
  {
    room: 'Patio / Balcony',
    items: [
      'Ensure outdoor furniture is clean and orderly',
    ],
  },
]

const checklistRooms = [
  {
    room: 'Kitchen',
    items: [
      'Wash and put away dishes',
      'Wipe down cabinets',
      'Organize cabinets',
      'Organize drawers',
      'Throw out expired food in pantry, fridge, & freezer',
      'Wipe down & disinfect interior of fridge & freezer',
      'Organize pantry items',
      'Empty trash',
      'Scrub inside of microwave',
      'Wipe down backsplash',
      'Wipe down countertops',
      'Deep clean oven & stovetop',
      'Wipe down appliances',
      'Dust tops of cabinets',
      'Scrub & disinfect sink',
      'Clean garbage disposal w/ ice and lemon slices',
      'Wash out garbage can',
    ],
  },
  {
    room: 'Living Room',
    items: [
      'Dust mantel/shelves/picture frames',
      'Dust tabletops',
      'Dust electronics',
      'Organize miscellaneous items',
      'Organize media cabinet',
      'Steam clean sofas/chairs or wash slipcovers',
      'Wash throw blankets and pillow covers',
      'Vacuum drapes w/ attachment',
    ],
  },
  {
    room: 'Dining Room',
    items: [
      'Dust top of china cabinet / buffet table',
      'Organize miscellaneous items',
      'Wipe down table',
      'Polish silver',
    ],
  },
  {
    room: 'Bathrooms',
    items: [
      'Scrub shower walls & fixtures',
      'Scrub bathtub & faucet',
      'Clean / wash shower curtain',
      'Empty trash',
      'Wash out trash can',
      'Wipe down mirrors',
      'Scrub countertops & sink faucet',
      'Scrub toilet',
      'Wash rugs',
      'Clean out / organize cabinets',
      'Clean out / organize drawers',
      'Wipe down cabinets',
    ],
  },
  {
    room: 'Bedrooms',
    items: [
      'Dust tops of dressers / headboard',
      'Vacuum drapes w/ attachment',
      'Pick up clothes',
      'Wash pillows',
      'Wash bedding',
      'Flip and rotate mattress',
    ],
  },
  {
    room: 'Closets',
    items: [
      'Sort clothes to keep/donate/throw out',
      'Take dry cleaning and/or clothes to be tailored',
      'Organize items',
      'Dust shelves',
    ],
  },
  {
    room: 'Office',
    items: [
      'File documents / important papers',
      'Backup and/or delete old files on computer',
      'Organize cabinets / drawers',
      'Refill office supplies',
      'Dust desk top & furniture',
      'Dust electronics',
    ],
  },
  {
    room: 'Entryway',
    items: [
      'Dust furniture',
      'Clean rug / welcome mat',
      'Organize shoes/coats',
    ],
  },
  {
    room: 'Laundry Room',
    items: [
      'Empty trash',
      'Run cleaning cycle in washing machine',
      'Clean out dryer vents & duct',
      'Wipe down exterior of washer & dryer',
      'Reorganize / discard old cleaning supplies',
    ],
  },
  {
    room: 'Garage',
    items: [
      'Sweep out floors and clean up any oil spills',
      'Clean out vehicles',
      'Take trash / recycling to disposal center',
      'Put away / organize tools',
      'Organize sporting equipment / toys',
      'Organize seasonal decor in bins',
    ],
  },
  {
    room: 'Throughout the House',
    items: [
      'Change air filters',
      'Change batteries in smoke / CO2 detectors',
      'Polish wood floors',
      'Steam clean carpets',
      'Change burned out light bulbs',
      'Dust light fixtures',
      'Dust ceiling/corners of room',
      'Dust shelves/picture frames',
      'Dust decorative accents',
      'Dust blinds & window sills',
      'Dust baseboards',
      'Dust doors & doorframes',
      'Sweep / mop / vacuum floors & rugs',
      'Wash windows',
    ],
  },
]

const tabs = [
  { label: 'Standard Clean', data: standardCleanRooms },
  { label: 'Deep Cleaning', data: checklistRooms },
]

export default function Services() {
  void tabs
  return (
    <main className="page-wrapper services-page-new">
      <section className="page-hero">
        <p className="page-hero-kicker">Professional care for every space</p>
        <h1>Our Services</h1>
        <p>Arizona's highest-rated cleaning company — professional services for homes, vacation rentals, move-ins, move-outs, and everything in between.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-page-intro">
            <p className="section-label">Choose your clean</p>
            <h2>Designed around<br />the way you live.</h2>
          </div>
          <div className="services-full-grid">
            {services.map(({ Icon, image, title, desc, includes }, i) => (
              <FadeIn key={title} delay={i * 100}>
              <div className="service-card-full">
                {image
                  ? <img
                      src={image}
                      alt={title}
                      className="service-card-img"
                      loading="lazy"
                      decoding="async"
                      width="1000"
                      height="750"
                    />
                  : <div className="service-icon" style={{ width: 64, height: 64 }}>
                      <Icon size={30} color="var(--blue)" strokeWidth={1.75} />
                    </div>
                }
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="service-includes">
                  <h4>What's Included</h4>
                  <ul>
                    {includes.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="management-section services-management" id="management">
        <div className="section-inner">
          <FadeIn><div className="management-heading">
            <div><p className="section-label">Vacation rental management</p><h2>One team. Every detail handled.</h2></div>
            <p>More than a clean—we help keep your property guest-ready, cared for, and moving forward between every booking.</p>
          </div></FadeIn>
          <div className="management-rail">
            {managementServices.map(({ Icon, title, text }, index) => <article className="management-card" key={title}><span>0{index + 1}</span><Icon size={25}/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="management-note"><KeyRound size={18}/><span>Guest support</span><b>•</b><span>Booking optimization</span><b>•</b><span>Cleaning & linens</span><b>•</b><span>Supplies</span><b>•</b><span>Maintenance coordination</span></div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Reach out and we'll help you figure out the best fit for your situation. Free quotes available.</p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </main>
  )
}
