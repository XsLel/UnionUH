import React, { Component } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2017/12/14/19/44/cake-3019638_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/06/02/18/44/ice-2367072_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/03/08/10/30/android-4912075_960_720.png",
  "https://cdn.pixabay.com/photo/2020/04/11/15/25/bee-5030847_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/04/11/15/25/bee-5030847_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492__340.jpg",
];

class RestaurantGalleryGrid extends Component {
  constructor(props) {
    super(props);
  }

  showPhotos = () => {
    return (
      <div>
        <div>
          {images.map((url, i) => (
            <div>
              <img key={i} id={i} src={url} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.showPhotos()}</div>;
  }
}

export default RestaurantGalleryGrid;
