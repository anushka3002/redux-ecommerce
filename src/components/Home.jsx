import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src="/assets/hero-image.png" className="card-img" alt="..." />
        <div className="card-img-overlay">
          {/* <h5 className="card-title">Card title</h5> */}
          <p className="card-text">
            {/* This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. */}
          </p>
          <p className="card-text">
            {/* <small>Last updated 3 mins ago</small> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
