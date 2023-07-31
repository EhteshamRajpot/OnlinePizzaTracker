import React from 'react'
import SuperSection from './SuperSection/SuperSection'
import ABC from './SuperSection/abc.jpg'
import Papdias from "./SuperSection/papdias.png"
import Create from "./SuperSection/create.png"
import "../components/SuperSection/Home.css"
export const Home = () => {
  return (
    <div>
      <SuperSection />
      
      {/* About Section */}
      <div className={"container mt-5"}>
        <div className={"row"}>
          <div className={"col-sm-12 col-lg-6"} id={"LiveCoffeMaking"}>
            <img alt='Here it is' className={"img-fluid"} src={ABC} id={"LiveCoffe"} />
            <a
              href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
              className={"btn play-btn"}
            >
              <div style={{ marginTop: "370px" }}>
                {/* <img
                  // src={PLayButton}
                  className={"img-fluid"}
                  id={"playButton"}
                /> */}
              </div>
            </a>
          </div>
          <div className={"col-sm-12 col-lg-6 mt-5"}>
            <h6>Live Pizza making process.</h6>
            <h1>
              We Telecast our <br /> Pizza Making Live
            </h1>
            <p>
              <span className={"fw-bold"}>
                We are here to listen from you deliver exellence
              </span>
            </p>
            <p style={{ fontSize: "20px" }}>
              Welcome to our Pizza App - the ultimate destination for pizza
              lovers! Browse our delicious range of pizzas, customize your
              toppings, and place your order with just a few clicks.
            </p>
            {/* <img className={"img-fluid"} src={Sign} /> */}
          </div>
        </div>
      </div>

      {/* Blog */}

      <div style={{ marginTop: "100px" }}>
        <h1 align={"center"} className={"fw-bold"}>
          What kind of Pizza we serve for you
        </h1>
        <h5 align={"center"}>
          Who are in extremly love with this eco friendly system.
        </h5>
        <div className={"container mt-5"}>
          <div className={"row"}>
            <div className={"col-sm-12 col-md-6 col-lg-6"}>
              <img alt="Create" src={Create} width={"100%"} className={"img-fluid"} />
              <div className="mt-3">
                <a
                  href="/"
                  style={{ textDecoration: "none", borderRadius: "30px" }}
                  className={"px-4 py-1"}
                >
                  Travel
                </a>
                <a
                  href="/"
                  style={{ textDecoration: "none", borderRadius: "30px" }}
                  className={"px-4 py-1 ms-2"}
                >
                  Life Style
                </a>
                <h4 className={"mt-5"}>
                  Supreme Selections: Our Finest Pizzas to Satisfy Your
                  Cravings!
                </h4>
                <p>
                  Our Supreme Selections are made with only the freshest and
                  highest quality ingredients, ensuring every bite is bursting
                  with flavor. From classic Margherita to bold BBQ Chicken, we
                  have a pizza to satisfy every craving.
                </p>
                <h5>31st January, 2023</h5>
              </div>
            </div>
            <div className={"col-sm-12 col-md-6 col-lg-6 mt-sm-5 mt-lg-0"}>
              <img alt="Papdias" src={Papdias} width={"100%"} className={"img-fluid"} />
              <div className="mt-3">
                <a
                  href="/"
                  style={{ textDecoration: "none", borderRadius: "30px" }}
                  className={"px-4 py-1"}
                >
                  Travel
                </a>
                <a
                  href="/"
                  style={{ textDecoration: "none", borderRadius: "30px" }}
                  className={"px-4 py-1 ms-2"}
                >
                  Life Style
                </a>
                <h4 className={"mt-5"}>
                  Create Your Own Masterpiece: Customizable Pizzas for Every
                  Taste Bud!
                </h4>
                <p>
                  Unleash your creativity and build your own pizza masterpiece
                  with our customizable options. Whether you prefer a
                  traditional cheese pizza or something more adventurous, we
                  have the ingredients to make it happen.
                </p>
                <h5>31st January, 2023</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
