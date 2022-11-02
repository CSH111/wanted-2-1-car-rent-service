import { useQuery } from "@tanstack/react-query";

import getCars from "../../apis/getCars";
import CarItem from "./CarItem";

const CarList = () => {
  const { data: cars, isLoading } = useQuery(["cars"], getCars);

  if (isLoading) return <div>로딩...</div>;
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
