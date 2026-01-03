import { useState } from "react";
import {
    auth,
    Facebookprovider,
    Googleprovider,
} from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

import { useData } from "../../context/data";
const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");

export async function signInWithGoogle() {
    try {
        await signInWithPopup(auth, Googleprovider);
    } catch (e) {
        console.error(e);
    }
    alert(
        `Thank You for Logging in this website ${auth?.currentUser?.displayName}`
    );
}
export async function logOut() {
    try {
        await signOut(auth);
    } catch (e) {
        console.error(e);
    }
}
export async function SignIn() {
    try {
        await createUserWithEmailAndPassword(auth, Email, Password);
    } catch (e) {
        console.error(e);
    }
}
