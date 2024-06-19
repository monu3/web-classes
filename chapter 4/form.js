window.onload=()=>{
    // let form = document.getElementById('student-form');
    let inputs = document.querySelectorAll('#studentForm input');

    inputs.forEach(input =>{
        input.addEventListener('input',(event) =>{
            console.log(event);
            console.log(event.target.value)
            if(event.target.id === 'age'){
                if(event.target.value<18 || event.target.value>40)
            }
            if(event.target.type==='text'){

            }
        })
    })


    // console.log(inputs);
    // form.addEventListener('subnit',(e)=>{
    //     e.preventDefault();
    //     let fname = document.getElementById('fname').value
    //     let lname = document.getElementById('lname').value
    //     let age = document.getElementById('age').value
    //     let roll = document.getElementById('roll').value
    //     let address = document.getElementById('address').value

    //     let student = {
    //         fname,
    //         lname,
    //         age,
    //         roll,
    //         address
    //     }

    //     console.log(student);
    // })
}
