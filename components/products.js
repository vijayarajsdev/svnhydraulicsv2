import React from 'react'
import Image from 'next/image';
import hoseassemblyimage from '@/public/hoseassemblyproduct.png';
import hydraulichoseproduct from '@/public/hydraulichoseproduct.png';
import fittingproduct from '@/public/fittingproduct.png';
import adapterproduct from '@/public/adapterproduct.png';
import styles from '@/app/layout.module.css';
const Products = () => {
  return (
    <div className={styles.productswrapper} id='products'>
        <div className={styles.productcardcontainer} ><Image src={hoseassemblyimage} height={250} alt='hydraulic hose assemby with end fittings' className={styles.productcardimage}/><h4>Hydraulic Hose Assembiles</h4></div>
        <div  className={styles.productcardcontainer}><Image src={hydraulichoseproduct} height={250} alt='bare high pressure hydraulic hose rolls' className={styles.productcardimage}/><h4>Hydraulic Hoses</h4></div>
        <div className={styles.productcardcontainer}><Image src={fittingproduct} height={250} alt='hydraulic hose end fittings' className={styles.productcardimage}/><h4>Fittings</h4></div>
        <div  className={styles.productcardcontainer}><Image src={adapterproduct} height={250} alt='adapters and connectors for hydraulic equipments,excavators,industrial machineries' className={styles.productcardimage}/><h4>Adapters & Connectors</h4></div>
    </div>
  )
}

export default Products