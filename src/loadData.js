
const adminUrl = "http://localhost:8000/getadmin";
const clientsUrl = "http://localhost:8000/getclients";
const ordersUrl = "http://localhost:8000/getorders";

//export function loadClients() {
   // let clients = {};
    //fetch(clientsUrl)
   // .then(response => response.json())
   // .then(data => clients = data)
//}

export function loadData(url) {
    return fetch(url)
    .then(response => response.json());
}

export function loadOrders() {
    return fetch(ordersUrl)
        .then(response => response.json());
}

export function loadClients() {
    return fetch(clientsUrl)
        .then(response => response.json());
}

export function loadAdmin() {
    return fetch(adminUrl)
        .then(response => response.json());
}
