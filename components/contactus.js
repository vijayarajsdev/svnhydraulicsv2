import React from 'react'
import styles from '@/app/layout.module.css'
const Contactus = () => {
  return (
    <section className={styles.contactus} id='contactus'>
        <h1>Contact Us</h1>
        <div className={styles.contactuswrapper}>
        <div className={styles.contactusleftgrid}>
            <h3>SVN HYDRAULICS</h3>
            <p><strong>Address:</strong><>32,Mailam Road,Tindivanam-604001</></p>
            <p><strong>Phone:   </strong><a href='tel:+918939441180'>  +91 8939441180</a></p>
            <p><strong>Email:</strong><a href='mailto:sales@svnhydraulics.in'></a>sales@svnhydraulics.in</p>
            <p><strong>Business Hours:</strong>9.00 AM - 8.00 PM</p>
            <a href='https://wa.me/918939441180' target='_blank' rel='noopener noreferrer'>Chat on Whatsapp</a>
        </div>
        <div className={styles.contactusrightgrid}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.3585537184413!2d79.64553387480964!3d12.223984330828602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53417c9a0815ad%3A0xa61e0def757464b8!2sSVN%20Hydraulics!5e0!3m2!1sen!2sin!4v1759954733753!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" style={{margin:"5px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
    </section>
  )
}

export default Contactus;