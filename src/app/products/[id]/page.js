import { products } from '../../data/products.js';
import styles from './product-detail.module.css';
import Image from 'next/image';
import Link from 'next/link';

// 1. GENERATE STATIC PARAMS (Makes your site load instantly)
// This tells Next.js to pre-build these pages at build time, not request time.
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// 2. DYNAMIC SEO METADATA
// Automatically sets the page title based on the product being viewed.
export async function generateMetadata({ params }) {
  // Await params because in Next.js 15+ params is a Promise
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} Manufacturer | SVN Hydraulics`,
    description: `Buy custom ${product.name} in Tamil Nadu. ${product.description}`,
  };
}

// 3. THE PAGE COMPONENT
export default async function ProductPost({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className={styles.error}>Product not found</div>;
  }

  return (
    <main className={styles.container}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link> &gt; <Link href="/products">Products</Link> &gt; <span>{product.name}</span>
      </div>

      <div className={styles.wrapper}>
        {/* Left Side: Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
             <Image 
                src={product.image} 
                alt={`Close up of ${product.name}`}
                width={600} 
                height={500}
                className={styles.mainImage}
                priority // Loads this image immediately for speed
              />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.category}>Category: {product.category}</p>
          
          <div className={styles.description}>
            <p>{product.description}</p>
            <p>
              We manufacture and supply high-quality {product.name.toLowerCase()} for industrial and automotive applications. 
              Our assemblies are tested for durability and high-pressure performance.
            </p>
          </div>

          <div className={styles.specsBox}>
            <h3>Technical Specifications</h3>
            <ul>
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className={styles.ctaBox}>
            <p>Need a custom size or specific fitting?</p>
            <Link href="/contact" className={styles.enquireButton}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}