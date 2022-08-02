const ImgCom = (Props) => {
  const { WidthValue, HeightValue } = Props;
  return (
    <>
      <img
        style={{ width: WidthValue, height: HeightValue }}
        src="https://cdn.pixabay.com/photo/2022/07/25/10/19/mountain-7343375_960_720.jpg"
        alt="no img"
      />
    </>
  );
};
export default ImgCom;
