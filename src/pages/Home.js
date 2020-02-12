import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="content">
          <input type="text" />
          <div className="buttons">
            <button>
              <i className="fa fa-microphone"></i>
            </button>
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </React.Fragment>
  );
}
