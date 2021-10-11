import React from "react";
import './style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';




function Noticias(props) {
  const { width } = props;
  //Hay que poner un hook que al iniciar le pida al backend le pida el arreglo
  //
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
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
              src="https://source.unsplash.com/random/?river,park"
              alt=""
            />
            <div class="bottom">
              <div class="left">
                <div class="details">
                  <h2 class="txt_products">Name</h2>
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
                  <h2 class="txt_products">Name</h2>
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
                  <h2 class="txt_products">Name</h2>
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
                  <h2 class="txt_products">Name</h2>
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
