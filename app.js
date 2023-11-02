
document.getElementById('btn').addEventListener('click',()=>{


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "cuenta": "mapasco",
    "clave": "mapasco"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Token/Autenticar", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



})

document.getElementById('btn1').addEventListener('click',()=>{




    let xhr = new XMLHttpRequest();

    let json = JSON.stringify({
    "cuenta": "mapasco",
    "clave": "mapasco"
    });
    
    xhr.open("POST", 'https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Token/Autenticar')

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
    xhr.send(json);




})



document.getElementById('btn2').addEventListener('click',()=>{


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic UExBSzhlODEyZWM1MjgwMTQyZGU4ODM4YzM5MjQ2Yjc3ZTkwOg==");

var raw = JSON.stringify({
  "filter": {
    "type": "AndFilter",
    "config": [
      {
        "type": "GeometryFilter",
        "field_name": "geometry",
        "config": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -83.37248180344046,
                8.670745141205892
              ],
              [
                -83.02091930344055,
                8.670745141205892
              ],
              [
                -83.02091930344055,
                8.99642510720258
              ],
              [
                -83.37248180344046,
                8.99642510720258
              ],
              [
                -83.37248180344046,
                8.670745141205892
              ]
            ]
          ]
        }
      },
      {
        "type": "DateRangeFilter",
        "config": {
          "gte": "2023-06-04T20:40:15.023Z",
          "lte": "2023-09-04T20:40:15.023Z"
        },
        "field_name": "acquired"
      },
      {
        "type": "RangeFilter",
        "config": {
          "gte": 0,
          "lte": 0.5
        },
        "field_name": "cloud_cover"
      }
    ]
  },
  "item_types": [
    "PSScene"
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

    fetch("https://api.planet.com/data/v1/quick-search", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


})