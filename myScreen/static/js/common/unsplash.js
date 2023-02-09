async function request() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?client_id=IVNZd9oqVKxJ4xNZG-hhNH-Vm5WdRDtJXGIWuf0-ZXo&count=1&query=nature',
            {
                method: 'GET',
            });
        const data = await response.json();
        document.body.style.backgroundImage = `url('${data[0].urls.regular}')`;
    } catch(error) {
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1675777266439-8921962c3a0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')`;
    }
}

request();