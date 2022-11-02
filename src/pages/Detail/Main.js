const Main = ({ imageUrl, brand, name, amount }) => {
  return (
    <div>
      <div>{imageUrl}</div>
      <div>{brand}</div>
      <div>{name}</div>
      <div>{amount}</div>
    </div>
  );
};

export default Main;
