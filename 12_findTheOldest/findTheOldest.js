const findTheOldest = function(array) {
    let year = new Date().getFullYear();
array.forEach(person => {
    if (!person.yearOfDeath){
        person.yearOfDeath = year;
    }
    person['age'] = person.yearOfDeath - person.yearOfBirth;
})

let sortedAge = array.sort(
    (p1, p2) => (p1.age < p2.age) ? 1 : (p1.age > p2.age) ? -1 : 0);

    return sortedAge[0];
}

// Do not edit below this line
module.exports = findTheOldest;
