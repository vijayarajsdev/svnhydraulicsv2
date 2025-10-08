
import LogoIcon from '@/public/icon/whitetransparenticon.png';
import styles from '@/app/layout.module.css'
import Image from 'next/image';
import Link from "next/link";
const Navbar = () => {
  return (
    <div> <nav className={styles.navbarwrapper} >
        <div ><Image src={LogoIcon} width={80} alt='SVN HYDRAULICS MANUFACTURER OF HYDRAULIC HOSE ASSEMBLIES'/></div>
        <div className={styles.mobilenavlink}>SVN HYDRAULICS</div>
        <div className={styles.navlinks}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/enquiry'>Enquiry</Link>
          <Link href='/products'>Products</Link>
          <Link href='/contactus'>Contact Us</Link>
        </div>
      </nav></div>
  )
}

export default Navbar