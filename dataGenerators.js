const dummyjson = require("dummy-json")

const { faker } = require("@faker-js/faker")
const dataGenerators = {
    direction() {
        // We use dummyjson's random() method to ensure the seeded random number generator is used
        return dummyjson.utils.random() > 0.5 ? 'left' : 'right';
    },
    paragraph() {
        return faker.lorem.paragraph();
    },
    companyName() {
        return faker.company.name();
    },
    dateBetween(start, end) {
        start = Date.parse(start);
        end = Date.parse(end);

        return new Date(Math.floor(Math.random() * (end - start + 1) + start)).toISOString();
    },
    date() {
        return dataGenerators.dateBetween("2000/1/1", "2023/1/1")
    }
};
module.exports = dataGenerators;