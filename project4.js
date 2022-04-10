const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');


toggle.addEventListener('click', ()=>{

    if(toggle.classList.contains('side')){
        toggle.classList.remove('side');
        toggle.classList.add('cross');
        navigation.classList.add('n-active')

    }else if(toggle.classList.contains('cross')){
        toggle.classList.add('side');
        toggle.classList.remove('cross');
        navigation.classList.remove('n-active')
    }
  
})