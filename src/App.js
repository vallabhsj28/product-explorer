import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Something went wrong while fetching products.');
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />
      <main className="app-content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {loading && <p className="status-text">Loading products...</p>}
        {error && <p className="status-text error-text">{error}</p>}

        {!loading && !error && <ProductList products={filteredProducts} />}
      </main>
    </div>
  );
}

export default App;
