async function Userregister(data = {}) {
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let username = document.getElementById("username").value;


    const url = 'http://localhost:3000/auth/register'
    return await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'

        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ "email": email, "password": password, "username": username }) // body data type must match "Content-Type" header
    }).then(res => res.json()
    ).then(data => {
        console.log(data)
        return data;

    });
}

async function LoginUser() {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    const url = 'http://localhost:3000/auth/login'
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'

        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ "email": email, "password": password }) // body data type must match "Content-Type" header
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data['token']);

        localStorage.setItem("token", data['token'])
        console.log(localStorage);
    })

    if (response.ok){
        return response['token'];
    }

}