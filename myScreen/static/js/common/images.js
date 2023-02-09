let count = -1;
function showImage(){
    count += 1;
    $.ajax({
        type: "GET",
        data: {},
        url: "/images",
        success: function (response){
            let savedImage = response['images']
            // for (let i = 0; i < savedImage.length; i++){
                    // let imageBox = savedImage[i]['image']
                    // let num = savedImage[i]['num']
                let num = savedImage[count]['num']
                console.log(num)
                let imageBox = savedImage[count]['image']
            let temp_html = `<img src="${imageBox}" style="width: 100px; height: auto;" ,alt="">
                <button onclick="deleteImage(${num})">🥲</button>`
        //     // }
            $('#image-boxs').prepend(temp_html)
        }
    })
}
function deleteImage(num){
    console.log(num)
    $.ajax({
        type: "POST",
        url: "/images/delete",
        data: {'num_give':num},
        success: function(response){
            alert(response['msg'])
            window.location.reload()
        }
    })
}

function saveImage(){
    let image = $('#image-url').val()
    $.ajax({
        type: "POST",
        data: {'image_give': image},
        url: "/images",
        success: function (response){
            alert(response['msg'])
            
        }
    })
}
function eraseImage(){
    $('#image-boxs').empty()
    count = -1;
}

// function imgSize(which){
//     var width = eval("document."+which+".width");
//     var height = eval("document."+which+".height");
//     var temp = 0; 
//     var max_width= 600;   // 이미지의 가로 최대 크기    
//     var max_height = 400; // 이미지의 세로 최대 크기
    
//     if ( width > max_width ) {  // 이미지가 600보다 크다면 너비를 600으로 맞우고 비율에 맞춰 세로값을 변경한다.      
//         height = height/(width / max_width);
//         eval("document."+which+".width = max_width");     
//         eval("document."+which+".height = height");
//         width = max_width;     
//     }
 
//     if( height > max_height ) {
//         width = width/(height / max_height);
//         eval(document.getElementById(which).width = width);
//         eval(document.getElementById(which).height = max_height);
//     }
// }
// imgSize("img")

function showImageBox(){
    document.getElementById('imageBox').classList.toggle('d-none')
}