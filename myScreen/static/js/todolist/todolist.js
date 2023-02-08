function showTodo() {
    document.getElementById('todo_wrap').classList.toggle('d-none')
}

function save_comment(e) {
    let todos = $('#floatingInput').val()

    let code = e.code;
    let local_list;
    if (localStorage.getItem('todo').length > 0) {
        local_list = JSON.parse(localStorage.getItem('todo'))
    } else {
        local_list = []
    }
    console.log(local_list)

    localStorage.setItem("todo", JSON.stringify({'todolist': todos}))
    let todolist_data = JSON.parse(localStorage.getItem('todo'))
    local_list.push(todolist_data)
    localStorage.setItem("todo", JSON.stringify(local_list))

    for (let i = 0; i < local_list.length; i++) {


        if (code == 'Enter') {
            let temp_html = `<li class="todo-item" >
                            <div class="todo-goal">
                                <input class="" type="checkbox" />
                                <input class="unset_style todo-goal-text" type="text" placeholder="${todolist}" readonly/>
                                <button class="unset_style todo-goal-modify">✍</button>
                                <button class="unset_style todo-goal-remove">🗑</button>
                            </div>
                        </li>`

            $('#todo-itemList').append(temp_html)
        } else {
            return;
        }
    }
}



window.onload = function () {
    // 이벤트 객체를 얻기 위해 addEventListener를 사용하는 것이 통상적입니다. 일부로 event인자를 넘겨주지 않아도 이벤트 정보를 인자로 넘겨줍니다.
    document.getElementById('floatingInput').addEventListener("keypress", save_comment)
}