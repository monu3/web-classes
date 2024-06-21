// try{
//     let students = await fetch("https://github.com/monu3");
// }
// catch(e){
//     console.log(e);
// }



 async function getCountries(){
    let url = "https://restcountries.com/v3.1/all";
    let countries_arr =[];
    try{
    let countries = await fetch(url);
    countries_arr = await countries.json();
    // return countries_arr;
    }
    catch(e){
        alert("Error while fetching ");
        console.log(e);
        return;
    }
    finally{
        console.log('finally here');
        console.log(countries_arr);
        // return countries_arr;
    }
}

getCountries();