import { getProduct } from "../lib/shopify";

const dotenv = require("dotenv");
const fetch = require("node-fetch");
const algoliasearch = require("algoliasearch/lite");

async function callShopifyData(query) {
  try {
    const data = await fetch(`https://${domain}/api/2021-07/graphql.json`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }).then((response) => response.json());
    return data;
  } catch (error) {
    throw new Error("Could not fetch data from Shopify!");
  }
}

export async function getProductsInCollection() {
  const query = `
    {
      collectionByHandle(handle: "frontpage") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
}

async function getAll() {
  let page = 1;
  let shouldQueryMoreProducts = true;
  const returnProducts = [];

  while (shouldQueryMoreProducts) {
    const response = await getProduct(product);

    if (response.products.length > 0) {
      returnPosts.push(...response.products);
    }

    shouldQueryMoreProducts = returnProducts.length < response.total;
    page++;
  }

  return returnProducts;
}

function transformProductsToSearchObjects(products) {
  const transformed = products.map((product) => {
    return {
      objectID: product.id,
      title: product.title,
      handle: product.handle,
    };
  });

  return transformed;
}

(async function () {
  dotenv.config();

  try {
    const products = await getAll();
    const transformed = transformProductsToSearchObjects(products);

    if (products.length > 0) {
      const client = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_ADMIN_KEY
      );

      const index = client.initIndex("shopify_collections");
      const algoliaResponse = await index.saveObjects(transformed);

      console.log(
        `🎉 Sucessfully added ${
          transformed.length
        } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
          "\n"
        )}`
      );
    }
  } catch (error) {
    console.log(error);
  }
})();
