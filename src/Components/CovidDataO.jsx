import React from "react";
import { Cards, Chart, CountryPicker } from ".";
import styles from "../App.module.css";
import {Link} from "react-router-dom";
import { fetchData } from "../api/index";
import coronaImage from "../images/image.png";
import Footer from "./Footer/Footer";

class CovidData extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <br />
        <text>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </text>
        <br />
        <text>
          <i>(Select a Country below)</i>
        </text>
        <br />
        <br />
        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Link className={styles.link} to="/">Logout</Link>
        <Footer />
      </div>
    );
  }
}

export default CovidData;