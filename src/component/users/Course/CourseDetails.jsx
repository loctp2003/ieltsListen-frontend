import React from "react";

function CourseDetails({ course }) {
  // Calculate average star rating
  let totalStars = 0;
  let people = 0;
//   course.lessons.forEach((lesson) => {
//     lesson.enrrolLesson.forEach((enrrol_lesson) => {
//       if (enrrol_lesson.numberOfStar > 0) {
//         totalStars += enrrol_lesson.numberOfStar;
//         people++;
//       }
//     });
//   });
  const star = people > 0 ? totalStars / people : 0;
  const starInteger = Math.floor(star);

  return (
    <section className="pt-lg-8 pb-8 bg-primary">
      <div className="container pb-lg-8">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div>
              <h1 className="text-white display-4 fw-semibold">
                {course.courseName}
              </h1>
              <p className="text-white mb-6 lead">{course.description}</p>
              <div className="d-flex align-items-center">
                <form action="addToCart" method="post">
                  <input
                    type="hidden"
                    name="courseId"
                    value={course.courseId}
                  />
                  <button
                    className="bookmark text-white"
                    type="submit"
                    style={{ border: "none", background: "none" }}
                  >
                    <i className="ti ti-shopping-cart fs-4 me-2"></i> Giỏ hàng
                  </button>
                </form>
                <span className="text-white ms-3">
                  <i className="fe fe-user"></i> {people} người đăng ký
                </span>
                <div>
                  <span className="fs-6 ms-4 align-text-top">
                    {[...Array(starInteger)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        ></path>
                      </svg>
                    ))}
                    {[...Array(5 - starInteger)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="bi bi-star-fill text-light"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        ></path>
                      </svg>
                    ))}
                  </span>
                  <span className="text-white">({people})</span>
                </div>
                {people === 0 && (
                  <span className="ms-4 text-white">Chưa có đánh giá</span>
                )}
                <span className="ms-4 text-white d-none d-md-block">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="8" width="2" height="6" rx="1" fill="#DBD8E9"></rect>
                    <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                    <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                  </svg>{" "}
                  <span className="align-middle">Cơ bản</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
