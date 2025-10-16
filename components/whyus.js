'use client'
import styles from '@/app/layout.module.css'
import Reveal from './reveal'
const Whyus = () => {
  return (<>
  <Reveal direction='left' delay={0.2}>
       <section className={styles.whatweoffer}>
      <div className={styles.whatweoffertitlegrid}><h1>What We Offer</h1></div>
      <div className={styles.whatweofferlistgrid}>
        <ul>
          <li><h3>Hydraulic Hose Assemblies</h3><span>Customized based on your machine or project requirements.</span></li>
          <li><h3>Hydraulic Hoses</h3><span>Durable hoses for all pressure ranges and applications.</span></li>
          <li><h3>Hydraulic Fittings & Connectors</h3><span>Wide range of couplings, adaptors, and end fittings.</span></li>
        </ul>
        </div>
    </section>
    </Reveal>
    <Reveal direction='right' delay={0.2}>
       <section className={`${styles.whatweoffer} ${styles.whychooseus}`}>
        <div className={styles.whatweoffertitlegrid}><h1>Why choose us</h1></div>
        <div className={styles.whatweofferlistgrid}>
        <ul>
          <li><h3>Better Pricing</h3><span>Competitive rates without compromising on quality.</span></li>
          <li><h3>Quality You Can Trust</h3><span>Built for long-term performance</span></li>
          <li><h3>Faster Delivery</h3><span>Quick turnaround and efficient dispatch system</span></li>
          <li><h3>Custom Solutions</h3><span>Assemblies built to your exact specifications</span></li>
        </ul>
        </div>
      
    </section></Reveal></>
  )
}

export default Whyus