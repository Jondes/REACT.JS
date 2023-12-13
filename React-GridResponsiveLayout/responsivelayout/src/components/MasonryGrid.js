import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function MasonryGrid() {
  const images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
  ];
  return (
    <div>
      <h2 className="mt-3 mb-4 text-center">React Js Responsive Masonry Gallery Example</h2>
      <Masonry columnsCount={4} gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </div>
  );
}
export default MasonryGrid;