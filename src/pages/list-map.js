import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import PaginationTwo from "../component/Pagination-two";

import properties from "../config/grid-data";
import Switcher from "../component/Switcher";
import { Linkedin, Facebook, Twitter, Instagram } from 'react-feather';

class ListMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: properties,
            offset: 0,
            perPage: 10,
            pageCount: 0,
            topnavClass: "bg-white dark:bg-slate-900"
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <Navbar topnavClass={this.state.topnavClass} />

                <section className="relative">
                    <div className="container-fluid">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2">
                            <div>
                                <div className="relative mt-12 md:p-8 py-8 px-3">
                                    <div className="grid grid-cols-1">
                                        <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div>
                                                        <label className="form-label font-medium">Search : <span className="text-red-600">*</span></label>
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <i className="uil uil-search icons"></i>
                                                            <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your keaywords" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="buy-properties" className="form-label font-medium">Select Categories:</label>
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <i className="uil uil-estate icons"></i>
                                                            <select className="form-select z-2" data-trigger name="choices-catagory" id="choices-catagory-buy" aria-label="Default select example">
                                                                <option>Houses</option>
                                                                <option>Apartment</option>
                                                                <option>Offices</option>
                                                                <option>Townhome</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="buy-min-price" className="form-label font-medium">Min Price :</label>
                                                        <div className="filter-search-form relative filter-border mt-2">
                                                            <i className="uil uil-usd-circle icons"></i>
                                                            <select className="form-select" data-trigger name="choices-min-price" id="choices-min-price-buy" aria-label="Default select example">
                                                                <option>Min Price</option>
                                                                <option>500</option>
                                                                <option>1000</option>
                                                                <option>2000</option>
                                                                <option>3000</option>
                                                                <option>4000</option>
                                                                <option>5000</option>
                                                                <option>6000</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="buy-max-price" className="form-label font-medium">Max Price :</label>
                                                        <div className="filter-search-form relative mt-2">
                                                            <i className="uil uil-usd-circle icons"></i>
                                                            <select className="form-select" data-trigger name="choices-max-price" id="choices-max-price-buy" aria-label="Default select example">
                                                                <option>Max Price</option>
                                                                <option>500</option>
                                                                <option>1000</option>
                                                                <option>2000</option>
                                                                <option>3000</option>
                                                                <option>4000</option>
                                                                <option>5000</option>
                                                                <option>6000</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="lg:mt-6">
                                                        <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <PaginationTwo itemsPerPage={6} items={this.state.data} gridClass={`grid grid-cols-1 mt-8 gap-[30px]`} />
                                </div>

                                <footer className="relative bg-neutral-900">
                                    <div className="py-[30px] px-0">
                                        <div className="container text-center px-6">
                                            <div className="grid md:grid-cols-2 items-center gap-6">
                                                <div className="md:text-left text-center">
                                                    <p className="mb-0 text-gray-300">© {(new Date().getFullYear())}{" "} Hously. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" rel="noopener noreferrer" target="_blank" className="text-reset">Shreethemes</a>.</p>
                                                </div>

                                                <ul className="list-none md:text-right text-center">
                                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Facebook className="h-4 w-4" /></Link2></li>
                                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Instagram className="h-4 w-4" /></Link2></li>
                                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Twitter className="h-4 w-4" /></Link2></li>
                                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><Linkedin className="h-4 w-4" /></Link2></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </footer>

                            </div>

                            <div className="relative md:block hidden">
                                <div className="map border-0 fixed w-full leading-[0]">
                                    <iframe title="list-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0 }} className="w-full h-screen" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Switcher />
            </React.Fragment>
        );
    }
}

export default ListMap;
