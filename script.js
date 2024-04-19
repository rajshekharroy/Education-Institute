
const xmark = document.querySelector('.xmark')
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector('.sidebar')
const sidebar_header = document.querySelector('.sidebar-header');

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



