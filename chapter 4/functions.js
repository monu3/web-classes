

//14 th june (Functions)
//Mainly Predefined and user defined Function
//User defined : Anonymous and named function 


function getStd(size){

    let container = [];
    for(let i= 0;i<size;i++){
        container.push(i);
    }
    return container;
    //return Array.from({length.size})
}

let student_lenght = getStd(20);
console.log(student_lenght);



//Anonnymous Function,Has no name but is associated to a variable 

// const _getStd = function(size){
//     return Array.from({length:size})
// }


const _getStd = (size)=>{
    return Array.from({length:size})
}

let _std = _getStd(30);
console.log(_std);

// Callback Function ::: if a function itself passes into the argument or parameters then it is called CAllback function 

const parseStudent = (name)=>{  // this is callback function
    console.log(name);
}

function getStdDetailsById(id,cb){   ///This is a higer order function
    cb("Monu siddiki");
}

let studentDetails = getStdDetailsById(1,parseStudent);