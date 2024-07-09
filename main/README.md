npm i json-server


add db.json file 
{
  "students": [
    {
      "id": "2daa",
      "name": "Vuqar",
      "surname": "Aslanov",
      "age": "24",
      "score": "99"
    },
    {
      "id": "315c",
      "name": "Elvin",
      "surname": "Camalzade",
      "age": 0,
      "score": 0
    }
  ]
}

npx json-server db.json --port 27001
