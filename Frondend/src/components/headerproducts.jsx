import React from "react";
import "../css/headerproducts.css";

import blackPepper from "../assets/pepper.jpg";
import cardamom from "../assets/cardamom.jpg";
import turmeric from "../assets/cashew.jpg";
import redChilli from "../assets/chilli.jpg";
import ginger from "../assets/ginger.jpg";
import garlic from "../assets/garlic.jpg";

import coconut from "../assets/coconut.jpg";
import desiccated from "../assets/desi_coconut.jpg";
import refinedOil from "../assets/Refined.jpg";

const spiceProducts = [
  {
    name: "Black Pepper",
    image: blackPepper,
    desc: "Premium export-quality black pepper with rich aroma and strong flavor.",
  }, 
  {
    name: "Cardamom",
    image: cardamom,
    desc: "Carefully selected green cardamom suitable for global food markets.",
  },
  // {
  //   name: "Turmeric",
  //   image: turmeric,
  //   desc: "Available in whole fingers and powder form with high curcumin content.",
  // },
  {
    name: "Red Chilli",
    image: redChilli,
    desc: "Whole and powdered chilli varieties known for vibrant color and taste.",
  },
  {
    name: "Ginger",
    image: ginger,
    desc: "Fresh export-grade ginger sourced from trusted cultivation regions.",
  },
  {
    name: "Garlic",
    image: garlic,
    desc: "Premium garlic with excellent shelf life and quality consistency.",
  },
];

const coconutProducts = [
  {
    name: "Semi Husked Coconut",
    image: coconut,
    desc: "Fresh semi-husked coconuts packed according to export standards.",
  },
  {
    name: "Desiccated Coconut",
    image: desiccated,
    desc: "Finely processed desiccated coconut ideal for food industries.",
  },
  {
    name: "UnRefined Coconut Oil",
    image: refinedOil,
    desc: "High-quality refined coconut oil suitable for global markets.",
  },
];

const ProductCard = ({ product, category }) => (
  <div className="product-card">
    <div className="product-image-container">
      <img src={product.image} alt={product.name} />

      <div className="product-overlay">
        <span>Export Quality</span>
      </div>
    </div>

    <div className="product-info">
      <span
        className={`product-badge ${
          category === "Coconut" ? "coconut" : ""
        }`}
      >
        {category}
      </span>

      <h3>{product.name}</h3>

      <p>{product.desc}</p>
    </div>
  </div>
);

const Headerproducts = () => {
  return (
    <>
      <section className="products-hero">
        <div className="hero-content">
          <h1>Our Export Products</h1>

          <p>
            Premium agricultural, spice and coconut products sourced from trusted
            suppliers and delivered to international markets with quality
            assurance.
          </p>
        </div>
      </section>

      <section className="product-category-section">
        <div className="products-container">
          <h2 className="category-title">Spices</h2>

          <div className="products-grid">
            {spiceProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                category="Spices"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="product-category-section gray-section">
        <div className="products-container">
          <h2 className="category-title">Coconut Products</h2>

          <div className="coconut-grid">
            {coconutProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                category="Coconut"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Headerproducts;
