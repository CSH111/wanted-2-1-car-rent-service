import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import CarItem from "./CarItem";

const CarList = () => {
  const getCars = async () => {
    const { data } = await axios.get(
      "https://preonboarding.platdev.net/api/cars"
    );
    return data;
  };

  const { data, isLoading } = useQuery(["cars"], getCars);

  if (isLoading) return <div>로딩...</div>;
  return (
    <ul>
      {data.payload.map((carData) => {
        const { name, brand, segment, fuelType, amount, imageUrl } =
          carData.attribute;
        const { id, createdAt } = carData;
        return (
          <CarItem
            key={id}
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
