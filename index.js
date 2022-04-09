let output = document.querySelector('.output'),
    btn = document.querySelector('button');

btn.addEventListener('click', showData);

function showData() {
    // console.log('asd');

    // get data
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            // console.log(data.results[0])
            let dat = data.results[0];
            console.log(dat)
            output.innerHTML = `
            <ul>
                <li>Name: ${dat.name.title} ${dat.name.first} ${dat.name.last}</li>
                <li><img src='${dat.picture.large}'></li>
                <li>Phone Number: <span> ${dat.cell}</span></li>
                <li>Age: <span> ${dat.dob.age}</span></li>
                <li>Email: <span> ${dat.email}</span></li>
                <li>Gender: <span> ${dat.gender}</span></li>
                <li>Country: <span> ${dat.location.city}</span></li>
            </ul>
            `
        })

}