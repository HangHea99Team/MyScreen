function save_comment(e) {
    let todos = $('#floatingInput').val()

    localStorage.setItem('todo', todos)
    let todolist = localStorage.getItem('todo')
    let code = e.code;
    console.log(todolist)
    let temp_html = `<div class="input-group mb-3" >
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="checkbox" >
                        </div>
                        <label for="floatingInput" id="word">${todolist}</label>
                    </div>`

    if (code == 'Enter') {

        $('#check-box').append(temp_html)
    }
}