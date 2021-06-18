import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDiHX1etv-lxFx9I1Xr-mndxT7pyA0Q9yg",
    authDomain: "crown-24dcc.firebaseapp.com",
    projectId: "crown-24dcc",
    storageBucket: "crown-24dcc.appspot.com",
    messagingSenderId: "385139012247",
    appId: "1:385139012247:web:618f252b3c48c23b276fd2"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider).then((res)=>{
    console.log(res)
    // console.log(new URL(window.location))
    
    
})
.catch((err)=>{
    console.log(err)
})

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    console.log('this is auth user', userAuth )
    console.log('this is additionalData', additionalData)
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get()
   
    
    console.log(snapShot)
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
            
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('error creating user', err.message)

        }
    }
    return userRef;
}

export default firebase;


