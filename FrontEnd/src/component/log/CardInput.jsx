import React, { useState } from "react";
import Button from "../reuse/48-16";
import axios from 'axios';

function CardInput({ type }) {
    const [id, setId] = useState("");
    const [nama, setNama] = useState("");
    const [pin, setPin] = useState("");
    const [password, setPassword] = useState("");
    
  
    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:5000/login', {
                params: {
                    id,
                    password,
                },
            });

            console.log(response.data);
            if (response.data.length === 1) {
                console.log('Login successful');
                window.location.href = '/user';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:5000/signup', {
                data: {
                    nama,
                    pin,
                    password,
                },    
            });
            console.log(response.data)
            if (response.data.length === 1) {
                console.log('Signup successful');
                // window.location.href = ('/user', { userData : response.data })
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        (type === "login") ? (
            <div className="w-full">
                <form action="" className="flex flex-col gap-6 items-center">
                    <div className="bg-gray flex flex-row items-center px-8 py-4 gap-4 rounded-2xl w-full">
                        <img src="assets/icon-ID.png" alt="" className="w-10" />
                        <input
                            type="text"
                            name="id"
                            placeholder="Please Enter your ID Number"
                            className="bg-gray w-full font-jof font-bold text-black text-xl"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div className="bg-gray flex flex-row items-center px-8 py-4 gap-4 rounded-2xl w-full">
                        <img src="assets/icon-pass.png" alt="" className="w-10" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Please Enter your Password"
                            className="bg-gray w-full font-jof font-bold text-black text-xl"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={ handleLogin }>
                        <Button type={"solid"} text={"LogIn"} />
                    </button>
                </form>
            </div>
        ) : (
            <div className="w-full">
                <form action="" className="flex flex-col gap-6 items-center">
                    <div className="bg-gray flex flex-row items-center px-8 py-4 gap-4 rounded-2xl w-full">
                        <img src="assets/icon-ID.png" alt="" className="w-10"/>
                        <input
                            type="text"
                            name="nama"
                            placeholder="Please Enter your Name"
                            className="bg-gray w-full font-jof font-bold text-black text-xl"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div className="bg-gray flex flex-row items-center px-8 py-4 gap-4 rounded-2xl w-full">
                        <img src="assets/icon-pass.png" alt="" className="w-10" />
                        <input 
                            type="password" 
                            name="pin" 
                            id="pin" 
                            placeholder="Please Enter your Pin" 
                            className="bg-gray w-full font-jof font-bold text-black text-xl"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                        />
                    </div>
                    <div className="bg-gray flex flex-row items-center px-8 py-4 gap-4 rounded-2xl w-full">
                        <img src="assets/icon-pass.png" alt="" className="w-10" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Please Enter your Password"
                            className="bg-gray w-full font-jof font-bold text-black text-xl"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={ handleSignup }>
                        <Button type={ "solid" } text={ "SignUp" } />
                    </button>
                </form>
            </div>
        )

    )
}

export default CardInput;