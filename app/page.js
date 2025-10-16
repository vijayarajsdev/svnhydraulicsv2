import styles from '@/app/layout.module.css'
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Whyus from '@/components/whyus';
import Contactus from '@/components/contactus';
import Reveal from '@/components/reveal';
import Products from '@/components/products';

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Reveal direction='up'>
     <main className={styles.mainheroimg} >
          <h1 className={styles.herotitle}>SVN HYDRAULICS</h1>
          <h3 className={styles.herosubtitle}>Reliable Hose, Custom Assemblies,Faster Delivery</h3>
      </main>
      </Reveal>
      <Reveal direction='left'>
      <About/>
      </Reveal>
      <Reveal><Products/></Reveal>
      
       <Whyus/>  
        <Reveal direction='down' delay={0.3}><Contactus/>   </Reveal>
  </div>
  );
}
