import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1: Company Info */}
        <div className={styles.column}>
          <h3 className={styles.logo}>SVN Hydraulics</h3>
          <p className={styles.text}>
            Your trusted partner for high-pressure hydraulic hose assemblies and industrial fittings in Tamil Nadu.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact & Map</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className={styles.column}>
          <h4>Visit Us</h4>
          <address className={styles.address}>
            SVN Hydraulics ,<br />
            32,Mailam Road ,Tindivanam ,Villupuram Dist,<br />
            Tamil Nadu - 604001<br />
            <br />
            <strong>Phone:</strong> +91 8248213553
          </address>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {currentYear} SVN Hydraulics. All rights reserved.</p>
      </div>
    </footer>
  );
}