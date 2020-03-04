const admin = require("firebase-admin");

var serviceAccount = require("../blood-fb77e-firebase-adminsdk-qbrgy-b0a2fe7c6a.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blood-fb77e.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
