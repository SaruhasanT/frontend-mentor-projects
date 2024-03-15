const containers = document.querySelectorAll('.container')
const minusIcon = document.createElement('img')
minusIcon.className = 'minus-icon'
minusIcon.setAttribute('src','assets/images/icon-minus.svg')
const plusIcon = document.createElement('img')
plusIcon.className = 'plus-icon'
plusIcon.setAttribute('src','assets/images/icon-plus.svg')
console.log('hello');
containers.forEach(container=>{
    container.addEventListener('click',(e)=>{
        if(e.target.tagName === 'IMG'){
            const para = e.target.parentNode.nextElementSibling
            para.classList.toggle('active')
            let check = [];
            for (let classname of para.classList){
                check.push(classname)
            }
            if(check.includes('active')){
                e.target.replaceWith(minusIcon.cloneNode(true))
                
            }
            else{
                e.target.replaceWith(plusIcon.cloneNode(true))
            }

        }
        else if(e.target.tagName === 'H2'){
            const para = e.target.parentNode.nextElementSibling
            para.classList.toggle('active')
            let check = [];
            for (let classname of para.classList){
                check.push(classname)
            }
            if(check.includes('active')){
                e.target.nextElementSibling.replaceWith(minusIcon.cloneNode(true))
            }
            else{
                e.target.nextElementSibling.replaceWith(plusIcon.cloneNode(true))
            }
        }

    })
})
