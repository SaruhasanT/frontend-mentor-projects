const containers = document.querySelectorAll('.container')
const minusIcon = document.createElement('img')
minusIcon.className = 'minus-icon'
minusIcon.setAttribute('src','assets/images/icon-minus.svg')
const plusIcon = document.createElement('img')
plusIcon.className = 'plus-icon'
plusIcon.setAttribute('src','assets/images/icon-plus.svg')

containers.forEach(container=>{
    container.addEventListener('click',(e)=>{
        if(e.target.tagName === 'IMG'){
            const para = e.target.parentNode.nextElementSibling
            para.classList.toggle('active')
            console.log(para.classList)
            if(para.style.height != 'auto'){
                e.target.replaceWith(minusIcon.cloneNode(true))
            }
            else{
                e.target.replaceWith(plusIcon.cloneNode(true))
            }
        }
        else if(e.target.tagName === 'H2'){
            const para = e.target.parentNode.nextElementSibling
            if(para.style.height != 'auto'){
                e.target.nextElementSibling.replaceWith(minusIcon.cloneNode(true))
            }
            // else{
            //     e.target.nextElementSibling.replaceWith(plusIcon.cloneNode(true))
            //     cont.style.height = '50px'
            // }
        }
    })
})