import styles from '@/app/about/aboutus.module.css'
import Navbar from "@/components/navbar";
import { Volkhov } from 'next/font/google';
const volkhov=Volkhov({
  subsets:['english'],
  weight:["400"],
  style:['normal']
})
export const metadata = {
  title: "Manufacturer of Hydraulic Hose Assembiles TamilNadu",
  description: "About Us SVN Hydraulics is one of leading manufacturer and supplier of durable hydraulic hoses, fittings, and custom assemblies with faster delivery across Tamil Nadu and India.",
};
const Aboutus = () => {
  return (<>
      <header><Navbar/></header>
      <div className={`${styles.aboutuswrapper} ${volkhov.className}`}>
       <h1 > 🏭 About SVN Hydraulics</h1>
<h2>Leading Manufacturer & Supplier of Hydraulic Hoses and Fittings in India</h2>
<p>With over 20 years of industry experience, SVN Hydraulics has established itself as a trusted manufacturer, supplier, and dealer of high-quality hydraulic hoses, fittings, hose assemblies, and adapters in India.</p>
<p>Headquartered in Tindivanam, Tamil Nadu, we proudly serve clients across the nation with durable, high-performance, and cost-effective hydraulic solutions designed to power industries and heavy machinery.</p>
<h3>Who We Are</h3>
<p>At SVN Hydraulics, we combine technical expertise, modern manufacturing processes, and a deep understanding of hydraulic systems to deliver products that ensure superior performance and reliability.</p>
<p>Our focus on quality, precision, and customer satisfaction has made us a preferred choice for businesses in construction, agriculture, manufacturing, transportation, and other industrial sectors.</p>
<h3>Our Product Range</h3>
<p>We provide a comprehensive range of hydraulic products including:</p>
<ul>
  <li><strong>Hydraulic Hoses – </strong>all pressure grades and specifications</li>
  <li><strong>Hydraulic Hose Fittings & Adapters</strong></li>
  <li><strong>Custom Hydraulic Hose Assemblies</strong></li>
  <li><strong>Hose Crimping & Assembly Services</strong></li>
</ul>

<p>Whether you need <strong>bulk supplies, custom-built hose assemblies, or OEM hydraulic components</strong>, SVN Hydraulics ensures you get reliable, leak-proof, and long-lasting products every time.</p>

<h3>Why Choose SVN Hydraulics</h3>
<ul>
  <li>✅ Complete Hydraulic Solutions under one roof</li>
  <li>✅ Superior Quality & Tested Products</li>
  <li>✅ Competitive Pricing for Dealers and End Users</li>
  <li>✅ Fast & Reliable Delivery Across India</li>
  <li>✅ Custom Hose Assemblies and Tailored Solutions</li>
</ul>

<p>Every product that leaves our facility undergoes strict quality checks to ensure precision, durability, and safety — helping your machinery perform efficiently with minimal downtime.</p>

<h3>Our Mission</h3>
<p>At SVN Hydraulics, our mission is to deliver durable, affordable, and efficient hydraulic solutions that support the growth and performance of industries across India.</p>
<p>We aim to be recognized as the most reliable hydraulic hose manufacturer and supplier — where quality meets affordability.</p>
<h3>Get in Touch</h3>
<p>Looking for a reliable hydraulic hose manufacturer or supplier in India?</p>
<p>Partner with SVN Hydraulics for premium quality, faster delivery, and unbeatable value.</p>
<section>
<footer>
  <ul>
    <li>📍 Location: Tindivanam, Tamil Nadu, India</li>
    <li>📞 Phone / WhatsApp: +91 8939441180</li>
    <li>📧 Email: sales@svnhydraulics.in</li>
  </ul>
</footer>
</section>
</div>
  </>
  )
}

export default Aboutus;