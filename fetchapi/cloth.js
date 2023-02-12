async function CreatCloth(data = {}) {
    let des = document.getElementById("description").value;

    let clothtype = document.getElementById("clothtype").value;

    let price = document.getElementById("price").value;

    let token = localStorage.getItem('token');
    const url = 'http://localhost:3000/clothes'
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
        body: JSON.stringify({"description":des,"price":price,"username":clothtype}) // body data type must match "Content-Type" header
    }).then(res => res.json()
    ).then(data => {
        console.log(data)
        return data;

    });
}


//down load pic for cloth

async function Doanload() {
    let objectUrl = "";
    let token = localStorage.getItem('token');

    const url = 'http://localhost:3000/clothes/profile/download'
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok){
        const blob = await response.blob();
        

        objectUrl = URL.createObjectURL(blob);

        console.log(blob);

        console.log(objectUrl);
    }

}



// upload cloth pic


document.getElementById("formid").addEventListener("submit",function(e){

    //get token 
    let token = localStorage.getItem('token');
    
        e.preventDefault();
        const clothpic = document.getElementById("profile").files[0];
    
    
        const formdata = new FormData();
    
        formdata.append("file",clothpic);
         
        const url = "http://localhost:3000/clothes/profile/upload";
        
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`,
                
            },
            body:formdata,
        }).then(res => res.json()
        ).then(data => console.log(data)).catch(err => console.log(err));
    });