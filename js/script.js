const add=document.querySelectorAll(".add")
const subtract=document.querySelectorAll(".subtract") 
var total = document.querySelector('.total')
var font= document.querySelectorAll('.fa-heart-o ')
const font2=document.querySelectorAll('.fa-close')



Array.from(font2).map((el)=>{
    el.addEventListener('click',()=>{
        el.parentElement.parentElement.remove()
    })
})


Array.from(add).map((el)=>{
    el.addEventListener('click',()=>{
        el.nextElementSibling.value = parseInt(el.nextElementSibling.value) +1 ;
        total.innerHTML= parseInt(total.innerHTML)+ parseInt(el.parentElement.nextElementSibling.innerHTML)+"$"
        
    })})

Array.from(subtract).map((el)=>{
    el.addEventListener('click' ,()=>{
        if( el.previousElementSibling.value > 1){
        el.previousElementSibling.value= parseInt(el.previousElementSibling.value)-1
        total.innerHTML= parseInt(total.innerHTML)- parseInt(el.parentElement.nextElementSibling.innerHTML)+"$"
    }
        
    })

})

Array.from(font).map((el)=>{
    el.addEventListener('click', ()=>
    el.classList.toggle("red")
    )
})
