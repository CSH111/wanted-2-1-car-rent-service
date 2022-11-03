import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCars } from "../../apis/cars";
import CarList from "./CarList";
import Category from "./Category";

const Home = () => {
  const [queryObj, setQueryObj] = useState({ key: ["cars"], fn: getCars });
  const { data: cars, isLoading } = useQuery(queryObj.key, queryObj.fn);
  return (
    <div>
      <Category setQueryObj={setQueryObj} />
      <CarList cars={cars} isLoading={isLoading} />
    </div>
  );
};

export default Home;
