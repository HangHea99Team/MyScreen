function saveLink() {

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
                itemStorage.push(itemObject)
                localStorage.setItem('favoritesLinks', JSON.stringify(itemStorage))
            } else {
                localStorage.setItem('favoritesLinks', JSON.stringify([itemObject]))
            }

            console.log(itemObject)

            let temp_html = `
            <li class="favorites_item">
                <button class="unset_style favorites_item_btn" onclick="goLink(String(${itemObject.link}))">
                    <img class="favorites_linkImg" src="${itemObject.image}"/>
                    <p>${itemObject.title}</p>
                </button>
            </li>
        `

            $('#favorites_list').append(temp_html);
        }
    })
}

function goLink(url) {
    window.open(url)
}