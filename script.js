
const xmark = document.querySelector('.xmark')
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector('.sidebar')
const sidebar_header = document.querySelector('.sidebar-header');

// const blog = document.querySelectorAll('.blog')






xmark.addEventListener("click" , ()=>{
    sidebar.classList.add('sidebar-hidden')
    sidebar_header.classList.add('sidebar-header-hidden')
    setTimeout(()=>{
        sidebar.classList.add('sidebar-none')
    },500)
})

hamburger.addEventListener("click", ()=>{
    sidebar.classList.remove('sidebar-hidden')
    sidebar_header.classList.remove('sidebar-header-hidden')
    sidebar.classList.remove('sidebar-none')
})


const elements = document.querySelectorAll('h1:not(.exclude),h4,.feature-img-div,button,.blog,p,.course-content');



const allAnim = () => {
    const triggerBottom = (window.innerHeight);
    elements.forEach((element)=>{
        const boxtop = element.getBoundingClientRect().top;
        const boxbottom = element.getBoundingClientRect().bottom
        if (boxtop < triggerBottom && boxbottom > 200) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.scale = "1"
        }
    })
        
};
window.addEventListener('scroll', allAnim);






