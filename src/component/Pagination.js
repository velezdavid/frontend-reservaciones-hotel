import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pagination extends Component {
  constructor(props) {
    super(props);

    // Set the initial state with the current page
    this.state = {
      currentPage: 1,
    };

    // Bind the methods to this instance
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(event) {
    const newPage = Number(event.target.value);
    this.setState({ currentPage: newPage });
  }

  render() {
    const { currentPage } = this.state;
    const { itemsPerPage, items } = this.props;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = items.slice(startIndex, endIndex);

    const numPages = Math.ceil(items.length / itemsPerPage);
    const pageButtons = Array.from({ length: numPages }, (_, i) => i + 1).map(
      (pageNum) => (
        <button
          className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
          key={pageNum}
          value={pageNum}
          onClick={this.handlePageClick}
          disabled={currentPage === pageNum}
        >
          {pageNum}
        </button>
      )
    );

    return (
      <>
        <div className={this.props.gridClass}>
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
              key={index}
            >
              <div className="relative">
                <img src={item.image} alt="" />

                <div className="absolute top-4 end-4">
                  <Link
                    to="#"
                    className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                  >
                    <i className="mdi mdi-heart mdi-18px"></i>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="pb-6">
                  <Link
                    to={`/property-detail/${item.id}`}
                    className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                  >
                    {item.name}
                  </Link>
                </div>

                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                  <li className="flex items-center me-4">
                    <i className="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                    <span>{item.square}sqf</span>
                  </li>

                  <li className="flex items-center me-4">
                    <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                    <span>{item.beds} Beds</span>
                  </li>

                  <li className="flex items-center">
                    <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                    <span>{item.baths} Baths</span>
                  </li>
                </ul>

                <ul className="pt-6 flex justify-between items-center list-none">
                  <li>
                    <span className="text-slate-400">Price</span>
                    <p className="text-lg font-medium">${item.price}</p>
                  </li>

                  <li>
                    <span className="text-slate-400">Rating</span>
                    <ul className="text-lg font-medium text-amber-400 list-none">
                      <li className="inline ms-1">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline ms-1">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline ms-1">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline ms-1">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline ms-1">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline ms-1 text-black dark:text-white">
                        {item.rating}(30)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div className="md:col-span-12 text-center">
            <nav>
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <Link
                    to="#"
                    className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i className="uil uil-angle-left text-[20px]"></i>
                  </Link>
                </li>
                <li>{pageButtons}</li>
                <li>
                  <Link
                    to="#"
                    className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i className="uil uil-angle-right text-[20px]"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default Pagination;
