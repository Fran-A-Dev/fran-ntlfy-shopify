import ProductPageContent from "../../components/ProductPageContent";
import { getAllProducts, getProduct } from "../../lib/shopify";

export default function ProductPage({ product }) {
  return (
    <div className="min-h-full py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false, //change to "blocking" to initaite on demand builders"
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product, //add "revalidate" key here to initate ISR and add time in seconds to revalidate"
    },
  };
}
