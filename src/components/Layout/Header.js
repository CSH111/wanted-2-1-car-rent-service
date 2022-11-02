import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Header = () => {
  const params = useParams();
  const [title, setTitle] = useState("");

  const isHomeURL = (params) => Boolean(Object.keys(params).length === 0);

  useEffect(() => {
    setTitle(isHomeURL(params) ? "전체차량" : "차량상세");
  }, []);

  return <div>{title}</div>;
};

export default Header;
