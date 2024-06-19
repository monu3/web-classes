

let user ={
    personalDetails:{
        userName:"arjun123",
        fullName:"arjun123",
        address:{
            city:"Kathmandu",
            place:"Kapan",
            zipCode:"77002"
        }
    },
    isMarried:false,
    gender :"Male",
    age:23,
    email :"example@gmail.com",
    getFavcolor :(day)=>{
        return day?"red":"Black"
    }

}


console.log(user.personalDetails.address.zipCode);

user.personalDetails.fullName="Arjun kumar Rai";
console.log(user);

console.log(user.getFavcolor(true));


//prints array of keys
let keys = Object.keys(user)
console.log(keys);

//prints array of values
let values = Object.values(user)
console.log(values);

//prints array of both keys and values
let keyValues = Object.entries(user)
console.log(keyValues[0],keyValues[1]);
