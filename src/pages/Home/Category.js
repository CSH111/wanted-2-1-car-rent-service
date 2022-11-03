import { getCars } from "../../apis/cars";
import { getCarsBySegment } from "../../apis/cars";

const Category = ({ setQueryObj }) => {
  const HandleClickAllType = () => setQueryObj({ key: ["cars"], fn: getCars });
  const HandleClickCType = () =>
    setQueryObj({ key: ["cars", "C"], fn: () => getCarsBySegment("C") });
  const HandleClickDType = () =>
    setQueryObj({ key: ["cars", "D"], fn: () => getCarsBySegment("D") });
  const HandleClickEType = () =>
    setQueryObj({ key: ["cars", "E"], fn: () => getCarsBySegment("E") });
  const HandleClickSUVType = () =>
    setQueryObj({ key: ["cars", "SUV"], fn: () => getCarsBySegment("SUV") });

  return (
    <div>
      <button onClick={HandleClickAllType}>전체</button>
      <button onClick={HandleClickCType}>소형</button>
      <button onClick={HandleClickDType}>중형</button>
      <button onClick={HandleClickEType}>대형</button>
      <button onClick={HandleClickSUVType}>SUV</button>
    </div>
  );
};

export default Category;
