import styles from '@/app/layout.module.css'
const About = () => {
  return (
          <section className={styles.aboutus}>
        <div className={styles.aboutuscontent}>
        <h1 className={styles.aboutusheader}>About us</h1>
        <p className={styles.aboutusbody}>

With over 15 years of experience in the hydraulic industry, SVN Hydraulics has earned the trust of customers by delivering reliable hydraulic hoses, fittings, and custom assemblies. Based in Tamil Nadu, we started as a local supplier and today serve customers across the state and expanding all over India.

Our Journey

From a modest hydraulic hose assembly workshop, we have grown into a dependable supplier for contractors, industries and machinery owners. Our long-standing presence in the market is built on three core values: better pricing, trusted quality, and faster delivery.</p>

<h3 className={styles.aboutusbody}>What We Do </h3>
<ul className={styles.aboutusbody}>
  <li>Custom-built hydraulic hose assemblies,
</li>
    <li>Bulk and retail supply of hydraulic hoses,
</li>

  <li>Wide range of fittings and connectors,
</li>


</ul>
<h3 className={styles.aboutusbody}>Why Customers Trust Us</h3>
<p className={styles.aboutusbody}>
15+ years of industry expertise in Manufacturing Hydraulic Hose Assemblies in India with
Strong focus on quality and durability,
Competitive pricing for both wholesale and retail,
Quick response and delivery for urgent requirements <br/>
Our Commitment

At SVN Hydraulics, we understand that hydraulic systems keep industries moving. That’s why we ensure every hose, fitting, and assembly meets the demands of construction, agriculture, manufacturing, and heavy machinery applications.
</p>
</div>
  </section>
  )
}

export default About;