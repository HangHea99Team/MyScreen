function saveLink() {
    // 링크 추가
    // 입력 url값 가져오기.
    let url = $('#favorites_addUrl').val();

    if (!url) {
        alert("url을 입력해주세요!");
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/favorites',
        data: {url_give: url},
        success: function (response) {
            let item = response['item']

            // 로컬 스토리지 데이터 조회
            let itemStorage = JSON.parse(localStorage.getItem('favoritesLinks'))

            // 크롤링한 정보로 객체 생성
            let itemObject = {title: item['title'], image: item['image'], desc: item['desc'], link: item['link']}

            // 로컬 스토리지 저장
            if (Boolean(itemStorage) && itemStorage.length > 0) {
                itemObject.index = itemStorage.length;
                itemStorage.push(itemObject)
                localStorage.setItem('favoritesLinks', JSON.stringify(itemStorage))
            } else {
                itemObject.index = 0;
                localStorage.setItem('favoritesLinks', JSON.stringify([itemObject]))
            }

            let temp_html = `
            <li class="favorites_item">
                <button class="unset_style favorites_item_btn" onclick='goLink("${itemObject.link}")'>
                    <img class="favorites_linkImg" src="${itemObject.image}"/>
                    <p>${itemObject.title}</p>
                </button>
                <button class="unset_style favorites_remove_btn" onclick="removeLink(${itemObject.index}, this)">
                    ×
                </button>
            </li>`

            $('#favorites_list').append(temp_html);
            $('#favorites_addUrl').val(null);
        }
    })
}

function goLink(url) {
    window.open(String(url))
}

function drawLinks(){
    let itemStorage = JSON.parse(localStorage.getItem('favoritesLinks'))

    if (Boolean(itemStorage) && itemStorage.length > 0) {
        for(let i = 0 ; i < itemStorage.length ; i++){
            let item = itemStorage[i];

            let temp_html = `
            <li class="favorites_item">
                <button class="unset_style favorites_item_btn" onclick='goLink("${item.link}")'>
                    <img class="favorites_linkImg" src="${item.image}"/>
                    <p>${item.title}</p>
                </button>
                <button class="unset_style favorites_remove_btn" onclick="removeLink(${item.index}, this)">
                    ×
                </button>
            </li>`

            $('#favorites_list').append(temp_html);
        }
    } else {
        return;
    }
}

function showFavoritesLinks(){
    document.getElementById('favorites_list_wrap').classList.toggle('d-none')
}

function removeLink(index, elem){
    elem.parentElement.remove();
    let itemStorage = JSON.parse(localStorage.getItem('favoritesLinks')).filter(item => item.index != index);
    localStorage.setItem('favoritesLinks',JSON.stringify(itemStorage))

    if(JSON.parse(localStorage.getItem('favoritesLinks')).length == 0){
        localStorage.removeItem('favoritesLinks');
    }

    $('#favorites_list').empty();
    drawLinks();
}

window.onload = function(){
    drawLinks();
}