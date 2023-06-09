import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

class Switcher extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    changeMode = (mode, event) => {
        switch (mode) {
            case 'mode':
                if (document.documentElement.className.includes("dark")) {
                    document.documentElement.className = 'light'
                } else {
                    document.documentElement.className = 'dark'
                }
                break;
            case 'layout':
                if (event.target?.innerText === "LTR") {
                    document.documentElement.dir = "ltr"
                }
                else {
                    document.documentElement.dir = "rtl"
                }
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <!-- Switcher --> */}
                <div className="fixed top-1/4 -left-2 z-3">
                    <span className="relative inline-block rotate-90">
                        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onClick={(event) => this.changeMode('mode', event)} />
                        <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                            <i className="uil uil-moon text-[20px] text-yellow-500"></i>
                            <i className="uil uil-sun text-[20px] text-yellow-500"></i>
                            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] start-[2px] w-7 h-7"></span>
                        </label>
                    </span>
                </div>

                {/* <!-- Switcher --> */}

                {/* <!-- LTR & RTL Mode Code --> */}
                <div className="fixed top-[40%] -left-3 z-50">
                    <Link to="#" id="switchRtl">
                        <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" onClick={(event) => this.changeMode('layout', event)}>LTR</span>
                        <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden" onClick={(event) => this.changeMode('layout', event)}>RTL</span>
                    </Link>
                </div>

                <a
                    onClick={this.scrollToTop}
                    id="back-to-top" className="hidden back-to-top fixed text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-green-600 text-white justify-center items-center flex"><i className="uil uil-arrow-up"></i></a>
                {/* <!-- LTR & RTL Mode Code --> */}

            </React.Fragment>
        );
    }
}

export default Switcher;
