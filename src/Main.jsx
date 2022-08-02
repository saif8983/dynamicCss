import { useState } from "react";
import ImgCom from "./ImgCom";
const Main = () => {
  const [input, updateInput] = useState();
  const [width, updateWidth] = useState();
  const [height, updateHeight] = useState();
  const handleChange = ({ target }) => {
    updateInput(target.value);
  };
  const handleChangeWidth = ({ target }) => {
    updateWidth(target.value);
  };
  const handleChangeHeight = ({ target }) => {
    updateHeight(target.value);
  };
  return (
    <>
      <input onChange={handleChange}></input>
      <button value={input} onClick={handleChangeWidth}>
        width
      </button>
      <input onChange={handleChange}></input>
      <button value={input} onClick={handleChangeHeight}>
        height
      </button>
      <ImgCom WidthValue={width} HeightValue={height} />
    </>
  );
};
export default Main;
