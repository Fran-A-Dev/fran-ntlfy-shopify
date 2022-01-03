import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Head from "next/head";

import Hero from "../components/Hero";

export default function Home({ products }) {
  return (
    <div className="text-3xl">
      <Head>
        <title>JAMstack Ecomm</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta name="description" content="Fran's Netlify + Shopify Demo" />
        <meta property="og:title" content="JAMstack eCommerce " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.netlify.com/" />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/nextjsshopify.png"
        />
        <meta
          property="og:description"
          content="This is my demo app of the a Shopify Headless site on Next deployed on Netlify"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="JAMstack" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
