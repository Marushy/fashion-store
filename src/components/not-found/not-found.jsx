import { Link } from "react-router-dom";
import Layout from "../../shered/layout/layout";
import not_found from "../../assets/not-found.svg";
import left_icon from "../../assets/left-arrow-svgrepo-com.svg";
import "./not-found.styles.scss";

const NotFound = () => {
  return (
    <Layout>
      <div className="notfound">
        <div className="notfound__text">
          <p className="">Sorry we couldn't find this page. </p>
          <p className="">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
        </div>
        <div className="notfound__image">
          <img src={not_found} alt="not found" />
        </div>
        <div className="notfound__link">
          <Link to="/">
            {" "}
            <div>
              <img src={left_icon} alt="left arrow" />
            </div>
            back to homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
