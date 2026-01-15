import React from "react";
import "../pages/styles/CardDesign.css";

const CardDesign = ({ image, title }) => {
  return (
    <div
      className="card h-100 card-first"
      style={{ width: "550px", height: "450px", borderRadius: "15px", overflow: "hidden" }}
    >
      <div className="card-dev">
        <img
          src={image}
          alt={title}
          className="img-design img-fluid"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div className="card-body text-center">
        <div className="row px-3">
          <div className="col-6 d-flex align-items-center mb-2">
            <span className="text-marketing-2">
              {title}
            </span>
          </div>

          <div className="col-6 d-flex justify-content-end">
            <div className="date-container">
              <h5 style={{ color: "#fff", fontSize: "16px" }}>10:00 - 16:00</h5>
            </div>
          </div>
        </div>

        <p className="text-marketing-1">
          Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H.
        </p>
      </div>
    </div>
  );
};

export default CardDesign;
