var nameVar = "Gregory";
var nameVar = 'Tobe';
console.log(nameVar);

let nameLet = 'Stephen';
nameLet = 'Chukwuka';
console.log(nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Blocking scoping

const fullName = 'Jon Snow';
let firstname;
if (fullName) {
        firstname = fullName.split(' ')[0];
        console.log(firstname);
}
console.log(firstname);
