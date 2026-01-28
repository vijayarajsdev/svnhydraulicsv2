import Link from 'next/link';
import Image from 'next/image';
import { products } from '../data/products.js'; // Importing your data
import styles from './products.module.css';
export const metadata = {
  title: 'Our Products | Hydraulic Hoses & Fittings',
  description: 'Browse our range of hydraulic hose assemblies, adapters, and sleeves available in Tindivanam.',
};

export default function ProductsPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Our Product Range</h1>
      
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Image Section */}
            <div className={styles.imageWrapper}>
               {/* Note: In real app, ensure width/height match aspect ratio */}
              <Image 
                src={product.image} 
                alt={product.name}
                width={400} 
                height={300}
                className={styles.productImage}
              />
            </div>
            
            {/* Content Section */}
            <div className={styles.cardContent}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              
              {/* Feature List (Specs) */}
              <ul className={styles.specList}>
                {product.specs.slice(0, 2).map((spec, index) => (
                  <li key={index}>• {spec}</li>
                ))}
              </ul>

              <Link href={`/products/${product.id}`} className={styles.viewButton}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}