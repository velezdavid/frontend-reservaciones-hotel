import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import BackgroudImage from "../assets/images/bg/01.jpg";
import Switcher from "../component/Switcher";

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "navbar-white",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar navClass={this.state.navClass} />
        {/* <!-- Start Hero --> */}
        <section
          style={{ backgroundImage: `url(${BackgroudImage})` }}
          className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-10">
              <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                Privacy Policy
              </h3>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="relative lg:py-24 py-16">
          <div className="container">
            <div className="md:flex justify-center">
              <div className="md:w-3/4">
                <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                  <h5 className="text-xl font-medium mb-4">
                    Política de Privacidad:
                  </h5>
                  <p className="text-slate-400">
                    Esta Política de Privacidad describe cómo se recopila,
                    utiliza y comparte la información personal de los visitantes
                    de nuestro sitio web. Al acceder y utilizar nuestro sitio
                    web, aceptas los términos y condiciones de esta política.
                  </p>
                  <h5 className="text-xl font-medium mb-4 mt-8">
                    Recopilación de información :
                  </h5>
                  <p className="text-slate-400">
                    Recopilamos información personal que nos proporcionas
                    voluntariamente, como nombre, dirección de correo
                    electrónico y datos de contacto, cuando te suscribes a
                    nuestro boletín de noticias, completas formularios de
                    contacto o realizas compras a través de nuestro sitio web.
                  </p>
                  <h5 className="text-xl font-medium mb-4 mt-8">
                    Uso de la información :
                  </h5>
                  <p className="text-slate-400">
                    Utilizamos la información personal recopilada para responder
                    a tus consultas, procesar tus pedidos, enviar
                    actualizaciones y promociones por correo electrónico,
                    mejorar nuestros servicios y personalizar tu experiencia en
                    nuestro sitio web.
                  </p>
                  <h5 className="text-xl font-medium mb-4">
                    Protección de la información :
                  </h5>
                  <p className="text-slate-400">
                    Implementamos medidas de seguridad razonables para proteger
                    la información personal que recopilamos y mantenemos. Sin
                    embargo, debes tener en cuenta que ninguna transmisión de
                    datos a través de Internet o almacenamiento en línea puede
                    garantizar una seguridad absoluta.
                  </p>
                  <h5 className="text-xl font-medium mb-4 mt-8">
                    Divulgación a terceros :
                  </h5>
                  <p className="text-slate-400">
                    No vendemos, comerciamos ni transferimos tu información
                    personal a terceros sin tu consentimiento, excepto cuando
                    sea necesario para cumplir con los fines del servicio
                    solicitado. Sin embargo, podemos compartir información con
                    proveedores de servicios de confianza que nos ayudan a
                    operar nuestro sitio web y prestar nuestros servicios.
                  </p>
                  <h5 className="text-xl font-medium mb-4 mt-8">Cookies :</h5>
                  <p className="text-slate-400">
                    Utilizamos cookies y tecnologías similares para mejorar tu
                    experiencia en nuestro sitio web. Estas cookies no recopilan
                    información personal identificable. Puedes ajustar la
                    configuración de tu navegador para rechazar las cookies,
                    pero esto puede afectar la funcionalidad del sitio.
                  </p>
                  <h5 className="text-xl font-medium mb-4 mt-8">
                    Contáctanos :
                  </h5>
                  <p className="text-slate-400">
                    Si tienes alguna pregunta o inquietud acerca de nuestra
                    Política de Privacidad, no dudes en ponerte en contacto con
                    nosotros a través de la información de contacto
                    proporcionada en nuestro sitio web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Terms & Conditions --> */}

        <Footer />
        <Switcher />
      </React.Fragment>
    );
  }
}

export default Privacy;
