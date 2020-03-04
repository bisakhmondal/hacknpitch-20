const { admin , db } = require('../util/admin');

// const config = require('../util/config');
const config = {
  apiKey: "AIzaSyC-l9qjEe4gcUmaj4-AxM_Md1TL1BVFMcw",
  authDomain: "blood-fb77e.firebaseapp.com",
  databaseURL: "https://blood-fb77e.firebaseio.com",
  projectId: "blood-fb77e",
  storageBucket: "blood-fb77e.appspot.com",
  messagingSenderId: "774424257898",
  appId: "1:774424257898:web:7b943b3e5f8ef81b863113",
  measurementId: "G-TV7DLZRYQM"
};

const firebase = require('firebase');
firebase.initializeApp(config);

const { 
     validateSignUpData,
     validateLoginData ,
} = require( '../util/validators')

exports.signupCompany= ( req , res) => {
     
     const newUser = { 
          name : req.body.name , 
          email : req.body.email , 
          password : req.body.password ,
          confirmPassword : req.body.confirmPassword ,
          type : req.body.type
     }


     const { valid , errors } = validateSignUpData(newUser);
     if ( !valid) return res.status(400).json( errors);
     firebase.auth().createUserWithEmailAndPassword( newUser.email ,newUser.password)
     .then( (data) => {
          // Created , returns a token
          userId  = data.user.uid;
          return data.user.getIdToken();
     })
     .then( ( token ) => {

          tok = token;
          const Credentials = {
               userid : userId,
               name : newUser.name, 
               email : newUser.email,
               createdAt : new Date().toISOString() ,
          };
          // return res.status(201).json({ token: tok, credentials: Credentials });
          if ( newUser.type === 'company')
           return db.doc(`/blood_companies/${Credentials.userid}`).set(Credentials);
          else  if ( newUser.type === 'donor')
            return db
              .doc(`/donor/${Credentials.userid}`)
              .set(Credentials);
          else ( newUser.type === 'receiver')
            return db
              .doc(`/receiver/${Credentials.userid}`)
              .set(Credentials);
          
     })
     .then( () => {
          return res.status(201).json({ token :tok});
     })

     .catch (error => {
          if ( error.code === 'auth/email-already-in-use'){
               res.status(400).json({email : 'Email already in use'});
          }
          return res.status( 500).json( { general : error.message});
     })


}

exports.updateCompany = ( req ,res ) => {

     
     //   let userDetails = reduceUserDetails(req.body);
     
     if ( req.body.type === 'company'){
       return db
         .doc(`/blood_companies/${req.body.uid}`)
         .update(req.body)
         .then(() => {
           return res
             .status(201)
             .json({ message: "Details added successfully" });
         })
         .catch(err => {
           console.error(err);
           return res.status(500).json({ error: err.code });
         });
     }
     else if ( req.body.type === 'donor'){
         return db
           .doc(`/donor/${req.body.uid}`)
           .update(req.body)
           .then(() => {
             return res
               .status(201)
               .json({ message: "Details added successfully" });
           })
           .catch(err => {
             console.error(err);
             return res.status(500).json({ error: err.code });
           });
     }
     else if ( req.body.type === 'driver'){
          return db
            .doc(`/driver/${req.body.uid}`)
            .update(req.body)
            .then(() => {
              return res
                .status(201)
                .json({ message: "Details added successfully" });
            })
            .catch(err => {
              console.error(err);
              return res.status(500).json({ error: err.code });
            });
     }
     else {
          return db
            .doc(`/receiver/${req.body.uid}`)
            .update(req.body)
            .then(() => {
              return res
                .status(201)
                .json({ message: "Details added successfully" });
            })
            .catch(err => {
              console.error(err);
              return res.status(500).json({ error: err.code });
            });
     }

            
}


exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(user);

//   if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
     //  db.collection;
      return data.user.getIdToken();
    })
    .then(token => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.error(err);
      // auth/wrong-password
      // auth/user-not-user
      return res
        .status(403)
        .json({ general: "Wrong credentials, please try again" });
    });
};





