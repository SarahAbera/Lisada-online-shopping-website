async function orderCloth(data = {}) {


    let cloth_id = document.getElementById("cloth_id").value;

    let user_id = document.getElementById("user_id").value;

    let token = localStorage.getItem('token');
    const url = 'http://localhost:3000/orders'
    return await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ "user_id": user_id, "cloth_id": cloth_id, }) // body data type must match "Content-Type" header
    }).then(res => res.json()
    ).then(data => {
        console.log(data)
        return data;

    });
}