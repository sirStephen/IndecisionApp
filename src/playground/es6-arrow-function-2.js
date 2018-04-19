// arguments object - no longer bound with arrow functions

const add = (a, b) => {
        // console.log(arguments);
        return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
        name: 'Gregory',
        cities: ['Lagos State', 'Delta State', 'Kebbi State'],
        printPlacesLived: function () {
                const that = this;

                this.cities.forEach(function (city) {
                        console.log(this.name + ' has lived in ' + city);
                });
        }
};
user.printPlacesLived();
