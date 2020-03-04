const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');
const cors = require("cors");
app.use(cors());

const { 
    signupCompany,
    updateCompany,
    login

} = require('./handlers/users')



app.post('/signup' , signupCompany);
app.post( '/update'  , updateCompany);
app.post('/login' , login);


// app.get("/posts", getAllPosts);
// app.post("/post", FBAuth, postOnePost);
// app.get("/post/:postId", getPost);
// app.delete("/post/:postId", FBAuth, deletePost);
// app.get("/post/:postId/like", FBAuth, likePost);
// app.get("/post/:postId/unlike", FBAuth, unlikePost);
// app.post("/post/:postId/comment", FBAuth, commentOnPost);

exports.api = functions.region('us-central1').https.onRequest(app);










