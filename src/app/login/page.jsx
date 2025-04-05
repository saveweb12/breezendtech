"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useForm } from 'react-hook-form'
import toast from "react-hot-toast";
import axios from 'axios'
// import { cookies } from 'next/headers'

const Login = () => {
    const {
        register: registerLogin,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors },
        reset: loginreset
    } = useForm();

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     reset
    // } = useForm();

    const handleLogin = async (data) => {
        try {
            const response = await axios.post('https://breezend-backend-2.onrender.com/api/user/login-account', data, { withCredentials: true });
            const token = response.data;
            // if (token.token) {
            //     cookies().set('auth_token',)
            // }
            toast.success(response.data.message);
            loginreset();
        } catch (error) {
            console.error("Login Error:", error.response?.data);
            toast.error(`Login Error: ${error.response?.data?.message || "Something went wrong"}`);
            loginreset();
        }
    }

    // const onSubmit = async (data) => {
    //     console.log(data)
    //     try {
    //         const response = await axios.post('https://breezend-backend-2.onrender.com/api/user/create-account', data, { withCredentials: true });
    //         toast.success(response.data.message);
    //         reset();
    //     } catch (error) {
    //         console.error("Signup Error:", error.response?.data);
    //         toast.error(`Signup Error: ${error.response?.data?.message || "Something went wrong"}`);
    //         reset();
    //     }
    // }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Tabs defaultValue="login" className="w-[400px] bg-white">
                {/* <TabsList className="grid w-full">
                    <TabsTrigger value="login" className="!w-full">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                    <div className='text-center'>Login</div>
                </TabsList> */}

                {/* Login Form */}
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-center'>Login</CardTitle>
                            {/* <CardDescription>
                                If you haven't signed up yet, please sign up.
                            </CardDescription> */}
                        </CardHeader>
                        <form onSubmit={handleLoginSubmit(handleLogin)}>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="loginEmail">Email</Label>
                                    <Input id="loginEmail" type="email" autoComplete="on" {...registerLogin("email", { required: true })} />
                                    {loginErrors.email && <p className="text-red-500">Email is required</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="loginPassword">Password</Label>
                                    <Input id="loginPassword" type="password" autoComplete="on" {...registerLogin("password", { required: true })} />
                                    {loginErrors.password && <p className="text-red-500">Password is required</p>}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="mx-auto block" type="submit">Login</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent>

                {/* Signup Form */}
                {/* <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                If you have already signed up, please visit the login tab.
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit(onSubmit)} id="signup-form">
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="signupUsername">Username</Label>
                                    <Input id="signupUsername" type="text" {...register("name", { required: true })} />
                                    {errors.signupUsername && <p className="text-red-500">Username is required</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="signupEmail">Email</Label>
                                    <Input id="signupEmail" type="email" {...register("email", { required: true })} />
                                    {errors.signupEmail && <p className="text-red-500">Email is required</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="signupPassword">Password</Label>
                                    <Input id="signupPassword" type="password" {...register("password", { required: true })} />
                                    {errors.signupPassword && <p className="text-red-500">Password is required</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="signupUserType">User Type</Label>
                                    <Input id="signupUserType" type="text" {...register("userType", { required: true })} />
                                    {errors.signupUserType && <p className="text-red-500">User Type is required</p>}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="mx-auto block" type="submit">Signup</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent> */}
            </Tabs>
        </div>
    );
}

export default Login;
