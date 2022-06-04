// const navLinks = Array.from(document.querySelectorAll('nav a'));

// navLinks.forEach((link)=>{
//     link.addEventListener('click',()=>{
//         navLinks.forEach((link)=>{ 
//             if(link.classList.contains('.active'))
//     })
//     })
// })
    document.querySelector(".github").addEventListener('click', () => {
        window.open('https://github.com/dante2302', '_blank');
    })
    
    document.querySelector('.linkedin').addEventListener('click', ()=>{
        window.open('https://www.linkedin.com/in/darin-penchev-1aa74b237/', '_blank');
    })

    document.querySelectorAll('.card').forEach((card)=>{
      card.addEventListener('click',()=>{
            card.classList.toggle('card-active');
            if(card.classList.contains('card-active')){
                card.style.transform="rotateY(180deg)";
            }
            else card.style.transform="rotateY(360deg)";
        })
    })