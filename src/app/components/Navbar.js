import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          SVN <span className={styles.highlight}>Hydraulics</span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* CTA Button */}
        <a href="tel:+918248213553" className={styles.callButton}>
          <span>📞</span> Call Now
        </a>

      </div>
    </nav>
  );
}