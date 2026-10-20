import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState('');

  const toggleProducts = () => {
    setShowProducts((prev) => !prev);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="name-input" style={{ display: 'block', marginBottom: '8px' }}>
          Enter your name:
        </label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type here..."
          style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
        />
      </div>

      <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>
        Hello, {name.trim() ? name : 'Guest'}
      </p>

      <button
        onClick={toggleProducts}
        style={{
          padding: '10px 16px',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid #333',
        }}
      >
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts && <ProductList />}
    </main>
  );
}

export default App;