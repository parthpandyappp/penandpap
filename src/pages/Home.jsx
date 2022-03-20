import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="center-hv">
        <div className="container">
          <div className="main-header">
            <h1 className="underline underline-wavy main-title">
              <span>
                <img
                  src="https://img.icons8.com/small/32/000000/sign-up.png"
                  alt=""
                />
              </span>
              pen&pap
            </h1>
            <p>
              Looking for Office stationery or School stationery online? Browse
              a wide range of stationery items at the online stationery store.
            </p>

            <div className="btn-holder">
              <button className="btn btn-primary font-lg">
                <Link to="/products">Explore</Link>
              </button>
              <button className="btn btn-secondary font-lg">
                <a href="#category">View Categories</a>
              </button>
            </div>
          </div>
          <img
            className="main-img"
            src="https://opendoodles.s3-us-west-1.amazonaws.com/sitting-reading.svg"
            alt=""
          />
        </div>

        <div className="pg-section">
          <div className="section-title">
            <h1 className="underline underline-wavy" id="category">
              Categories
            </h1>
          </div>

          <div className="category-container">
            <div className="category">
              <div className="categories-title">
                <h3>Office stationery</h3>
              </div>
              <Link to="/products">
                <img
                  className="category-img"
                  src="https://i.ibb.co/XXzTqVy/jess-bailey-4-DPWn-Brj-IPg-unsplash.jpg"
                  alt=""
                />
              </Link>
            </div>

            <div className="category">
              <div className="categories-title">
                <h3>School stationery</h3>
              </div>
              <Link to="/products">
                <img
                  className="category-img"
                  src="https://i.ibb.co/bBrn3D9/am-jd-MDJDYKQz6-E-unsplash.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
