function showTodo() {
    document.getElementById('todo_wrap').classList.toggle('d-none')

    let local_data = JSON.parse(localStorage.getItem('todo'))
    console.log(local_data)
    for (let i = 0; i < local_data.length; i++) {
        let index_name = local_data[i]
        let index = index_name['index']
        let temp_html = `<li class="todo-item" >
                            <div class="todo-goal">
                                <input onclick="todo_check(this, ${index})" id = 'todo_checkbox${index}' class = 'todo_checkbox'  type="checkbox"  />
                                <label class="todolabel" id = 'todolabel${index}'  for="todo_checkbox">${local_data[i]['todo']}</label>
                                <button onclick="delete_todo(${index.index}, this)" id = 'todo_delete' class="unset_style todo-goal-remove" >🗑</button>
                            </div>
                        </li>`

        $('#todo-itemList').append(temp_html)
    }
}
function save_comment(e) {
    let todos = e.target.value;

    if (e.key === 'Enter') {
        e.preventDefault();
        $('#todo-itemList').empty()

        // 로컬스토리지 데이터 조회
        let local_data = JSON.parse(localStorage.getItem('todo'))
        // 객체 생성
        let todo_list = {'todo': todos}

        if (Boolean(local_data) && local_data.length > 0) {
            // todo_list.index = local_data.length;

            let indexList = local_data.map(item => item.index)
            todo_list.index = Math.max(...indexList) + 1;


            local_data.push(todo_list)
            localStorage.setItem('todo', JSON.stringify(local_data))
        } else {
            todo_list.index = 0;
            localStorage.setItem('todo', JSON.stringify([todo_list]))
        }

        let todolist = JSON.parse(localStorage.getItem('todo'))
        for (let i = 0; i < todolist.length; i++) {
            let index_name = todolist[i]
            let index = index_name['index']




            let temp_html = `<li class="todo-item" >
                            <div class="todo-goal">
                                <input onclick="todo_check(this, ${index})" id = 'todo_checkbox${index}' class = 'todo_checkbox'  type="checkbox"  />
                                <label class="todolabel" id = 'todolabel${index}'  for="todo_checkbox">${todolist[i]['todo']}</label>
                                <button onclick="delete_todo(${index.index}, this)" id = 'todo_delete' class="unset_style todo-goal-remove" >🗑</button>
                            </div>
                        </li>`

            $('#todo-itemList').append(temp_html)
        }
    } else {
        return;
    }
}

function delete_todo(index, elem){
    elem.parentElement.remove();
    let local_data = JSON.parse(localStorage.getItem('todo')).filter(index_name => index_name.index != index_name);
    local_data.splice(index,1);
    localStorage.setItem('todo', JSON.stringify(local_data))
    console.log(local_data)

}
function todo_check(checkbox,index){
    console.log(index)
    const labelId = '#todolabel'+ index
    const label = document.querySelector(labelId);
    const el = document.getElementById(`todolabel${index}`)
    // console.log('el:',el)


    if (checkbox && label) {
        if (checkbox.checked) {
            el.classList.replace('todolabel','todolabelCheck')
        } else {
            el.classList.replace('todolabelCheck','todolabel')
        }

    }
}


window.onload = function () {
    // 이벤트 객체를 얻기 위해 addEventListener를 사용하는 것이 통상적입니다. 일부로 event인자를 넘겨주지 않아도 이벤트 정보를 인자로 넘겨줍니다.
    document.getElementById('floatingInput').addEventListener("keypress", save_comment);
}