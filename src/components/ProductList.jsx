import Product from './Product';

const products = [
  { id: 1, title: 'Laptop', price: 1200 },
  { id: 2, title: 'Phone', price: 800 },
  { id: 3, title: 'Tablet', price: 600 },
];

function ProductList() {
  return (
    <div style={{ marginTop: '20px' }}>
      {products.map((item) => (
        <Product key={item.id} title={item.title} price={item.price} />
      ))}
    </div>
  );
}

export default ProductList;