import React from "react";
import "./App.css";
import C1 from "./Assets/images/C1.jpg";
import C2 from "./Assets/images/C2.jpg";
import C3 from "./Assets/images/C3.jpg";
import C4 from "./Assets/images/C4.jpg";
import C5 from "./Assets/images/C5.jpg";
import C6 from "./Assets/images/C6.jpg";

// 1. Image data lives in an array of objects.
//    Add a new object here and it shows up in the UI automatically.
const images = [
  {
    id: 1,
    image:C1,
    title: "Skyline",
    description: "A calm river winding through green hills.",
  },

  {
    id: 2,
    image:C2,
    title: "River Valley",
    description: "Morning fog resting over the mountain ridge.",
  },

  {
    id: 3,
    image:C3,
    title: "Flower Portrait",
    description: "A sleepy pug wrapped up in a blanket.",
  },

  {
    id: 4,
    image:C4,
    title: "Sunset",
    description: "A beautiful sunset over the ocean.",
  },

  {
    id: 5,
    image:C5,
    title: "Mountain Road",
    description: "A perfect view of the mountains from the road.",
  },

  {
    id: 6,
    image:C6,
    title: "Snowy Peaks",
    description: "Angle of the sun hitting the snowy mountains.",
  },

];

// 2. Reusable child component: receives data through props.
function ImageCard({ image, title, description }) {
  return (
    <article className="image-card">
      <img src={image} alt={title} className="image-card__img" loading="lazy" />
      <div className="image-card__body">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__desc">{description}</p>
      </div>
    </article>
  );
}

// 3. Parent component: uses map() to render one card per object.
//    A Fragment avoids an extra wrapping <div>.
function Gallery() {
  return (
    <>
      <header className="gallery-header">
        <h1>Image Gallery</h1>
      </header>
      <main className="gallery">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image.image}
            title={image.title}
            description={image.description}
          />
        ))}
      </main>
    </>
  );
}

export default function App() {
  return <Gallery />;
}
