let rates = document.querySelectorAll('.rate');
let main = document.querySelector('.rateUs')
let check;
let submit = document.querySelector('button')
let result = document.getElementById('result')
let yourRate;
rates.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        event.target.classList.toggle('active');
        check = document.querySelectorAll('.active');
        yourRate=event.target.textContent;
        if (check.length>0){
            submit.classList.add('complete')
        }
        else submit.classList.remove('complete')
        console.log(check.length)
    })
})

submit.addEventListener('click',()=>{
   if(check.length>0){
    main.classList.add('submit')
    result.textContent=`You selected ${yourRate} out of 5`
   }
   else alert('please Rate-Us')
})

