import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import Noticias from "./Noticias";
import { listarEventos } from "../../../controllers/api/api.eventos";

function Home(props) {
  const { selectHome } = props;

  const [listadoEventos, setEventos] = useState(null);
  useEffect(() => { 

    const getEventos = async () => {
      const data = await listarEventos();
      setEventos(data.response);
    }
    getEventos();
  }, []);

  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      {/*<HeadSection />*/}
      {/* <FeatureSection /> */}
      {/* <PricingSection /> */}
      <Noticias 
        listadoEventos={listadoEventos}
      />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
  listadoEventos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
