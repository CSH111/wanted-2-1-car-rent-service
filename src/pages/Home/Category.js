import { useState } from "react";

import { getCarsBySegment } from "../../apis/cars";
import carInfoObject from "../../constants/carInfoObject";
import * as S from "./styles";

const Category = ({ setQueryObj, tags }) => {
  const [selectedBtn, setSelectedBtn] = useState("ALL");

  const handleClick = (e, tag) => {
    setQueryObj({ key: ["cars", tag], fn: () => getCarsBySegment(tag) });
    setSelectedBtn(tag);
  };

  const isSelected = (val) => selectedBtn === val;

  return (
    <S.CategoryContatiner>
      {tags.map((tag) => (
        <S.Tag
          key={tag}
          selected={isSelected(tag)}
          onClick={(e) => handleClick(e, tag)}
        >
          {carInfoObject[tag]}
        </S.Tag>
      ))}
    </S.CategoryContatiner>
  );
};

export default Category;
