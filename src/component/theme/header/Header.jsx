import React from "react";
export default function Header() {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-expand-lg shadow-lg header-fixed">
          <div className="container px-0">
            <a className="navbar-brand" href="/Ielts-listening2/user/home"></a>
            <div className="d-flex align-items-center order-lg-3 gap-3">
              <div className="d-flex align-items-center">
                <div className="dropdown me-2">
                  <button
                    className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    aria-label="Toggle theme (auto)"
                  >
                    <i className="bi theme-icon-active"></i>{" "}
                    <span className="visually-hidden bs-theme-text">
                      Toggle theme
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end shadow"
                    aria-labelledby="bs-theme-text"
                  >
                    <li>
                      <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="light"
                        aria-pressed="false"
                      >
                        <i className="bi theme-icon bi-sun-fill"></i>{" "}
                        <span className="ms-2">Light</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="dark"
                        aria-pressed="false"
                      >
                        <i className="bi theme-icon bi-moon-stars-fill"></i>{" "}
                        <span className="ms-2">Dark</span>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="d-none d-md-block me-2">
                  <a
                    href="<c:url value='/authentication-login' />"
                    className="btn btn-primary"
                  >
                    Đăng nhập
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar mt-0"></span>{" "}
                  <span className="icon-bar middle-bar"></span>{" "}
                  <span className="icon-bar bottom-bar"></span>
                </button>
              </div>
            </div>

            <div className="collapse navbar-collapse" id="navbar-default">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link " href="/Ielts-listening2/user/home">
                    Trang chủ
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link " href="course">
                    Khóa học
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarLanding"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Luyện đề
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarLanding">
                    <li>
                      <h4 className="dropdown-header">Luyện đề</h4>
                    </li>

                    <li>
                      <a
                        href="luyen-de-home"
                        className="dropdown-item justify-content-between"
                      >
                        Tất cả bộ đề
                      </a>
                    </li>
                    <li>
                      <a
                        href="luyen-de-home?tab=2"
                        className="dropdown-item justify-content-between"
                      >
                        Bộ đề mới nhất
                      </a>
                    </li>
                    <li>
                      <a href="luyen-de-home?tab=3" className="dropdown-item">
                        Bộ đề HOT
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="blogs-page" id="navbarLanding">
                    Blogs
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="helpcenter">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
