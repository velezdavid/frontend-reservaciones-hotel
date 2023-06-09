import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import { Link } from "react-scroll";


class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: "navbar-white",
            openSectionIndex: 0,
            paymentSectionIndex: 0,
            supportSectionIndex: 0,
            generalSectionIndex: 0,

            sections: [
                {
                    title: 'How does it work ?',
                    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
                },
                {
                    title: 'Do I need a designer to use Hously ?',
                    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
                },
                {
                    title: 'What do I need to do to start selling ?',
                    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
                },
                {
                    title: 'What happens when I receive an order ?',
                    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
                }
            ]
        };

    }
    handleSectionClick(index) {
        this.setState(state => ({
            openSectionIndex: state.openSectionIndex === index ? -1 : index
        }));
    }

    handlePaymentSectionClick(index) {
        this.setState(state => ({
            paymentSectionIndex: state.paymentSectionIndex === index ? -1 : index
        }));
    }

    handleSupportSectionClick(index) {
        this.setState(state => ({
            supportSectionIndex: state.supportSectionIndex === index ? -1 : index
        }));
    }

    handleGeneralSectionClick(index) {
        this.setState(state => ({
            generalSectionIndex: state.generalSectionIndex === index ? -1 : index
        }));
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const { openSectionIndex, paymentSectionIndex, supportSectionIndex, generalSectionIndex } = this.state;

        return (
            <React.Fragment>
                <Navbar navClass={this.state.navClass} />
                {/* <!-- Start Hero --> */}
                <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="container">
                        <div className="grid grid-cols-1 text-center mt-10">
                            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Frequently Asked Questions</h3>
                        </div>
                    </div>
                </section>
                <div className="relative">
                    <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                {/* <!-- End Hero --> */}
                {/* <!-- Start Section--> */}
                <section className="relative lg:py-24 py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="lg:col-span-4 md:col-span-5">
                                <div className="rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                                    <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                                        <li className="navbar-item p-0"><Link to="tech" spy={true} activeclassname="active"
                                            smooth={true}
                                            duration={500} className="text-base font-medium navbar-link">Buying Questions</Link></li>
                                        <li className="navbar-item mt-3 p-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="general" className="text-base font-medium navbar-link">General Questions</Link></li>
                                        <li className="navbar-item mt-3 p-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="payment" className="text-base font-medium navbar-link">Payments Questions</Link></li>
                                        <li className="navbar-item mt-3 p-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="support" className="text-base font-medium navbar-link">Support Questions</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-8 md:col-span-7">
                                <div id="tech">
                                    <h5 className="text-2xl font-semibold">Buying Product</h5>

                                    <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                        {this.state.sections.map((section, index) => (
                                            <div key={index}

                                                className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                                <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                    <button type="button" onClick={() => this.handleSectionClick(index)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-left ${openSectionIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                        <span>{section.title}</span>
                                                        <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                {openSectionIndex === index && (
                                                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400"> {section.content}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                        ))}
                                    </div>
                                </div>

                                <div id="general" className="mt-8">
                                    <h5 className="text-2xl font-semibold">General Questions</h5>

                                    <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                        {this.state.sections.map((section, index) => (
                                            <div key={index}

                                                className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                                <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                    <button type="button" onClick={() => this.handleGeneralSectionClick(index)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-left ${generalSectionIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                        <span>{section.title}</span>
                                                        <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                {generalSectionIndex === index && (
                                                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400"> {section.content}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                        ))}
                                    </div>
                                </div>

                                <div id="payment" className="mt-8">
                                    <h5 className="text-2xl font-semibold">Payments Questions</h5>

                                    <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                        {this.state.sections.map((section, index) => (
                                            <div key={index}

                                                className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                                <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                    <button type="button" onClick={() => this.handlePaymentSectionClick(index)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-left ${paymentSectionIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                        <span>{section.title}</span>
                                                        <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                {paymentSectionIndex === index && (
                                                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400"> {section.content}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                        ))}
                                    </div>
                                </div>

                                <div id="support" className="mt-8">
                                    <h5 className="text-2xl font-semibold">Support Questions</h5>

                                    <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                        {this.state.sections.map((section, index) => (
                                            <div key={index}

                                                className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                                <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                    <button type="button" onClick={() => this.handleSupportSectionClick(index)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-left ${supportSectionIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                        <span>{section.title}</span>
                                                        <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                {supportSectionIndex === index && (
                                                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400"> {section.content}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container lg:mt-24 mt-16">
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div className="mt-6">
                                <Link2 to="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</Link2>
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

export default Faq;
