function save_data() {
    let write = $(".form-control").val()
    $.ajax({
        type: "POST",
        url: "/note",
        data: {
            'note_give':write
        },
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}


function show_data() {
    $('#note_box').empty()
    $.ajax({
        type: "GET",
        url: "/note",
        data: {
        },
        success: function (response) {
            let rows =response['notes']
            for(let i =0;i<rows.length;i++){
                let write =rows[i]['note']
                let num = rows[i]['num']

                    let temp_html = `<div class="write_box">
                                    <a>${write}</a>
                                    <button onclick="del_note(${num})" type="button" class ="delete_button">삭제</button>  
                                 </div>`
                $('#note_box').append(temp_html)
            }
        }
    })
}

function del_note(num){
            $.ajax({
                type: "POST",
                url : "/note/del",
                data: {num_give : num},
                success: function (response) {
                    alert(response["msg"])
                    window.location.reload()
                }
            });
        }

