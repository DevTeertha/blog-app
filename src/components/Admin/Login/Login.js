import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import { myContext } from '../../../App';
import {
    useHistory,
    useLocation
} from "react-router-dom";




const firebaseConfig = {
    apiKey: "AIzaSyDY0Y2Uu6OXRD53a2uezWKXYkeOV0ZlHoQ",
    authDomain: "blog-app-15cb4.firebaseapp.com",
    projectId: "blog-app-15cb4",
    storageBucket: "blog-app-15cb4.appspot.com",
    messagingSenderId: "1074817631547",
    appId: "1:1074817631547:web:4e1edc495905df2013e31e",
    measurementId: "G-3XY8KVVG5X"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


firebase.analytics();

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/admin" } };


    const { loginState, userState } = useContext(myContext);
    const [login, setLogin] = loginState;
    const [user, setUser] = userState;
    let newLogin = { ...login }
    const loginSetHandler = (e) => {
        newLogin[e.target.name] = e.target.value;
        setLogin(newLogin);
    }

    const loginSubmitHandler = (e) => {
        firebase.auth().signInWithEmailAndPassword(login.email, login.password)
            .then((userCredential) => {
                var user = userCredential.user;
                setUser(true)
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("Email/Password Wrong! Please Try Again.")
            });
        e.preventDefault();
    }
    return (
        <div style={{ height: '100%' }} className="flex items-center bg-gray-200">
            <div class="w-full max-w-xs mx-auto">
                <form onSubmit={loginSubmitHandler} class="border bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
                        <input onBlur={loginSetHandler} name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Password</label>
                        <input onBlur={loginSetHandler} name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Password" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Sign In </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;