import React, { useEffect, useState } from "react";
import CourseComponent from "./CourseComponent";

export default function CourseList() {
  // Define param and pageNum
  const [courses, setCourses] = useState([]);
  const [param, setParam] = useState({
    search: null,
    rate: null,
    gia: null,
    page: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNum, setPageNum] = useState("1");

  const handlePageChange = (type) => {
    console.log(currentPage);

    if (type === "previous") {
      setCurrentPage((currentPage) => currentPage - 1);
    } else if (type === "next") {
      setCurrentPage((currentPage) => currentPage + 1);
    }
    console.log(currentPage);
  };
  // Define handleSearchChange function
  const handleSearchChange = (e) => {
    setParam({ ...param, search: e.target.value });
  };
  useEffect(() => {
    console.log("hihi");
    callAPI(currentPage);
  }, [currentPage, param]);

  // const fetchCourses = async () => {
  //   try {
  //     const queryString = new URLSearchParams(param).toString();
  //     const apiUrl = `http://localhost:8080/courses`;
  //     const response = await fetch(apiUrl);
  //     console.log(response)
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch courses");
  //     }
  //     const data = await response.json();
  //     setCourses(data.courses);
  //     setPageNum(data.pageNum);
  //   } catch (error) {
  //     console.error("Error fetching courses:", error);
  //   }
  // };
  const callAPI = async (currentPage) => {
    try {
      const res = await fetch(
        `http://localhost:8080/courses?page=${currentPage}&limit=8`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch courses");
      }
      const body = await res.json();
      console.log(body);
      if (!Array.isArray(body.data)) {
        throw new Error("Invalid response format: courses is not an array");
      }
      setCourses(body.data);
      setPageNum(body.paging.total);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Define setDefaultImage function
  const setDefaultImage = (element) => {
    element.src =
      "https://th.bing.com/th/id/OIP.xaADddZHWRoU3TbjEVGssQHaFj?rs=1&pid=ImgDetMain";
  };

  // useEffect to fetch pageNum
  useEffect(() => {
    // Fetch pageNum from your API or set it manually
    setPageNum("8"); // Example value
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <section className="py-6">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
              <div className="row d-md-flex justify-content-between align-items-center">
                <div className="col-md-6 col-lg-8 col-xl-7 d-flex">
                  <h4 className="mb-3 mb-md-0 mt-2">Khóa Học</h4>
                  <div className="input-group ms-5" style={{ width: "400px" }}>
                    <span
                      className="input-group-text"
                      id="basic-addon1"
                      style={{
                        backgroundColor: "white",
                        color: "rgb(107, 114, 128)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="btn__search form-control py-2 fs-5 border"
                      placeholder="Tìm kiếm"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      onChange={handleSearchChange}
                      value={param.search == null ? "" : param.search}
                    />
                  </div>
                </div>
                <div className="d-inline-flex col-md-6 col-lg-4 col-xl-5">
                  <div className="me-2">
                    <div className="nav btn-group flex-nowrap" role="tablist">
                      <button
                        id="gridButton"
                        className="btn btn-outline-secondary active"
                        data-bs-toggle="tab"
                        data-bs-target="#tabPaneGrid"
                        role="tab"
                        aria-controls="tabPaneGrid"
                        aria-selected="true"
                      >
                        <span className="fe fe-grid"></span>
                      </button>
                      <button
                        id="listButton"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="tab"
                        data-bs-target="#tabPaneList"
                        role="tab"
                        aria-controls="tabPaneList"
                        aria-selected="false"
                      >
                        <span className="fe fe-list"></span>
                      </button>
                    </div>
                  </div>
                  <div className="ms-2 d-flex adminkhoahoc-filter--rate">
                    <p className="my-auto">Đánh giá:</p>
                    <div className="dropdown dropdown-rate my-auto ms-2">
                      <button
                        className="btn bg-color-white dropdown-toggle border border-secondary-subtle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ width: "160px" }}
                      >
                        {param.rate === "thapdencao" && (
                          <span className="me-3">Thấp đến cao</span>
                        )}
                        {param.rate === "caodenthap" && (
                          <span className="me-3">Cao đến thấp</span>
                        )}
                        {param.rate !== "thapdencao" &&
                          param.rate !== "caodenthap" && (
                            <span className="me-3">Mặc định</span>
                          )}
                      </button>
                      <ul className="dropdown-menu bg-color-grey">
                        <li>
                          <a className="dropdown-item" href="?rate=caodenthap">
                            Cao đến thấp
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="?rate=thapdencao">
                            Thấp đến cao
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="?">
                            Mặc định
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ms-4 d-flex adminkhoahoc-filter--gia">
                    <p className="my-auto">Giá:</p>
                    <div className="dropdown dropdown-gia my-auto ms-2">
                      <button
                        className="btn bg-color-white dropdown-toggle border border-secondary-subtle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ width: "160px" }}
                      >
                        {param.gia === "thapdencao" && (
                          <span className="me-3">Thấp đến cao</span>
                        )}
                        {param.gia === "caodenthap" && (
                          <span className="me-3">Cao đến thấp</span>
                        )}
                        {param.gia !== "thapdencao" &&
                          param.gia !== "caodenthap" && (
                            <span className="me-3">Mặc định</span>
                          )}
                      </button>
                      <ul
                        className="dropdown-menu bg-color-grey"
                        aria-labelledby="navbarLanding"
                      >
                        <li>
                          <a
                            className="dropdown-item justify-content-between"
                            href="?gia=caodenthap"
                          >
                            Cao đến thấp
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item justify-content-between"
                            href="?gia=thapdencao"
                          >
                            Thấp đến cao
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item justify-content-between"
                            href="?"
                          >
                            Mặc định
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-9 col-md-8 col-12">
              <div className="tab-content">
                {/* Grid View */}
                <div
                  className="tab-pane fade show active pb-4"
                  id="tabPaneGrid"
                  role="tabpanel"
                  aria-labelledby="tabPaneGrid"
                >
                  <div className="row">
                    {courses.map((i) => (
                      <div
                        className="col-lg-3 col-md-6 col-12"
                        key={i.courseId}
                      >
                        <div className="card mb-4 card-hover">
                          <a href={`course-detail?courseId=${i.courseId}`}>
                            <img
                              onError={(e) => setDefaultImage(e.target)}
                              style={{ height: "200px", objectFit: "cover" }}
                              src={i.image.url}
                              alt="course"
                              className="card-img-top img-fluid"
                            />
                          </a>
                          <div className="card-body">
                            <h4 className="mb-2 text-truncate-line-2">
                              <a
                                href={`course-detail?courseId=${i.courseId}`}
                                className="text-inherit"
                              >
                                {i.courseName}
                              </a>
                            </h4>
                            <div className="d-flex align-items-center gap-3">
                              <p className="card-text color-blue--primary fw-bold fs-5">
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(i.cost)}
                              </p>
                            </div>
                            <div className="lh-1">
                              <span className="align-text-top" />
                              <span className="fs-6">{/* Star Ratings */}</span>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="row align-items-center g-0">
                              <div className="col-auto"></div>
                              <div className="col ms-2"></div>
                              <div className="col-auto">
                                <button
                                  style={{ border: "none", background: "none" }}
                                  type="button"
                                >
                                  <i className="fe fe-shopping-cart fs-4"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* List View */}
                <div
                  className="tab-pane fade pb-4"
                  id="tabPaneList"
                  role="tabpanel"
                  aria-labelledby="tabPaneList"
                >
                  {courses.map((i) => (
                    <div className="card mb-4 card-hover" key={i.id}>
                      <div className="row g-0">
                        {i.image && (
                          <a
                            className="col-12 col-md-12 col-xl-3 col-lg-3 bg-cover img-left-rounded"
                            href={`course-detail?courseId=${i.courseId}`}
                          >
                            <img
                              style={{ height: "200px", objectFit: "cover" }}
                              src={i.image.url}
                              alt="course"
                              className="img-fluid w-100"
                            />
                          </a>
                        )}
                        {!i.image && (
                          <a
                            className="col-12 col-md-12 col-xl-3 col-lg-3 bg-cover img-left-rounded"
                            href={`course-detail?courseId=${i.courseId}`}
                          >
                            <img
                              style={{ height: "200px", objectFit: "cover" }}
                              src="https://th.bing.com/th/id/OIP.xaADddZHWRoU3TbjEVGssQHaFj?rs=1&pid=ImgDetMain"
                              alt="course"
                              className="img-fluid w-100"
                            />
                          </a>
                        )}
                        <div className="col-lg-9 col-md-12 col-12">
                          <div className="card-body">
                            <h3 className="mb-2 text-truncate-line-2">
                              <a
                                href={`course-detail?courseId=${i.courseId}`}
                                className="text-inherit"
                              >
                                {i.courseName}
                              </a>
                            </h3>
                            <div className="list-inline">
                              <div className="d-flex gap-5">
                                {/* Calculate average rating */}
                                {/* Render star rating */}
                                {/* Render average rating */}
                              </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                              <p className="card-text color-blue--primary fw-bold fs-5">
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(i.cost)}
                              </p>
                            </div>
                            <div className="row align-items-center g-0">
                              <div className="col-auto"></div>
                              <div className="col ms-2"></div>
                              {/* <div className="col-auto">
                                {user ? (
                                  <form
                                    onSubmit={(e) => addToCart(e, i.courseId)}
                                  >
                                    <button
                                      type="submit"
                                      style={{
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <i className="fe fe-shopping-cart fs-4"></i>
                                    </button>
                                  </form>
                                ) : (
                                  <button
                                    onClick={showLoginPopup}
                                    style={{
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <i className="fe fe-shopping-cart fs-4"></i>
                                  </button>
                                )}
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Pagination */}
                {courses.length > 0 && (
                  <div className="position-relative w-100 border-top">
                    <div
                      className="d-flex flex-row justify-content-center mx-auto"
                      style={{ width: "500px" }}
                    >
                      <button
                        onClick={() => handlePageChange("previous")}
                        className="btn__page--previous d-flex flex-row justify-content-between mt-4 mx-auto py-2 fs-5 fw-bold  border-0 rounded-3 align-items-center"
                        style={{ width: "220px", padding: "0 30px 0 30px" }}
                        disabled={currentPage === 1}
                      >
                        Previous Page
                      </button>
                      <button
                        onClick={() => handlePageChange("next")}
                        className="btn__page--next d-flex flex-row justify-content-between mt-4 mx-auto py-2 fs-5 fw-bold border-0 rounded-3 align-items-center"
                        style={{ width: "220px", padding: "0 30px 0 30px" }}
                        disabled={currentPage === Math.ceil(pageNum / 8)}
                      >
                        Next Page
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <CourseComponent />
    </React.Fragment>
  );
}
