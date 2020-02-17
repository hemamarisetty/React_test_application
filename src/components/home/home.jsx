import React, { Component } from "react";
import './home.css';
class HomePage extends Component {

  render() {
    let heading = "Save 10%";
    let subheading = "Ipsum delica sed ex";
    let subheadingsmall = "lorrem ipsum dolor sit amet, ea est noster accumsan,vim elit aeque an. Eu duo quod elit,posse facer minimum pri ey, ea sit viris ceteros.ea has consul omnesque, an vel reque graeco.eum ne mundi nobis quando, an atiqui dolor per.Ut modo elit malis sea. nibh consetetur mei ea.";
    return (
      <div>
        <section className="hero">
          <div className="hero-body row justify-content-between">
            <div className="hero-container col-md-6">
              <h1 className="title text">{heading}</h1>
              <div className="column is-paddingless">
                <h2 className="subtitle is-4 text">{subheading}</h2>
                <h3 className="subtitle is-6 text">{subheadingsmall}</h3> 
              </div>
            </div>
            <img className="col-md-6" src="images/PEAK_PNG.png" alt="PEAK"/>
          </div>
          
        </section>
        <section className="section">
          <div className="container">
            <div className="row pd justify-content-center">
              
                
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-content">
                    <p className="color-patch card-one d-flex justify-content-center align-items-center">
                      <span className="d-xs-none">#35D3B4</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-content">
                    <p className="color-patch card-two d-flex justify-content-center align-items-center">
                      <span className="d-xs-none">#1B2191</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mt-md-4 mt-lg-0">
                <div className="card">
                  <div className="card-content">
                    <p className="color-patch card-three d-flex justify-content-center align-items-center">
                      <span className="d-xs-none">#D822EE</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-xs-only col-12">
                <div className="card">
                  <div className="card-content">
                    <p className="color-patch card-four d-flex justify-content-center align-items-center">
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        
      </div>

    );
  }
}

export default HomePage;