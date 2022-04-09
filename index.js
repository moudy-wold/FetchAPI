let output = document.querySelector('.output'),
    btn = document.querySelector('button');

btn.addEventListener('click', showData);

function showData() {
    
    // get data
    fetch('https://randomuser.me/api/')
          // convert data to JSON format
        .then(res => res.json())

        .then(data => {
            let dat = data.results;
        //   sort data According to age 
            function compare(a, b) {
                if (a.dob.age < b.dob.age) {
                    return -1;
                }
                if (a.dob.age > b.dob.age) {
                    return 1;
                }
                return 0;
            }
            let arr = dat.sort(compare);
            arr.forEach(item => {
                output.innerHTML += `
            <ul>
                <li>Name: ${item.name.title} ${item.name.first} ${item.name.last}</li>
                <li><img src='${item.picture.large}'></li>
                <li>Phone Number: <span> ${item.cell}</span></li>
                <li>Age: <span> ${item.dob.age}</span></li>
                <li>Email: <span> ${item.email}</span></li>
                <li>Gender: <span> ${item.gender}</span></li>
                <li>Country: <span> ${item.location.city}</span></li>
            </ul>
            `
        })

}
