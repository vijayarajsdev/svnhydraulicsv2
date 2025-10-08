import styles from '@/app/layout.module.css'
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Whyus from '@/components/whyus';
import Contactus from '@/components/contactus';

export default function Home() {
  return (
    <div >
      <Navbar/>
     <main className={styles.mainheroimg}>
          <h1 className={styles.herotitle}>SVN HYDRAULICS</h1>
          <h3 className={styles.herosubtitle}>Reliable Hose, Custom Assemblies,Faster Delivery</h3>
      </main>
      <About/>
      <Whyus/>  
      <Contactus/>  
  </div>
  );
}
