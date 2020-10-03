 const btnAdd1 = document.querySelector('.add1')
 const btnSubtract1 = document.querySelector('.subtract1')
 const btnSomme1 = document.querySelector('.somme1')
 const font1= document.querySelector('.reaction_font1')

 const btnAdd2 = document.querySelector('.add2')
 const btnSubtract2 = document.querySelector('.subtract2')
 const btnSomme2 = document.querySelector('.somme2')
 const font2= document.querySelector('.reaction_font2')

 const btnAdd3 = document.querySelector('.add3')
 const btnSubtract3 = document.querySelector('.subtract3')
 const btnSomme3 = document.querySelector('.somme3')
 const font3= document.querySelector('.reaction_font3')

 const btnAdd4 = document.querySelector('.add4')
 const btnSubtract4 = document.querySelector('.subtract4')
 const btnSomme4 = document.querySelector('.somme4')
 const font4= document.querySelector('.reaction_font4')

 const btnAdd5 = document.querySelector('.add5')
 const btnSubtract5 = document.querySelector('.subtract5')
 const btnSomme5 = document.querySelector('.somme5')
 const font5= document.querySelector('.reaction_font5')

 btnAdd1.addEventListener('click' , () => {
     btnSomme1.value =parseInt(btnSomme1.value)+1 ;
 })
 btnSubtract1.addEventListener('click' , ()=> {
     if(btnSomme1.value>0){
     btnSomme1.value= parseInt(btnSomme1.value)-1 ;
    }
    else{
        btnSomme1.value=0
    }
 })

 font1.addEventListener('click', ()=>{
     font1.style.color='red'
 })
     
 
 btnAdd2.addEventListener('click' , () => {
    btnSomme2.value =parseInt(btnSomme2.value)+1 ;
})
btnSubtract2.addEventListener('click' , ()=> {
    if(btnSomme2.value>0){
    btnSomme2.value= parseInt(btnSomme2.value)-1 ;
   }
   else{
       btnSomme2.value=0
   }
})

font2.addEventListener('click', ()=>{
    font2.style.color='red'
})
    

btnAdd3.addEventListener('click' , () => {
    btnSomme3.value =parseInt(btnSomme3.value)+1 ;
})
btnSubtract3.addEventListener('click' , ()=> {
    if(btnSomme3.value>0){
    btnSomme3.value= parseInt(btnSomme3.value)-1 ;
   }
   else{
       btnSomme3.value=0
   }
})

font3.addEventListener('click', ()=>{
    font3.style.color='red'
})


btnAdd4.addEventListener('click' , () => {
    btnSomme4.value =parseInt(btnSomme4.value)+1 ;
})
btnSubtract4.addEventListener('click' , ()=> {
    if(btnSomme4.value>0){
    btnSomme4.value= parseInt(btnSomme4.value)-1 ;
   }
   else{
       btnSomme4.value=0
   }
})

font4.addEventListener('click', ()=>{
    font4.style.color='red'
})


btnAdd5.addEventListener('click' , () => {
    btnSomme5.value =parseInt(btnSomme5.value)+1 ;
})
btnSubtract5.addEventListener('click' , ()=> {
    if(btnSomme5.value>0){
    btnSomme5.value= parseInt(btnSomme5.value)-1 ;
   }
   else{
       btnSomme5.value=0
   }
})

font5.addEventListener('click', ()=>{
    font5.style.color='red'
})