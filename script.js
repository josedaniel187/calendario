window.onload = function(){
    let d = new Date()
    let dia = document.querySelector('.dia')
    let fecha = document.querySelector('.fecha')
    let año = document.querySelector('.año')
    let mes = document.querySelector('.mes')
    
    
    fecha.innerText = d.getDate()
    año.innerText = d.getFullYear()
    
    let lang = navigator.language
    
    mes.innerText = d.toLocaleString(lang,{ month:'long'} )
    dia.innerText =d.toLocaleDateString(lang,{weekday:'long'})
    
    
    
    }