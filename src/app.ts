// Code goes here!

// apabila hanya memiliki 1 expression bisa menggunakan short code
// otomatis akan mereturn value
const add = (a: number, b: number) => a + b;

// cara short code menambhkan type function
const printOut: (a: number | string) => void = (param) => console.log(param);

printOut(add(1, 2));

// DEFAULT PARAMTER HARUS DIPASTIKAN DITARUH PADA VALUE KEDUA BUKAN YG PERTAMA

// * SPREAD OPERATOR
const hobbies = ["sport", "cooking"];
const activeHobby = ["sexy", ...hobbies];

activeHobby.push(...hobbies);

const person = {
	firstName: "max",
	age: 30,
};

const copiesPerson = { ...person, name: "ilham" };
console.log(copiesPerson);

// REST PARAMETERS
const adds = (...numbers: number[]) => {
	console.log(numbers[0]);
	return numbers.reduce((a, b) => {
		return a + b;
	}, 0);
};

const resultAdd = adds(1, 2, 3, 4, 5);
console.log(resultAdd);

// DESTRUCTURING ARRAY / OBJECTS => tidak mengubah original object/array
// penamaan dari desctructring array dibebaskan
const [hb1, hb2, ...remainArray] = hobbies;

console.log(hb1, hobbies);
// penamaan dari destructring object harus sesuai dengan key value objectnya
const { firstName: newName, age } = person;

console.log(newName, age);
