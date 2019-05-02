import React, {Component} from 'react';

class Inicio extends Component {
  render() {
    return (
      <div>
        <div class="loader-wrap">
          <div class="pin">
              <div class="pulse"></div>
          </div>
        </div>
        <div id="main">
          <header class="main-header">
            <div class="header-top fl-wrap">
              <div class="container">
                <div class="logo-holder">
                    <a href="/inicio"><img src="images/logo.png" alt=""/></a>
                </div> 
                <div class="currency-wrap">
                    <p> Jr, Ancash 460, Huancayo</p>                          
                </div>
              </div>
            </div>
            <div class="header-inner fl-wrap">
            <div class="container">
              <div class="show-search-button">
                <span>Buscar</span>
                <i class="fas fa-search"></i>
              </div>
                <div class="header-user-menu">
                  <div class="header-user-name">
                    <span>
                      <img src="images/avatar/4.jpg" alt=""/>
                    </span>
                    mi cuenta
                  </div>
                </div>
                <div class="home-btn"><a href="index.html"><i class="fas fa-home"></i></a></div>
                <div class="nav-button-wrap color-bg">
                  <div class="nav-button">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <div class="nav-holder main-menu">
                  <nav>
                    <ul>
                      <li>
                        <a href="index.html" class="act-link">HOME</a>
                      </li>
                      <li>
                        <a href="habitaciones.html">HABITACIONES  <i class="fas fa-caret-down"></i></a>
                      </li>
                      <li>
                        <a href="promociones.html">PROMOCIONES <i class="fas fa-caret-down"></i></a>
                      </li>
                      <li>
                        <a href="contactos.html">CONTACTENOS <i class="fas fa-caret-down"></i></a>
                      </li>
                      <li>
                        <a href="lugares-turiscos-huancayo.html">LUGARES TURISTICOS <i class="fas fa-caret-down"></i></a>
                      </li>
                        <a href="ofertas.html" class="add-hotel">OFERTA <span><i class="far fa-plus"></i></span></a>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="header-search vis-search">
              <div class="container">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="header-search-input-item fl-wrap date-parent">
                        <label>fecha ingreso</label>
                        <span class="header-search-input-item-icon"><i class="fal fa-calendar-check"></i></span>
                        <input type="text" placeholder="fech ingreso - fech salida" name="header-search"   value=""/>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="header-search-input-item fl-wrap">
                      <div class="quantity-item">
                        <label>HABITACIONES</label>
                        <div class="quantity">
                          <input type="number" min="1" max="3" step="1" value="1"/>
                        </div>
                      </div>
                      <div class="quantity-item">
                        <label>ADULTOS</label>
                        <div class="quantity">
                          <input type="number" min="1" max="3" step="1" value="1"/>
                        </div>
                      </div>
                      <div class="quantity-item">
                        <label>NIÑOS</label>
                        <div class="quantity">
                          <input type="number" min="0" max="3" step="1" value="0"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="header-search-input-item fl-wrap">
                      <button class="header-search-button" onclick="window.location.href='listing.html'">Buscar <i class="far fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="close-header-search"><i class="fal fa-angle-double-up"></i></div>
            </div>
          </header>
            <div id="wrapper">
              <div class="content">
                <section class="hero-section" data-scrollax-parent="true" id="sec1">
                  <div class="hero-parallax">
                    <div class="bg"  data-bg="images/bg/hotel-rogger-huancayo_.jpg" data-scrollax="properties: { translateY: '200px' }"></div>
                    <div class="overlay op7"></div>
                  </div>
                  <div class="hero-section-wrap fl-wrap">
                    <div class="container">
                      <div class="home-intro">
                        <div class="section-title-separator"><span></span></div>
                        <h2>HOTEL ROGGER HUANCAYO</h2>
                        <span class="section-separator"></span>
                        <h3 style={{ color: '#e4a600' }}><b>ESTAMOS UBICADOS A MEDIA CUADRA DE LA PLAZA PRINCIPAL</b></h3>
                      </div>
                      <div class="main-search-input-wrap">
                        <div class="main-search-input fl-wrap">
                          <div class="main-search-input-item main-date-parent main-search-input-item_small">
                            <span class="inpt_dec"><i class="fal fa-calendar-check"></i></span> <input type="text" placeholder="fech ingreso - fech salida" name="main-input-search"   value=""/>
                          </div>
                          <div class="main-search-input-item">
                            <div class="qty-dropdown fl-wrap">
                              <div class="qty-dropdown-header fl-wrap"><i class="fal fa-users"></i> Habitaciones</div>
                              <div class="qty-dropdown-content fl-wrap">
                                <div class="quantity-item">
                                  <label><i class="fas fa-male"></i> SIMPLE</label>
                                  <div class="quantity">
                                    <input type="number" min="1" max="3" step="1" value="1"/>
                                    <div class="quantity-nav">
                                      <div class="quantity-button quantity-up">+</div>
                                      <div class="quantity-button quantity-down">-</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="quantity-item">
                                  <label><i class="fas fa-child"></i> DOBLES</label>
                                  <div class="quantity">
                                    <input type="number" min="0" max="3" step="1" value="0"/>
                                  </div>
                                </div>
                                <div class="quantity-item">
                                  <label><i class="fas fa-child"></i> TRIPLE</label>
                                  <div class="quantity">
                                    <input type="number" min="0" max="3" step="1" value="0"/>
                                  </div>
                                </div>
                                <div class="quantity-item">
                                  <label><i class="fas fa-child"></i> SUIT</label>
                                  <div class="quantity">
                                      <input type="number" min="0" max="3" step="1" value="0"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="main-search-input-item">
                            <div class="qty-dropdown fl-wrap">
                              <div class="qty-dropdown-header fl-wrap"><i class="fal fa-users"></i> Personas</div>
                              <div class="qty-dropdown-content fl-wrap">
                                <div class="quantity-item">
                                  <label><i class="fas fa-male"></i> Adultos</label>
                                  <div class="quantity">
                                    <input type="number" min="1" max="3" step="1" value="1"/>
                                  </div>
                                </div>
                                <div class="quantity-item">
                                  <label><i class="fas fa-child"></i> niños</label>
                                  <div class="quantity">
                                    <input type="number" min="0" max="3" step="1" value="0"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="main-search-button color2-bg" onclick="window.location.href='listing.html'">Buscar <i class="fal fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="header-sec-link">
                    <div class="container"><a href="#sec2" class="custom-scroll-link color-bg"><i class="fal fa-angle-double-down"></i></a></div>
                  </div>
                </section> 
                <div class="container">
                <div class="section-title">
                  <div class="section-title-separator"><span></span></div>
                    <h2>Nuestras habitaciones</h2>
                    <span class="section-separator"></span>
                  </div>
                </div>
                <section class="grey-blue-bg small-padding" id="sec1">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mobile-list-controls fl-wrap mar-bot-cont">
                          <div class="mlc show-list-wrap-search fl-wrap"><i class="fal fa-filter"></i> FILTRAR</div>
                        </div>
                        <div >
                          <div class="list-main-wrap fl-wrap card-listing">
                            <div class="list-main-wrap-opt fl-wrap">
                              <div class="grid-opt">
                                <ul>
                                  <li><span class="two-col-grid act-grid-opt"><i class="fas fa-th-large"></i></span></li>
                                  <li><span class="one-col-grid"><i class="fas fa-bars"></i></span></li>
                                </ul>
                              </div>                             
                            </div>
                            <div class="listing-item-container init-grid-items fl-wrap three-columns-grid">
                              <div class="listing-item" style={{ height: '529px' }}>
                                <article class="geodir-category-listing fl-wrap">
                                  <div class="geodir-category-img">
                                      <a href="listing-single.html"><img src="images/gal/habitacion-simple-hotel-rogger-huancayo.jpg" alt=""/></a> 
                                    <div class="geodir-category-opt">
                                      <div class="listing-rating card-popup-rainingvis" data-starrating2="5"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                      <div class="rate-class-name">
                                        <div class="score"><strong>muy bien</strong>27 vistas </div>
                                        <span>5.0</span>                                             
                                      </div>
                                    </div>
                                  </div>
                                  <div class="geodir-category-content fl-wrap title-sin_item">
                                    <div class="geodir-category-content-title fl-wrap">
                                      <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map"><a href="listing-single.html">Habitación Simple</a></h3>
                                      </div>
                                    </div>           
                                    <ul class="facilities-list fl-wrap">
                                      <li><i class="fal fa-wifi"></i><span>WiFi gratis</span></li>
                                      <li><i class="fal fa-tv"></i><span> tv</span></li>
                                      <li><i class="fal fa-key"></i><span>Seguridad</span></li>
                                      <li><i class="fal fa-smoking-ban"></i><span>no fumar</span></li>
                                      <li><i class="fal fa-utensils"></i><span> desayuno</span></li>
                                    </ul>
                                    <div  class="geodir-category-footer fl-wrap">
                                      <div class="geodir-category-price ">PRECIO <span style={{ fontSize: '16px', color: 'red' }}>S/ 50.00</span></div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div class="listing-item" style={{ height: '529px' }}>
                                <article class="geodir-category-listing fl-wrap">
                                  <div class="geodir-category-img">
                                    <a href="listing-single.html"><img src="images/gal/habitacion-doble-hotel-rogger-huancayo.jpg" alt=""/></a>
                                    <div class="geodir-category-opt">
                                      <div class="listing-rating card-popup-rainingvis" data-starrating2="5"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                      <div class="rate-class-name">
                                        <div class="score"><strong>muy bien</strong>44 vistas </div>
                                        <span>5.0</span>                                             
                                      </div>
                                    </div>
                                  </div>
                                  <div class="geodir-category-content fl-wrap title-sin_item">
                                    <div class="geodir-category-content-title fl-wrap">
                                      <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map"><a href="listing-single.html">Habitación Doble</a></h3>
                                      </div>
                                    </div>         
                                    <ul class="facilities-list fl-wrap">
                                      <li><i class="fal fa-wifi"></i><span>WiFi gratis</span></li>
                                      <li><i class="fal fa-tv"></i><span> tv</span></li>
                                      <li><i class="fal fa-key"></i><span>Seguridad</span></li>
                                      <li><i class="fal fa-smoking-ban"></i><span>no fumar</span></li>
                                      <li><i class="fal fa-utensils"></i><span> desayuno</span></li>
                                    </ul>
                                    <div  class="geodir-category-footer fl-wrap">
                                      <div class="geodir-category-price ">PRECIO <span style={{ fontSize: '16px', color: 'red' }}>S/ 70.00</span></div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div class="listing-item" style={{ height: '529px' }}>
                                <article class="geodir-category-listing fl-wrap">
                                  <div class="geodir-category-img">
                                    <a href="listing-single.html"><img src="images/gal/habitacion-suit-hotel-rogger-huancayo.jpg" alt=""/></a>
                                    <div class="geodir-category-opt">
                                      <div class="listing-rating card-popup-rainingvis" data-starrating2="5"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                      <div class="rate-class-name">
                                        <div class="score"><strong>muy bien</strong>27 vistas </div>
                                        <span>5.0</span>                                             
                                      </div>
                                    </div>
                                  </div>
                                  <div class="geodir-category-content fl-wrap title-sin_item">
                                    <div class="geodir-category-content-title fl-wrap">
                                      <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map"><a href="listing-single.html">Habitación suit</a></h3>
                                      </div>
                                    </div>
                                    <ul class="facilities-list fl-wrap">
                                      <li><i class="fal fa-wifi"></i><span>WiFi gratis</span></li>
                                      <li><i class="fal fa-tv"></i><span> tv</span></li>
                                      <li><i class="fal fa-key"></i><span>Seguridad</span></li>
                                      <li><i class="fal fa-smoking-ban"></i><span>no fumar</span></li>
                                      <li><i class="fal fa-utensils"></i><span> desayuno</span></li>
                                    </ul>
                                    <div  class="geodir-category-footer fl-wrap">
                                      <div class="geodir-category-price ">PRECIO <span style={{ fontSize: '16px', color: 'red' }}>S/ 90.00</span></div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div class="listing-item" style={{ height: '529px' }}>
                                <article class="geodir-category-listing fl-wrap">
                                  <div class="geodir-category-img">
                                    <a href="listing-single.html"><img src="images/gal/habitacion-suit-hotel-rogger-huancayo.jpg" alt=""/></a>
                                    <div class="geodir-category-opt">
                                      <div class="listing-rating card-popup-rainingvis" data-starrating2="5"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                      <div class="rate-class-name">
                                        <div class="score"><strong>muy bien</strong>27 vistas </div>
                                        <span>5.0</span>                                             
                                      </div>
                                    </div>
                                  </div>
                                  <div class="geodir-category-content fl-wrap title-sin_item">
                                    <div class="geodir-category-content-title fl-wrap">
                                      <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map"><a href="listing-single.html">Habitación Tripe</a></h3>
                                      </div>
                                    </div>             
                                    <ul class="facilities-list fl-wrap">
                                      <li><i class="fal fa-wifi"></i><span>WiFi gratis</span></li>
                                      <li><i class="fal fa-tv"></i><span> tv</span></li>
                                      <li><i class="fal fa-key"></i><span>Seguridad</span></li>
                                      <li><i class="fal fa-smoking-ban"></i><span>no fumar</span></li>
                                      <li><i class="fal fa-utensils"></i><span> desayuno</span></li>
                                    </ul>
                                    <div  class="geodir-category-footer fl-wrap">
                                      <div class="geodir-category-price ">PRECIO <span style={{ fontSize: '16px', color: 'red' }}>S/ 80.00</span></div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div class="listing-item" style={{ height: '529px' }}>
                                <article class="geodir-category-listing fl-wrap">
                                  <div class="geodir-category-img">
                                    <a href="listing-single.html"><img src="images/gal/habitacion-simple-hotel-rogger-huancayo.jpg" alt=""/></a>
                                    <div class="geodir-category-opt">
                                      <div class="listing-rating card-popup-rainingvis" data-starrating2="5"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                      <div class="rate-class-name">
                                        <div class="score"><strong>muy bien</strong>27 vistas </div>
                                        <span>5.0</span>                                             
                                      </div>
                                    </div>
                                  </div>
                                  <div class="geodir-category-content fl-wrap title-sin_item">
                                    <div class="geodir-category-content-title fl-wrap">
                                      <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map"><a href="listing-single.html">Habitación Matrimonial</a></h3>
                                      </div>
                                    </div>
                                    <ul class="facilities-list fl-wrap">
                                      <li><i class="fal fa-wifi"></i><span>WiFi gratis</span></li>
                                      <li><i class="fal fa-tv"></i><span> tv</span></li>
                                      <li><i class="fal fa-key"></i><span>Seguridad</span></li>
                                      <li><i class="fal fa-smoking-ban"></i><span>no fumar</span></li>
                                      <li><i class="fal fa-utensils"></i><span> desayuno</span></li>
                                    </ul>
                                    <div  class="geodir-category-footer fl-wrap">
                                      <div class="geodir-category-price ">PRECIO <span style={{ fontSize: '16px', color: 'red' }}>S/ 80.00</span></div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                              <div class="listing-item" style={{ height: '529px' }}>
                                <article class="geodir-category-listing fl-wrap">
                                  <div class="geodir-category-img">
                                    <a href="listing-single.html"><img src="images/gal/habitacion-doble-hotel-rogger-huancayo.jpg" alt=""/></a>
                                    <div class="geodir-category-opt">
                                      <div class="listing-rating card-popup-rainingvis" data-starrating2="5"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                      <div class="rate-class-name">
                                        <div class="score"><strong>muy bien</strong>27 vistas </div>
                                        <span>5.0</span>                                             
                                      </div>
                                    </div>
                                  </div>
                                  <div class="geodir-category-content fl-wrap title-sin_item">
                                    <div class="geodir-category-content-title fl-wrap">
                                      <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map"><a href="listing-single.html">Habitación Cuadruple</a></h3>
                                      </div>
                                    </div>
                                    <ul class="facilities-list fl-wrap">
                                      <li><i class="fal fa-wifi"></i><span>WiFi gratis</span></li>
                                      <li><i class="fal fa-tv"></i><span> tv</span></li>
                                      <li><i class="fal fa-key"></i><span>Seguridad</span></li>
                                      <li><i class="fal fa-smoking-ban"></i><span>no fumar</span></li>
                                      <li><i class="fal fa-utensils"></i><span> desayuno</span></li>
                                    </ul>
                                    <div  class="geodir-category-footer fl-wrap">
                                      <div class="geodir-category-price ">PRECIO <span style={{ fontSize: '16px', color: 'red' }}>S/ 80.00</span></div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
              <footer class="main-footer">
                <div class="footer-inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="footer-widget fl-wrap">
                          <h3>Acerca de rogger</h3>
                            <div class="footer-contacts-widget fl-wrap">
                              <ul  class="footer-contacts fl-wrap">
                                <li><span><i class="fal fa-envelope"></i> correo electronico:</span><a href="#" target="_blank">reservaciones@hotelrogger.pe</a></li>
                                <li> <span><i class="fal fa-map-marker-alt"></i> Ubicación :</span><a href="#" target="_blank" style={{ color: '#ffffff' }}>Jr, Ancash 460, Huancayo</a></li>
                                <li><span><i class="fal fa-phone"></i> Telefono :</span><a href="#">(064) 223868</a></li>
                              </ul>
                                <div class="footer-social">
                                  <span>Redes: </span>
                                  <ul>
                                    <li><a href="https://www.facebook.com/hotelroggerhuancayo" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://web.whatsapp.com/send?phone=972992472" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="footer-widget fl-wrap">
                              <h3>NUESTRAS ÚLTIMAS NOTICIAS</h3>
                              <div class="widget-posts fl-wrap">
                                <ul>
                                  <li class="clearfix">
                                    <a href="#"  class="widget-posts-img"><img src="images/gal/lugaresturisticos/laguna-huaytapalla-huancayo.jpg" class="respimg" alt=""/></a>
                                    <div class="widget-posts-descr">
                                      <a href="#" title="">Lagunas Huaytapallana</a>
                                      <p><b>DISTANCIA</b>1 h 37 min (36.1 km) por Carr. Principal a Huancayo</p>
                                    </div>
                                  </li>
                                  <li class="clearfix">
                                    <a href="#"  class="widget-posts-img"><img src="images/gal/lugaresturisticos/parque-de-identidad-huancayo.jpg" class="respimg" alt=""/></a>
                                    <div class="widget-posts-descr">
                                      <a href="#" title="">Parque constitucion</a>
                                      <p><b>DISTANCIA</b> 12 min (3.1 km) por Av. Giráldez y Carr. Principal a Huancayo/Av. Santivañes</p>
                                    </div>
                                  </li>
                                  <li class="clearfix">
                                    <a href="#"  class="widget-posts-img"><img src="images/gal/lugaresturisticos/parque-de-identidad-huancayo.jpg" class="respimg" alt=""/></a>
                                    <div class="widget-posts-descr">
                                      <a href="#" title="">Parque identidad Huancayo</a>
                                      <p><b>DISTANCIA</b>46 min (12.4 km) por Circuito Turistico Huaytapallana</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="footer-widget">
                            <div class="row">
                              <div class="customer-support-widget fl-wrap">
                                <h4>Atencion inmediato: </h4>
                                <a href="tel:+19012300888" class="cs-mumber">972 992 472</a>
                                <a href="tel:+19012300888" class="cs-mumber-button color2-bg">Llamanos <i class="far fa-phone-volume"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              <div class="footer-bg">
            </div>
            <div class="sub-footer">
              <div class="container">
                <div class="copyright"> &#169; Desarrollado por Josue Orizano & Yerson Campos </div>
              </div>
            </div>
          </footer>
          <div class="map-modal-wrap">
            <div class="map-modal-wrap-overlay"></div>
              <div class="map-modal-item">
                <div class="map-modal-container fl-wrap">
                  <div class="map-modal fl-wrap">
                      <div id="singleMap" data-latitude="40.7" data-longitude="-73.1"></div>
                  </div>
                  <h3><i class="fal fa-location-arrow"></i><a href="#">HOTEL ROGGER HUANCAYO</a></h3>
                  <input id="pac-input" class="controls fl-wrap controls-mapwn" type="text" placeholder="What Nearby ?   Bar , Gym , Restaurant "/>
                <div class="map-modal-close"><i class="fal fa-times"></i></div>
              </div>
            </div>
          </div>
          <div class="main-register-wrap modal">
            <div class="reg-overlay"></div>
              <div class="main-register-holder">
                <div class="main-register fl-wrap">
                  <div class="close-reg color-bg"><i class="fal fa-times"></i></div>
                  <ul class="tabs-menu">
                    <li class="current"><a href="#tab-1"><i class="fal fa-sign-in-alt"></i> INICIAR SESION</a></li>
                    <li><a href="#tab-2"><i class="fal fa-user-plus"></i>REGISTRATE</a></li>
                  </ul>
                    <div id="tabs-container">
                      <div class="tab">
                        <div id="tab-1" class="tab-content">
                          <h3>Iniciar sesión <span><strong></strong></span></h3>
                          <div class="custom-form">
                            <form method="post"  name="registerform">
                              <label>correo electronico <span>*</span> </label>
                              <input name="email" type="text"   onClick="this.select()" value=""/>
                              <label >contraseña <span>*</span> </label>
                              <input name="password" type="password"   onClick="this.select()" value="" />
                              <button type="submit"  class="log-submit-btn color-bg"><span>ingresar</span></button>
                              <div class="clearfix"></div>
                              <div class="filter-tags">
                                <input id="check-a" type="checkbox" name="check"/>
                                <label for="check-a">recordar</label>
                              </div>
                            </form>
                            <div class="lost_password">
                              <a href="#">olvisdaste tu contraseña</a>
                            </div>
                          </div>
                        </div>
                        <div class="tab">
                        <div id="tab-2" class="tab-content">
                          <h3>REGSTRATE <span><strong></strong></span></h3>
                          <div class="custom-form">
                            <form method="post"   name="registerform" class="main-register-form" id="main-register-form2">
                              <label >Nombre completo <span>*</span> </label>
                              <input name="name" type="text"   onClick="this.select()" value=""/>
                              <label>correo electronico <span>*</span></label>
                              <input name="email" type="text"  onClick="this.select()" value=""/>
                              <label >contraseña <span>*</span></label>
                              <input name="password" type="password"   onClick="this.select()" value="" />
                              <button type="submit"     class="log-submit-btn color-bg"  ><span>registrarme</span></button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="log-separator fl-wrap"><span>or</span></div>
                  <div class="soc-log fl-wrap">
                    <p>iniciar sesion facil con.</p>
                    <a href="#" class="facebook-log"><i class="fab fa-facebook-f"></i>Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Inicio;