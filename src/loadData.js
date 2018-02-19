
const adminUrl = "http://localhost:8000/getadmin";
const clientsUrl = "http://localhost:8000/getclients";
const ordersUrl = "http://localhost:8000/getorders";

export function loadClients() {
    let clients = {};
    fetch(clientsUrl)
    .then(response => response.json())
    .then(data => clients = data)
}

export function loadOrders() {
    return fetch(ordersUrl).then(reposnse => console.log(reposnse))
}


export function loadAdmin() {
    fetch(adminUrl)
    .then(response => response.json())
    .then(data => data = data)
    .then(data => this.setState({admin: data}));
}
