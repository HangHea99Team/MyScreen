    const keyword = document.querySelector('.keyword')
    const engine = document.querySelector('.search-select')
    const myForm = document.getElementById('myForm')
    document.getElementById('myForm').addEventListener('submit', hey)
    
    function showSearch(){
        document.getElementById('myForm').classList.toggle('d-none')
    }

function hey(){
    let searching = keyword.value
    let engines = engine.value
    document.getElementById('myForm').classList.toggle('d-none')

    if (engines === 'google'){
        window.location.href = 'https://www.google.co.kr/search?q=' + searching;
    } else if (engines === 'naver'){
         window.location.href = 'https://search.naver.com/search.naver?query=' + searching;
    }
}