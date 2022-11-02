const CarInfo = ({ segment, fuelType, startDate }) => {
  const title = "차량정보";
  return (
    <>
      <header>{title}</header>
      <ul>
        <li>
          <div>차종</div>
          <div>{segment}</div>
        </li>
        <li>
          <div>연료</div>
          <div>{fuelType}</div>
        </li>
        <li>
          <div>이용 가능일</div>
          <div>{startDate}</div>
        </li>
      </ul>
    </>
  );
};

export default CarInfo;
