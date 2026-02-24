import "./carousel.css";

const image = [
  { id: 1, image: "/pexels-arrn-35442963.jpg" },
  { id: 2, image: "/public/pexels-sonny-17133329.jpg" },
  { id: 3, image: "/pexels-arrn-35442963.jpg" },
  { id: 4, image: "/public/pexels-sonny-17133329.jpg" },
  { id: 5, image: "/pexels-arrn-35442963.jpg" },
  { id: 6, image: "/public/pexels-sonny-17133329.jpg" },
  { id: 7, image: "/pexels-arrn-35442963.jpg" },
  { id: 8, image: "/public/pexels-sonny-17133329.jpg" },
  { id: 9, image: "/pexels-arrn-35442963.jpg" },
  { id: 10, image: "/public/pexels-sonny-17133329.jpg" },
];

const repeatedImages = [...image, ...image, ...image];

export const Carousel = () => {
  return (
    <div id="carouselcontainer">
      <h1 id="h1carousel">With 30.000+ to be Found. Accompanied by Kingdom, Family, Genus and Latin Name</h1>
      <div id="carouselparent">
      <div id="carousel">
        {repeatedImages.map((carousel) => (
          <div id="carouselcard" key={carousel.id}>
            <img
              className={
                carousel.id % 2 !== 0 ? "carouselimage1" : "carouselimage2"
              }
              src={carousel.image}
              alt={`carousel-image-${carousel.id}`}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};