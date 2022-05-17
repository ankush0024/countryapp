import React from "react";

export default function CountryList({countryListData}) {
  return (
    <div className="container">
      {countryListData &&
        countryListData.map((ele, index) => {
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
                      Population: {ele.population}
                    </p>
                    <p className="card-text">
                      Region: {ele.region}
                    </p>
                    <p className="card-text">
                      Capital: {ele.capital&&ele.capital[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
