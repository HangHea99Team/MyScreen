
function showTodo() {
    document.getElementById('todo_wrap').classList.toggle('d-none')
}

function save_comment(e) {
    let todos = e.target.value;
    let code = e.code;


    if (code == 'Enter') {
        $('#todo-itemList').empty()

        // 로컬스토리지 데이터 조회
        let local_data = JSON.parse(localStorage.getItem('todo'))
        // 객체 생성
        let todo_list = {'todo': todos}

        if (Boolean(local_data) && local_data.length > 0) {
            todo_list.index = local_data.length;
            local_data.push(todo_list)
            localStorage.setItem('todo', JSON.stringify(local_data))
        } else {
            todo_list.index = 0;
            localStorage.setItem('todo', JSON.stringify([todo_list]))
        }

        let todolist = JSON.parse(localStorage.getItem('todo'))
        for (let i = 0; i < todolist.length; i++) {
            let temp_html = `<li class="todo-item" >
                            <div class="todo-goal">
                                <input id = 'todo_checkbox' class="" type="checkbox" />
                                <input class="unset_style todo-goal-text" type="text" placeholder="${todolist[i]['todo']}" readonly/>
                                <button class="unset_style todo-goal-modify">✍</button>
                                <button class="unset_style todo-goal-remove">🗑</button>
                            </div>
                        </li>`
            $('#todo-itemList').append(temp_html)
        }
    } else {
        return;
    }
}





window.onload = function () {
    // 이벤트 객체를 얻기 위해 addEventListener를 사용하는 것이 통상적입니다. 일부로 event인자를 넘겨주지 않아도 이벤트 정보를 인자로 넘겨줍니다.
    document.getElementById('floatingInput').addEventListener("keypress", save_comment);
}