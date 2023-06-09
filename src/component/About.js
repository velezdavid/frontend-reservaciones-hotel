import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
import ModalVideo from "react-modal-video";

import Image from "../assets/images/hotel/hotel2.jpg";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoModal: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  /**
   * Video modal open
   */
  openModal() {
    this.setState({ videoModal: true });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container lg:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-5">
              <div className="relative">
                <img src={Image} className=" rounded-xl shadow-md " alt="" />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link2
                    to="#"
                    onClick={this.openModal}
                    data-type="youtube"
                    data-id="WJThNmE_ehE"
                    className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link2>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="lg:ms-4">
                <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
                  Descubre el paraíso en nuestro exclusivo hotel: Un oasis de
                  lujo y hospitalidad
                </h4>
                <p className="text-slate-400 max-w-xl">
                  Sumérgete en una experiencia única en nuestro hotel, donde la
                  elegancia se encuentra con la comodidad y cada detalle está
                  cuidadosamente diseñado para ofrecerte momentos inolvidables
                  de relax y deleite.
                </p>

                <div className="mt-4">
                  <Link2
                    to="/grid"
                    className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3"
                  >
                    Descubrir
                  </Link2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.videoModal}
          videoId="WJThNmE_ehE"
          onClose={() => this.setState({ videoModal: false })}
        />
      </React.Fragment>
    );
  }
}

export default About;
