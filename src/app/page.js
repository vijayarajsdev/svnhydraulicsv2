import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

// 1. SEO METADATA (Crucial for ranking)
export const metadata = {
  title: 'Hydraulic Hose Manufacturers Tamil Nadu | SVN Hydraulics',
  description: 'Top-rated manufacturer of hydraulic hose assemblies, industrial fittings, and adapters in Tindivanam. Custom crimping services available.',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image src='/images/hero-bg.png'
        alt='Hydraulic Hose Manufacturer background'
        fill
        style={{objectFit:"cover"}}
        priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
        <h1 className={styles.title}>
          SVN HYDRAULICS
        </h1>
        <p className={styles.subtitle}>
          Your trusted partner for high-pressure hose assemblies, industrial fittings, 
          and earthmover spares in Tamil Nadu.
        </p>
        
        <div className={styles.buttonGroup}>
          <Link href="/products" className={styles.primaryButton}>
            View Products
          </Link>
          <Link href="/contact" className={styles.primaryButton} style={{ backgroundColor: 'transparent', border: '2px solid white' }}>
            Contact Us
          </Link>
          </div>
        </div>
      </section>
      {/* NEW: Improved Trust Signals Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Industries Trust Us</h2>
        
        <div className={styles.grid}>
          
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.icon}>🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              We know downtime costs money. We offer same-day dispatch for standard assemblies across Chennai & Tindivanam.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.icon}>⚙️</div>
            <h3>Custom Crimping</h3>
            <p>
              From JCB to Hitachi, we crimp hoses to your exact pressure ratings using advanced German machinery.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.icon}>🛡️</div>
            <h3>Quality Tested</h3>
            <p>
              Zero leaks guaranteed. Every high-pressure assembly undergoes rigorous testing before it leaves our shop.
            </p>
          </div>

        </div>
      </section>
      {/* NEW: About Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          
          {/* Left Side: Text */}
          <div className={styles.aboutText}>
            <h2>Engineering Trust Since <span className={styles.highlight}>2010</span></h2>
            <p>
              SVN Hydraulics isn't just a supplier; we are your technical partners. 
              Located in the heart of <strong>Tindivanam</strong>, we have spent over a decade 
              mastering the art of high-pressure fluid conveyance.
            </p>
            <p>
              We stock over <strong>5,000+ SKU fittings</strong> and use German-engineered 
              crimping technology to ensure every hose assembly meets global safety standards.
            </p>
            
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <strong>15+</strong>
                <span>Years Exp.</span>
              </div>
              <div className={styles.statItem}>
                <strong>40k+</strong>
                <span>Hoses Crimped</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className={styles.aboutImageWrapper}>
            {/* Ideally, put a photo of your REAL shop/machine here */}
            <Image 
              src="/images/svnhydraulicsworkshop.png" // You need to add this image
              alt="Inside SVN Hydraulics Workshop"
              width={600}
              height={400}
              className={styles.aboutImage}
            />
          </div>

        </div>
      </section>
    </main>
  );
}