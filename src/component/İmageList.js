import React from "react";

const İmageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} />;
  });
  return (
    <div>
      <p className="image-list">You can see all images</p>
      <div className="images">{images}</div>
    </div>
  );
};

export default İmageList;
