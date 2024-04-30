import React, { useEffect } from "react";

const CourseComponent = () => {
  useEffect(() => {
    document.querySelectorAll(".stars").forEach((starContainer) => {
      const rating = parseInt(starContainer.getAttribute("data-rating"));
      starContainer.innerHTML = getStarRating(rating);
    });
  }, []);

  const getStarRating = (rating) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += "⭐";
      } else {
        stars += "★";
      }
    }
    return stars;
  };

  const showLoginPopup = () => {
    // Add your logic to show a login popup or redirect to the login page
    showToast("Please log in to add to cart!");
  };

  const showToast = (message) => {
    // Tạo một toast message
    const toast = document.createElement("div");
    toast.classList.add(
      "show",
      "toast",
      "position-fixed",
      "top-0",
      "end-0",
      "end-0"
    );
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");
    toast.setAttribute("style", "border-left:4px solid red; z-index:3");
    // Tạo nội dung toast
    const toastBody = document.createElement("div");
    toastBody.classList.add("toast-body");
    toastBody.innerText = message;
    // Thêm nội dung vào toast và toast vào trang
    toast.appendChild(toastBody);
    document.body.appendChild(toast);
    // Hiển thị toast
    const bootstrapToast = new window.bootstrap.Toast(toast);
    bootstrapToast.show();
    // Ẩn toast sau 5 giây
    setTimeout(function () {
      bootstrapToast.hide();
    }, 5000);
    // Thêm event listener để ẩn toast khi người dùng click vào nó
    toast.addEventListener("click", function () {
      bootstrapToast.hide();
    });
  };
  function setAriaSelectedAttributes(selectedButtonId, unselectedButtonId) {
    document
      .getElementById(selectedButtonId)
      .setAttribute("aria-selected", "true");
    document
      .getElementById(unselectedButtonId)
      .setAttribute("aria-selected", "false");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.getElementById("gridButton");
    const listButton = document.getElementById("listButton");
    const savedActiveButtonId = localStorage.getItem("activeButtonId");
    // Lắng nghe sự kiện khi người dùng chuyển đổi chế độ xem
    if (savedActiveButtonId) {
      document.getElementById(savedActiveButtonId).classList.add("active");
    } else {
      // Nếu không có trạng thái lưu trữ, thiết lập mặc định là 'gridButton' active
      gridButton.classList.add("active");
    }
    gridButton.addEventListener("click", () => {
      localStorage.setItem("viewMode", "grid");
      //setAriaSelectedAttributes('gridButton', 'listButton');
      saveActiveButton("gridButton");
    });

    listButton.addEventListener("click", () => {
      localStorage.setItem("viewMode", "list");
      //setAriaSelectedAttributes('listButton', 'gridButton');
      saveActiveButton("listButton");
    });

    // Khôi phục trạng thái khi trang được tải
    const savedViewMode = localStorage.getItem("viewMode");
    if (savedViewMode === "grid") {
      // Áp dụng chế độ xem lưới
      document.getElementById("tabPaneGrid").classList.add("show", "active");
      document.getElementById("tabPaneList").classList.remove("show", "active");
      //setAriaSelectedAttributes('gridButton', 'gridButton');
    } else if (savedViewMode === "list") {
      // Áp dụng chế độ xem danh sách
      document.getElementById("tabPaneList").classList.add("show", "active");
      document.getElementById("tabPaneGrid").classList.remove("show", "active");
      //setAriaSelectedAttributes('listButton', 'gridButton');
    }
    function setAriaSelectedAttributes(selectedButtonId, unselectedButtonId) {
      document
        .getElementById(selectedButtonId)
        .setAttribute("aria-selected", "true");
      document
        .getElementById(unselectedButtonId)
        .setAttribute("aria-selected", "false");
    }
    function saveActiveButton(buttonId) {
      // Xóa lớp 'active' khỏi tất cả các nút
      gridButton.classList.remove("active");
      listButton.classList.remove("active");
      // Thêm lớp 'active' cho nút được bấm
      document.getElementById(buttonId).classList.add("active");
      // Lưu ID của nút active vào Local Storage
      localStorage.setItem("activeButtonId", buttonId);
    }
  });

  return null; // This component doesn't render anything visible
};

export default CourseComponent;
