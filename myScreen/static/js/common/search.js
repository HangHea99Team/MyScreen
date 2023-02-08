window.onload = function(){
    const keywod = document.querySelector('.keyword')
    const engine = document.querySelector('.search-select')
    const myForm = document.getElementById('myForm')
    document.getElementById('myForm').addEventListener('submit', hey)
    
    const searchToggle = document.querySelector('.search_toggle')
    searchToggle.classList.toggle('visible')



    // searchToggle.addEventListener('click', function(){
    //     searchToggle.classList.toggle('flipped')
    // })
    // myForm.addEventListener('click', function(){
    //     myForm.classList.add('active')
    // })
}
function hey(){
    let searching = keyword.value
    let engines = engine.value
    console.log(engines)
    // window.location.href = 'https://www.google.co.kr/search?q=' + searching;
    if (engines === 'google'){
        window.location.href = 'https://www.google.co.kr/search?q=' + searching;
    } else if (engines === 'naver'){
         window.location.href = 'https://search.naver.com/search.naver?query=' + searching;
    }
}

