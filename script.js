const xmark = document.querySelector(".xmark");
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebar_header = document.querySelector(".sidebar-header");
const course_expand = document.querySelector(".course-expand");
const expand = document.querySelector(".expand");
const sidebar_sublist = document.querySelector(".sidebar-sublist");

// const blog = document.querySelectorAll('.blog')

course_expand.addEventListener("click", () => {
  expand.classList.toggle("fa-plus");
  expand.classList.toggle("fa-minus");
  sidebar_sublist.classList.toggle("hide");
});

xmark.addEventListener("click", () => {
  sidebar.classList.add("sidebar-hidden");
  sidebar_header.classList.add("sidebar-header-hidden");
});

hamburger.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-hidden");
  sidebar_header.classList.remove("sidebar-header-hidden");
});

const elements = document.querySelectorAll(
  // "h1:not(.exclude),h4,.feature-img-div,button,.blog,p,.course-content"
  ".course,.login,.whatsapp,#first,.course1,.course2,.course3,.cca,.com,.dom,#testimonial-ad,.feature-img-div,.blog,.course-content,button,h1,h2,h3,h4,p"
);

const allAnim = () => {
  elements.forEach((element) => {
    const boxtop = element.getBoundingClientRect().top;
    const boxbottom = element.getBoundingClientRect().bottom;
    if (boxtop < window.innerHeight && boxbottom > 200) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
      element.style.scale = "1";
    }
  });
};
window.addEventListener("load", allAnim);
window.addEventListener("scroll", allAnim);
