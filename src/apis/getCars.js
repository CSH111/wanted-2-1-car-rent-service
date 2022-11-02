import axios from "axios";

const getCars = async () => {
  const { data } = await axios.get(
    "https://preonboarding.platdev.net/api/cars"
  );
  return data.payload;
};
export default getCars;
