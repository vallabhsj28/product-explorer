import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="status-text">No products found.</p>;
  }

  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
