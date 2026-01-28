import styles from './page.module.css';

export const metadata = {
  title: 'Contact SVN Hydraulics | Tindivanam & Villupuram',
  description: 'Visit our workshop in Tindivanam for hydraulic hose repairs and crimping. Call us for instant quotes. Serving Villupuram, Pondicherry, and Chennai.',
};

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Contact Us</h1>

      <div className={styles.wrapper}>
        
        {/* Left Side: Contact Information */}
        <div className={styles.infoBox}>
          <h2>Get in Touch</h2>
          <p className={styles.introText}>
            Need a quick quote or emergency hose repair? Call us or visit our workshop.
          </p>

          <div className={styles.contactItem}>
            <h3>📍 Address</h3>
            <p>
              SVN Hydraulics<br />
              32, Mailam Road,<br />
              Tindivanam, Tamil Nadu - 604001
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3>📞 Phone</h3>
            <p>
              {/* FIXED: Updated href to match the display number */}
              <a href="tel:+918248213553">+91 8248213553</a> <br/>
              <span className={styles.subText}>(Available 8 AM - 8 PM)</span>
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3>📧 Email</h3>
            <p>
              {/* FIXED: Updated href to match sales@ */}
              <a href="mailto:sales@svnhydraulics.in">sales@svnhydraulics.in</a>
            </p>
          </div>
        </div>

        {/* Right Side: Map & Form */}
        <div className={styles.mapSection}>
          {/* Google Maps Embed */}
          <div className={styles.mapContainer}>
            {/* FIXED: Added real Google Maps Embed Link */}
            <iframe 
              src="https://maps.google.com/maps?q=SVN%20Hydraulics%2C%2032%2C%20Mailam%20Road%2C%20Tindivanam%2C%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SVN Hydraulics Location"
            ></iframe>
            <p className={styles.mapNote}>*Click "View larger map" for driving directions.</p>
          </div>
        </div>

      </div>
    </main>
  );
}