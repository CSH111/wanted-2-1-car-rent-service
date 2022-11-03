import CarItem from "./CarItem";

const CarList = ({ cars, isLoading }) => {
  if (isLoading) return <div>로딩...</div>;
  if (cars.length === 0) return <div>차량이 없습니다.</div>;
  return (
    <ul>
      {cars.map((carData) => {
        const { name, brand, segment, fuelType, amount, imageUrl } =
          carData.attribute;
        const { id, createdAt } = carData;
        return (
          <CarItem
            key={id}
            id={id}
            createdAt={createdAt}
            name={name}
            brand={brand}
            segment={segment}
            fuelType={fuelType}
            amount={amount}
            imageUrl={imageUrl}
          />
        );
      })}
    </ul>
  );
};

export default CarList;
