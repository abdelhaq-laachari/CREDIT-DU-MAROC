import "./Error.css";
import { Link } from "react-router-dom";
import Home from "../home/Home";
import Lottie from "lottie-react";
import ErrorGif from '../../assets/animated/404.json';
import Button from "../../components/Buttons/Button";

function Error() {

  return (
    <section className="page_404">
      <div className="main">
        <div className="gif">
          <Lottie
            animationData={ErrorGif}
            loop={true}
          />
        </div>
        <div className="contant_box_404">
          <h3 className="h2">Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>
          <Link to="/" element={<Home />}>
            <Button name="Go Home" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
