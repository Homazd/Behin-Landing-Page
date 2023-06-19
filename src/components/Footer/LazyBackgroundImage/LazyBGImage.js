import React, { useState, useEffect } from "react";

const LazyBGImage = ({ src, Children }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [bgStyle, setBgStyle] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = src
    image.onload = () => {
        setBgStyle({ backgroundImage : `url(${src})`})
        setImageLoaded(true)
    }
  }, [src]);
  return (
    <div
      style={bgStyle}
    >
     {!imageLoaded && <div>Loading...</div>}
     {imageLoaded && Children}
    </div>
  );
};

export default LazyBGImage;
