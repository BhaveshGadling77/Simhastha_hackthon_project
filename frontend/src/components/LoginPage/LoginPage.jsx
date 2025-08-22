import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { auth, Facebookprovider, Googleprovider } from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

// import {logOut, signInWithGoogle, SignIn} from './handleSignUp'
function LoginPage() {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const style = {
        color: "#0060ff",
    };
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    async function signInWithGoogle() {
        try {
            await signInWithPopup(auth, Googleprovider);
        } catch (e) {
            console.error(e);
        }
        alert(
            `Thank You for Logging in this website ${auth?.currentUser?.displayName}`
        );
    }
    async function logOut() {
        try {
            await signOut(auth);
        } catch (e) {
            console.error(e);
        }
    }
    async function SignIn() {
        try {
            await createUserWithEmailAndPassword(auth, Email, Password);
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="min-h-screen flex flex-col">
            <div className="align-middle text-center justify-center flex">
                <div className="w-[430px] p-8 rounded-2xl shadow-lg mt-52 mb-40">
                    {/* Header Titles */}
                    <div className="flex justify-center mb-4">
                        <h2 className="text-3xl font-semibold text-center">
                            {isLoginMode ? "Login" : "Sign Up"}
                        </h2>
                    </div>

                    {/* Tab Controls */}
                    <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
                        <button
                            className={`w-1/2 text-lg font-medium transition-all z-10 ${
                                isLoginMode ? "text-white" : "text-black"
                            }`}
                            onClick={() => setIsLoginMode(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`w-1/2 text-lg font-medium transition-all z-10 ${
                                !isLoginMode ? "text-white" : "text-black"
                            }`}
                            onClick={() => setIsLoginMode(false)}
                        >
                            Signup
                        </button>
                        <div
                            className={`absolute top-0 h-full w-1/2 rounded-full bg-green-800 transition-all ${
                                isLoginMode ? "left-0" : "left-1/2"
                            }`}
                        ></div>
                    </div>

                    {/* Form Section */}
                    <form className="space-y-4">
                        {/* Signup-only Field */}
                        {!isLoginMode && (
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                // onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
                            />
                        )}

                        {/* Shared Fields */}
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
                        />

                        {/* Signup-only Field */}
                        {!isLoginMode && (
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
                            />
                        )}

                        {/* Forgot Password (Only for Login) */}
                        {isLoginMode && (
                            <div className="text-right">
                                <a
                                    href="#"
                                    className="text-green-700 hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button className="w-full p-3 bg-green-700 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
                            {isLoginMode ? "Login" : "Signup"}
                        </button>

                        {/* Switch Mode Link */}
                        <p className="text-center text-gray-600">
                            {isLoginMode
                                ? "Don't have an account?"
                                : "Already have an account?"}

                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsLoginMode(!isLoginMode);
                                    SignIn()
                                }}
                                className="text-green-800 hover:underline"
                            >
                                {isLoginMode ? "Signup now" : "Login"}
                            </a>
                        </p>
                        <p className="text-gray-600">{"or Sign In with"}</p>
                    </form>
                    <div className="flex mt-5 space-x-2 align-middle justify-center">
                        <div className="bg-white rounded-lg">
                            <button className="p-2" onClick={signInWithGoogle}>
                                <FcGoogle size={"50px"} />
                            </button>
                        </div>
                        <div className="bg-white rounded-lg">
                            <button className="p-2">
                                <FaMicrosoft size={"50px"} />
                            </button>
                        </div>
                        <div className="bg-white rounded-lg">
                            <button className="p-2">
                                <FaSquareFacebook size={"50px"} style={style} />
                            </button>
                        </div>
                        <div className="bg-white rounded-lg">
                            <button className="p-2">
                                <FaApple size={"50px"} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
