import { use } from "react";

async function getProducts() {
  // getStaticProps
  const res = await fetch("https://product-app-101-server.vercel.app/api/products");
  return res.json();
}

export default function ProductList() {
  const products = use(getProducts());

  return (
    <div className="page">
      <div>
        { products.map(product =>
          <div key={product.name}>
            {product.name}
          </div>
        )}
      </div>
    </div>
  )
}
