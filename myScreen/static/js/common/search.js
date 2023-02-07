window.onload = function(){
    const keyword = document.querySelector('.keyword')
    const engine = document.querySelector('.search-select')
    // document.querySelector('.search-btn').addEventListener('click', hey)
    document.getElementById('myForm').addEventListener('submit', hey)
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

