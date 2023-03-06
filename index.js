const dummyjson = require("dummy-json")
const express = require("express")
var cors = require('cors')
const app = express()
app.use(cors())
const port = 80
const path = require("path")
app.use(express.static('public'))
const dataGenerators = require("./dataGenerators");

app.get("/", (req, res) => {
    res.send("Pseudo-random JSON generator. Use '/object/ to fetch an object.")
});
app.get("/object/:amount?", (req, res) => {
    // see details: https://www.npmjs.com/package/dummy-json
    var amount = req.params.amount || 1;
    const template = `{
    "name": "{{companyName}}",
    "date": "{{date}}",
    "id":"{{guid}}",
    "quality":{{float 0 1 round=0.01}},
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
            "intensity":{{float 0 1 round=0.1}},
            "time":"{{time '09:00' '17:30'}}",
            "checked":{{boolean}}, 
            "id":"{{ipv6}}",
            "coordinates":{
                "x":{{float 0 5478 round=0.1}},
                "y":{{float 0 2256 round=0.1}},
                "z":{{float 0 5148 round=0.1}}
            },
            "geo":{
                "lat":{{lat}},
                "long":{{long}}
            }
        }
        {{/repeat}}
    ]
  }`;
    if (amount === 1) {
        const result = JSON.parse(dummyjson.parse(template, { helpers: dataGenerators }));
        res.json(
            result
        );
    } else {
        const coll = []
        for (let i = 0; i < amount; i++) {
            coll.push(JSON.parse(dummyjson.parse(template, { helpers: dataGenerators })))

        }
        res.json(coll);
    }

})

app.listen(port, () => console.log(`App listening on port ${port}!`))
