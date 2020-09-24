import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          src="https://www.glasgow.gov.uk/media/image/m/8/River_Clyde_View.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://i.ytimg.com/vi/mBELEFMoktU/maxresdefault.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
