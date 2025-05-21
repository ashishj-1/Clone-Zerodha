import smallCase from "../../assets/images/smallcaseLogo.png";
import streak from "../../assets/images/streakLogo.png";
import sensiBull from "../../assets/images/sensibullLogo.svg";
import zFundHouse from "../../assets/images/zerodhaFundhouse.png";
import goldenPi from "../../assets/images/goldenpiLogo.png";
import ditto from "../../assets/images/dittoLogo.png";

const platforms = [
  { img: smallCase, desc: "Thematic investment platform", alt: "Smallcase" },
  { img: streak, desc: "Algo & platform", alt: "Streak" },
  { img: sensiBull, desc: "Options trading platform", alt: "Sensibull" },
  { img: zFundHouse, desc: "Asset management", alt: "Zerodha Fund House" },
  { img: goldenPi, desc: "Bonds trading platform", alt: "GoldenPi" },
  { img: ditto, desc: "Insurance", alt: "Ditto" },
];

function Universe() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {platforms.map((platform, index) => (
          <div key={index} className="col-md-4 col-sm-6 p-3 mt-5">
            <img
              src={platform.img}
              alt={`${platform.alt} Logo`}
              className="img-fluid mb-2"
              style={{ maxWidth: "120px", height: "auto" }}
            />
            <p className="text-small text-muted">{platform.desc}</p>
          </div>
        ))}
        <button className="p-2 btn btn-primary fs-6 mb-5" style={{width:"15%", margin: "0 auto"}}>Sign-up Now</button>
      </div>
    </div>
  );
}

export default Universe;