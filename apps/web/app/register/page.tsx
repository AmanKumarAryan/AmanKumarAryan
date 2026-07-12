"use client";

import { useState } from "react";
import { auth } from '@/src/@lib/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await sendEmailVerification(userCredential.user);

            alert("Registration successful! Please check your email to verify your account.");

        } catch (error: any) {
            console.error(error);
            alert(error.message);
        }
    };

    const fetchUser = async () => {
        const user = await auth.currentUser?.reload()
        console.log("this is a current user ---> ",user)

    }

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: 350,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    padding: 24,
                    border: "1px solid #ddd",
                    borderRadius: 8,
                }}
            >
                <h2>Register</h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleRegister}>Register</button>
                <button onClick={fetchUser}>Fetch user details</button>
            </div>
        </div>
    );
}