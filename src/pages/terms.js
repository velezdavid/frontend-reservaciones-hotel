import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";

import BackgroudImage from "../assets/images/hotel/banner.jpg";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "navbar-white",
      openSectionIndex: 0,
      sections: [
        {
          title: "How does it work ?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
        {
          title: "Do I need a designer to use Hously ?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
        {
          title: "What do I need to do to start selling ?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
        {
          title: "What happens when I receive an order ?",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
      ],
    };
    this.handleSectionClick = this.handleSectionClick.bind(this);
  }
  handleSectionClick(index) {
    this.setState((state) => ({
      openSectionIndex: state.openSectionIndex === index ? -1 : index,
    }));
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { openSectionIndex } = this.state;
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
                Términos y Servicios
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
        {/* <!-- End Hero --> */}

        {/* <!-- Start Terms & Conditions --> */}
        <section className="relative lg:py-24 py-16">
          <div className="container">
            <div className="md:flex justify-center">
              <div className="md:w-3/4">
                <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                  <h5 className="text-xl font-medium mb-4">Introducción :</h5>
                  <p className="text-slate-400">
                    ¡Bienvenido a nuestro hotel, donde la excelencia y la
                    comodidad se encuentran para brindarte una experiencia
                    inolvidable! Nuestro compromiso es ofrecerte un ambiente
                    acogedor, servicios de calidad y atención personalizada. Ya
                    sea que estés aquí por negocios o placer, nos esforzamos por
                    hacer de tu estadía una experiencia única. Descubre nuestras
                    elegantes habitaciones, deleita tu paladar con nuestra
                    exquisita cocina y disfruta de nuestras instalaciones y
                    servicios de primera clase. Nos enorgullece recibirte y
                    brindarte momentos inolvidables en un entorno que combina
                    sofisticación y calidez. ¡Bienvenido a nuestro hotel, tu
                    hogar lejos de casa!
                  </p>
                  <h5 className="text-xl font-medium mb-4 mt-8">
                    Términos y Servicios
                  </h5>
                  <p className="text-slate-400">
                    <b className="text-danger-600">1. Reservas:</b> Aceptamos
                    reservas en línea, por teléfono y en persona. Se requiere
                    una tarjeta de crédito válida para garantizar la reserva.
                  </p>
                  <p className="text-slate-400">
                    <b className="text-danger-600">2. Check-in y check-out:</b>{" "}
                    El check-in se realiza a partir de las [hora de check-in] y
                    el check-out debe realizarse antes de las [hora de
                    check-out]. Se pueden aplicar cargos adicionales por
                    check-out tardío.
                  </p>
                  <p className="text-slate-400">
                    <b className="text-danger-600">
                      3. Política de cancelación:
                    </b>{" "}
                    Se requiere un aviso de cancelación de al menos [número de
                    horas/días] antes de la fecha de llegada para evitar cargos.
                    Las políticas de cancelación pueden variar según el tipo de
                    reserva.
                  </p>
                  <p className="text-slate-400">
                    <b className="text-danger-600">4. Tarifas y pagos:</b> Las
                    tarifas se basan en ocupación doble y están sujetas a
                    impuestos locales y cargos adicionales. Aceptamos tarjetas
                    de crédito y efectivo como formas de pago.
                  </p>
                  <p className="text-slate-400">
                    <b className="text-danger-600">5. Política de niños:</b> Se
                    pueden aplicar cargos adicionales por niños adicionales en
                    la habitación. Consulta nuestras políticas específicas sobre
                    la edad y los cargos.
                  </p>
                  <p className="text-slate-400">
                    <b className="text-danger-600">6. Política de mascotas: </b>
                    Se permiten mascotas en el hotel bajo ciertas condiciones.
                    Se pueden aplicar cargos adicionales y se requiere
                    notificación previa.
                  </p>

                  <p className="text-slate-400">
                    <b className="text-danger-600">
                      7. Política de fumadores:{" "}
                    </b>
                    Ofrecemos servicios como wifi gratuito, estacionamiento,
                    servicio de habitaciones, piscina, gimnasio, spa,
                    restaurante, bar, salas de reuniones, servicio de
                    lavandería, entre otros. Algunos servicios pueden tener
                    costos adicionales o requerir reservas anticipadas.
                  </p>
                  <p className="text-slate-400">
                    <b className="text-danger-600">
                      8. Responsabilidad y seguridad:
                    </b>
                    El hotel no se hace responsable por la pérdida, robo o daño
                    de objetos de valor dejados en las habitaciones o áreas
                    comunes. Se recomienda utilizar las cajas de seguridad
                    disponibles y tomar precauciones adicionales.
                  </p>
                  <p className="text-slate-400">
                    <b className="text-danger-600">
                      9. Política de privacidad:
                    </b>
                    Respetamos tu privacidad y protegemos tus datos personales
                    de acuerdo con las leyes aplicables. Consulta nuestra
                    política de privacidad para obtener más información.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <Switcher />
      </React.Fragment>
    );
  }
}

export default Terms;
