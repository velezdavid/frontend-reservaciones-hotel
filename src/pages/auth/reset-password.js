import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";

import Icon from "../../assets/images/logo-icon-64.png";
import BackgroudImage from "../../assets/images/bg/01.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    particlesInit = async (main) => {
        console.log(main);
        // initialize the tsParticles instance
        await loadFull(main);
    };
    particlesLoaded = (container) => {
        console.log(container);
    };
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
                    <div
                        style={{ backgroundImage: `url(${BackgroudImage})` }}
                        className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover"></div>
                    <Particles
                        id="tsparticles"
                        init={this.particlesInit}
                        loaded={this.particlesLoaded}
                        className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
                        options={{
                            "particles": {
                                "number": {
                                    "value": 250,
                                    "density": {
                                        "enable": false,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                    },
                                    "polygon": {
                                        "nb_sides": 36
                                    },
                                    "image": {
                                        "src": "",
                                        "width": 1000,
                                        "height": 1000
                                    }
                                },
                                "opacity": {
                                    "value": 0.5,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 0.5,
                                        "opacity_min": 1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 3.2,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 20,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "distance": 100,
                                    "color": "#ffffff",
                                    "opacity": 0.4,
                                    "width": 2
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 1,
                                    "direction": "bottom",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 800,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "repulse"
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 200,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 71,
                                        "duration": 0.4
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                        }}
                    />
                    <div className="container z-3">
                        <div className="flex justify-center">
                            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                                <Link2 to="/"><img src={Icon} className="mx-auto" alt="" /></Link2>
                                <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
                                <div className="grid grid-cols-1">
                                    <p className="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                                    <form className="ltr:text-left rtl:text-right">
                                        <div className="grid grid-cols-1">
                                            <div className="mb-4">
                                                <label className="font-medium" htmlFor="LoginEmail">Email Address:</label>
                                                <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com" />
                                            </div>

                                            <div className="mb-4">
                                                <Link2 to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Send</Link2>
                                            </div>

                                            <div className="text-center">
                                                <span className="text-slate-400 me-2">Remember your password ? </span><Link2 to="/auth-login" className="text-black dark:text-white font-bold">Sign in</Link2>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ResetPassword;