import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="container-div">
        <div className="central-div">
          <h1 className="header name">
            {" "}
            Hi, my name is <span>Agneta Pupienyte</span>
          </h1>
          <div className="changing-div">
            <h2> A Full-stack developer</h2>
            <div className="languages">
              <p></p>
              <p className="javascript">JavaScript</p>
              <p className="react">React.js</p>
              <p className="rails">Ruby on Rails</p>
            </div>
          </div>
          <div className="home-about">
            <p className="div">{`<div> `}</p>
            <p className="about-text">
              {`With a foundation in marketing and a passion for backend development, I blend creative 
              innovation with technical precision to craft pixel-perfect 
              dynamic web solutions.`}
            </p>
            <p className="div">{`</div>`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
