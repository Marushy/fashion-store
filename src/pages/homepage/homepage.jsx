import React from "react";
import HomepageItem from "../../components/homepage-item/homepage-item";
import Layout from "../../shered/layout/layout";
import HOMEPAGE_DATA from "../../data/homepage.data";

import "./homepage.scss";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: HOMEPAGE_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <Layout>
        <section className="startpage">
          <div className="startpage1">
            {collections.map(({ id, ...otherCollectionProps }) => (
              <HomepageItem key={id} {...otherCollectionProps} />
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

export default Homepage;
