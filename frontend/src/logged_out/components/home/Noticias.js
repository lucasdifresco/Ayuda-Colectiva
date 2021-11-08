import React from "react";
import './style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { 
  Button,
  Box
} from "@material-ui/core";



function Noticias(props) {
  const { width } = props;
  //Hay que poner un hook que al iniciar le pida al backend le pida el arreglo
  //
  return (
    <div style={{ backgroundColor: "#FFFFFF", paddingTop: "50px" }}>
      {/*elements.map(v => 
        <div class="wrapper">
          <div class="container">
            <img
              class="top"
              src="https://source.unsplash.com/random/?river,park"
              alt=""
            />
            <div class="bottom">
              <div class="left">
                <div class="details">
                  <h2 class="txt_products">{v.name}</h2>
                  <p>Sub Name</p>
                </div>
                <div class="buy">
                  <a href="#">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="inside">
            <div class="icon">
              <VisibilityIcon />
            </div>
            <div class="contents">
              <h1>Name</h1>
              <p>Descriptions</p>
            </div>
          </div>
        </div>
      )*/}

      <div class="products_body center">
        

        <div class="wrapper">
          <div class="container">
            <img
              class="top"
              src="https://www.telam.com.ar/advf/imagenes/2021/01/601031e65af31_1004x565.jpg"
              alt=""
            />
            <div class="bottom">
              <div class="left">
                <div class="details">
                  <h2 class="txt_products">Incendios en El Bolsón</h2>
                  <p>Río Negro</p>
                </div>
              </div>
              <Box className="btnContainer">
                <Button href="/eventos" variant="contained" disableElevation className="button" >Cómo ayudar</Button>
              </Box>
            </div>
          </div>
          <div class="inside">
            <div class="icon">
              <VisibilityIcon />
            </div>
            <div class="contents">
              <h1>Incendios en El Bolsón</h1>
              <br></br>
              <p>En abril 2020 se reportó el primer foco en la zona del Bolsón. El fuego se expandió afectando 23400 hectáreas. </p>
              <br></br>
              <p>Hay 3 iniciativas activas para este evento. </p>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <div class="container">
            <img
              class="top"
              src="https://www.infocampo.com.ar/wp-content/uploads/2020/07/20449090_1884053244944009_6133390741979215801_o.jpg"
              alt=""
            />
            <div class="bottom">
              <div class="left">
                <div class="details">
                  <h2 class="txt_products">Quema de pastizales en el Paraná</h2>
                  <p>Santa Fe, Buenos Aires</p>
                </div>
              </div>
              <Box className="btnContainer">
                <Button variant="contained" disableElevation className="button" >Cómo ayudar</Button>
              </Box>
            </div>
          </div>
          <div class="inside">
            <div class="icon">
              <VisibilityIcon />
            </div>
            <div class="contents">
              <h1>Quema de pastizales en el Paraná</h1>
              <br></br>
              <p>Una vez más, personas malintencionadas están incendiando las islas del Paraná para luego reclamar el terreno. </p>
              <br></br>
              <p>Hay 3 iniciativas activas para este evento. </p>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <div class="container">
            <img
              class="top"
              src="https://imengine.public.prod.sci.navigacloud.com/?uuid=12f66143-23f7-5e20-a701-045d156bb1ee&type=preview&width=1024&height=768&q=60"
              alt=""
            />
            <div class="bottom">
              <div class="left">
                <div class="details">
                  <h2 class="txt_products">Incendio en Calamuchita</h2>
                  <p>Córdoba</p>
                </div>
              </div>
              <Box className="btnContainer">
                <Button variant="contained" disableElevation className="button" >Cómo ayudar</Button>
              </Box>
            </div>
          </div>
          <div class="inside">
            <div class="icon">
              <VisibilityIcon />
            </div>
            <div class="contents">
              <h1>Name</h1>
              <p>Descriptions</p>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <div class="container">
            <img
              class="top"
              src="https://media.lareforma.com.ar/adjuntos/256/imagenes/000/541/0000541426.jpg"
              alt=""
            />
            <div class="bottom">
              <div class="left">
                <div class="details">
                  <h2 class="txt_products">Incendios en La Pampa</h2>
                  <p>La Pampa</p>
                </div>
              </div>
              <Box className="btnContainer">
                <Button variant="contained" disableElevation className="button" >Cómo ayudar</Button>
              </Box>
            </div>
          </div>
          <div class="inside">
            <div class="icon">
              <VisibilityIcon />
            </div>
            <div class="contents">
              <h1>Incendios en La Pampa</h1>
              <p>Descriptions</p>
            </div>
          </div>
        </div>
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
