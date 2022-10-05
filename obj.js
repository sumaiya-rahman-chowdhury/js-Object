const person = {
	firstName:"John" , 
	lastName:"Smith" ,
	age:50 , eyeColor:"blue"
};
document.getElementById("p01").innerHTML = 
person.firstName + " is " + person.age + " old";
const person2 = {
	firstName2:"John",
	lastName2:"Doe",
	age2:" ",
	set agee(value)
	{
		this.age2 = value;
	}
};
person2.age2 = 55;
document.getElementById("p03").innerHTML=person2.age2;