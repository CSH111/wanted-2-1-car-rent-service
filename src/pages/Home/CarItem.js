import { Link } from "react-router-dom";

const CarItem = (props) => {
  return (
    <li>
      <Link to={`/${props.id}`}>이동</Link>
      <div>{props.brand}</div>
      <div>{props.name}</div>
      <div>{props.segment}</div>
      <div>{props.fuelType}</div>
      <div>{props.amount}</div>
      <div>{props.createdAt}</div>
      <div>{props.imageUrl}</div>
    </li>
  );
};

export default CarItem;
