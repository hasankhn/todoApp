const {
  MongoClient
} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TODOS", (err, db) => {
  if (err) {
    console.log('Unable to connect to MONGODB')
  } else {
    console.log("Connetion Successfull");
  }
  db.collection('TODOS').insertOne({
    "name":"Hassan",
    "text": "Wohhoooooo",
    "completed":true,
  }, (err, success) => {
    if (err) {
      console.log("Sorrry")
    } else {
      console.log(success)
    }
  })
})
