import { getProduct } from "../../lib/shopify";

export default function ProductPage({ product }) {
  return <div>{product.title}</div>;
}

export async function getStaticPaths() {
  const products = await getProduct();

  const paths = products.map((item) => {
    const handle = String(item.node.handle);

    return {
      params: { handle },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
