import React from "react";
import './style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { 
  Button,
  Box
} from "@material-ui/core";



function Noticias(props) {
  const { width, listadoEventos } = props;
  //Hay que poner un hook que al iniciar le pida al backend le pida el arreglo
  //
  console.log(listadoEventos);
  return (
    <div style={{ backgroundColor: "#FFFFFF", paddingTop: "50px" }}>
      {/*elements.map(v => 
        <div className="wrapper">
          <div className="container">
            <img
              className="top"
              src="https://source.unsplash.com/random/?river,park"
              alt=""
            />
            <div className="bottom">
              <div className="left">
                <div className="details">
                  <h2 className="txt_products">{v.name}</h2>
                  <p>Sub Name</p>
                </div>
                <div className="buy">
                  <a href="#">
                    <i className="fas fa-cart-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <VisibilityIcon />
            </div>
            <div className="contents">
              <h1>Name</h1>
              <p>Descriptions</p>
            </div>
          </div>
        </div>
      )*/}

      <div className="products_body center">
        
        {listadoEventos && (listadoEventos.map((listadoEventos, index) => (
        <div className="wrapper" key={index}>
          <div className="container">
            <img
              className="top"
              src={listadoEventos.imagen}
              alt=""
            />
            <div className="bottom">
              <div className="left">
                <div className="details">
                  <h2 className="txt_products">{listadoEventos.titulo}</h2>
                  <p>{listadoEventos.region}</p>
                </div>
              </div>
              <Box className="btnContainer">
                <Button href="/eventos" variant="contained" disableElevation className="button" >Cómo ayudar</Button>
              </Box>
            </div>
          </div>
          <div className="inside">
            <div className="icon">
              <VisibilityIcon />
            </div>
            <div className="contents">
              <h1>{listadoEventos.titulo}</h1>
              <br></br>
              <p>{listadoEventos.descripcion} </p>
              <br></br>
              <p>Hay 3 iniciativas activas para este evento. </p>
            </div>
          </div>
        </div>
        )))}
        
      </div>


      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

      <script
        type="text/javascript"
        src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
      ></script>
      <script src="carusel.js"></script>
    </div>
  );
}


export default Noticias;
