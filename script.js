const xmark_sidebar = document.querySelector(".xmark,.sidebar");
const hamburger = document.querySelectorAll(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebar_header = document.querySelector(".sidebar-header");
const course_expand = document.querySelector(".course-expand");
const expand = document.querySelector(".expand");
const sidebar_sublist = document.querySelector(".sidebar-sublist");
const header = document.querySelector('.header');
// const down_arrow = document.querySelector('.down-arrow');

course_expand.addEventListener("click", () => {
  expand.classList.toggle("fa-plus");
  expand.classList.toggle("fa-minus");
  sidebar_sublist.classList.toggle("hide");
});

xmark_sidebar.addEventListener("click", () => {
  sidebar.classList.add("sidebar-hidden");
  sidebar_header.classList.add("sidebar-header-hidden");
});
hamburger.forEach((ham)=>{
  ham.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-hidden");
    sidebar_header.classList.remove("sidebar-header-hidden");
  });
})


const elements = document.querySelectorAll(
  ".course,.login,.whatsapp,#first,#second,.course-container,.cca,.com,.dom,#testimonial-ad,.feature-img-div,.blog,.course-content,button,h1,h2,h3,h4,p"
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


window.addEventListener('scroll', function() {
  let scrollToTopButton = document.querySelector('.gototop-section');
  if (window.scrollY > 0) {
    scrollToTopButton.style.visibility = 'visible';
    scrollToTopButton.style.transform = 'translateY(0)'
    scrollToTopButton.style.opacity = '1';
  } else {
    scrollToTopButton.style.transform = 'translateY(100px)'
    scrollToTopButton.style.visibility = 'hidden';
    scrollToTopButton.style.opacity = '0';
  }
});

// down_arrow.addEventListener("click", () => {
//   window.scrollTo({
//       top: document.documentElement.clientHeight,
//       behavior: "smooth"
//   });
// });

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progress = (scrollTop / scrollHeight) * 135;
  document.getElementById("svg-path").style.strokeDashoffset =
    135 - progress;

    document.querySelector('.first-circle').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

});


window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.transform = "translateY(0)";
    }else{
      header.style.transform = "translateY(-100px)";
    }
});


