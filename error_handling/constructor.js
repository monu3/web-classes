class Student{
    constructor(fName,lName,age,address){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.address = address;
    }
}

let student1 = new Student("monu","siddiki",21,"ktm");
let student2 = new Student("ram","rai",21,"KTM");

console.log(student1,student2);