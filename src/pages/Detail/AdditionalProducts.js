const AdditionalProducts = ({ products }) => {
  return (
    <div>
      <header>추가상품</header>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <div>{product.name}</div>
            <div>{product.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalProducts;
