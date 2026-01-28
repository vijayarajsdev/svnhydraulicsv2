import styles from './about.module.css';

export const metadata = {
  title: 'About SVN Hydraulics | Industrial Hose Manufacturer',
  description: 'Learn about SVN Hydraulics. Over 10 years of experience in hydraulic crimping, hose assembly, and industrial supplies in Tindivanam.',
};

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>About SVN Hydraulics</h1>
        <p>Powering Industries in Tamil Nadu with Precision Hydraulics</p>
      </section>

      <section className={styles.content}>
        <div className={styles.textBox}>
          <h2>Who We Are</h2>
          <p>
            SVN Hydraulics is a premier manufacturer and supplier of high-pressure hydraulic hose assemblies based in Tindivanam. 
            Founded with a vision to support the growing industrial and construction sectors in Villupuram ,Pondicherry and across Tamil nadu, 
            we specialize in custom crimping solutions for all types of machinery.
          </p>
          <p>
            Whether you need a replacement hose for a JCB excavator or a high-temperature industrial line, 
            our workshop is equipped to deliver OEM-quality assemblies within minutes.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <span className={styles.number}>15+</span>
            <span className={styles.label}>Years Experience</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.number}>1000+</span>
            <span className={styles.label}>Happy Customers</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.number}>24/7</span>
            <span className={styles.label}>Emergency Support</span>
          </div>
        </div>

        <div className={styles.infrastructure}>
          <h2>Our Infrastructure</h2>
          <p>
            We utilize state-of-the-art <strong> Crimping Machines</strong> capable of crimping hoses from 
            1/4" up to 2" with 6-spiral reinforcement. Our inventory includes a vast stock of fittings 
            (BSP, JIC, ORFS, Metric) to ensure we always have the right connection for your equipment.
          </p>
        </div>
      </section>
    </main>
  );
}