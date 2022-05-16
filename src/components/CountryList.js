import React from "react";

export default function CountryList(props) {
  return (
    <div className="container">
      {props.countryListData &&
        props.countryListData.map((ele, index) => {
          return (
            <div className="container">
              <div className="row" >
                <div key={ele.name.common}
                  className="card col-md-3"
                  style={{ width: "18rem" }}
                >
                  <img src={ele.flags.png} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{ele.name.common}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
