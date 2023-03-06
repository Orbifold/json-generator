const dg = require("/Users/swa/Projects/Kongsberg/JsonGenerator/dataGenerators.js");
const dummyjson = require("dummy-json")
// see details: https://www.npmjs.com/package/dummy-json
const template = `{
    "name": "{{companyName}}",
    "date": "{{date}}",
    "id":"{{guid}}",
    "address":{
        "email":"{{email}}",
        "street":"{{street}} {{int 1 1000}}",
        "city":"{{city}}",
        "zip":"{{countryCode}} {{zipcode}}",
        "country":"{{country}}"
    },
    "description": "{{paragraph}}",
    "events": [
        {{#repeat min=1 max=20}}
        {
            "direction":"{{direction}}",
            "intensity":"{{float 0 1 round=0.1}}",
            "time":"{{time '09:00' '17:30'}}",
            "checked":"{{boolean}}", 
            "id":"{{ipv6}}",
            "coordinates":{
                "x":"{{float 0 5478 round=0.1}}",
                "y":"{{float 0 2256 round=0.1}}",
                "z":"{{float 0 5148 round=0.1}}"
            },
            "geo":{
                "lat":"{{lat}}",
                "long":"{{long}}"
            }
        }
        {{/repeat}}
    ]
  }`;
const result = JSON.parse(dummyjson.parse(template, { helpers: dg }));

console.log(JSON.stringify(result, null, 4));
