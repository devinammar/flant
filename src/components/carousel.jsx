import "./carousel.css";

const image = [
  { id: 1, image: "public/pexels-mithun-gahir-photography-266254368-13152523.jpg" },
  { id: 2, image: "public/pexels-alexeydemidov-9314038.jpg" },
  { id: 3, image: "public/georgia-de-lotz-vB-wJhosZpc-unsplash.jpg" },
  { id: 4, image: "public/pexels-niranjan-t-g-56677497-7906305.jpg" },
  { id: 5, image: "public/pexels-bianca-kida-2147898692-30003006.jpg" },
  { id: 6, image: "public/pexels-alexeydemidov-12097650.jpg" },
  { id: 7, image: "public/pexels-irfansimsar-32297052.jpg" },
  { id: 8, image: "public/pexels-hartonosbg-34102675.jpg" },
  { id: 9, image: "public/pexels-ronald-gavassa-2148721101-30245038.jpg" },
  { id: 10, image: "public/pexels-laziccvanja-15510739.jpg" },
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