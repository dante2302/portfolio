const navLinks = Array.from(document.querySelectorAll('nav a'));

navLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        navLinks.forEach((link)=>{ 
            if(link.classList.contains('.active'))
    })
    })
})
