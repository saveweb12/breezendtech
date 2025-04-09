'use client'
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
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/navigation'

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('https://breezend-backend-2.onrender.com/api/user/login-account', data, { withCredentials: true });
            console.log("login success", response.data);
            const token = response.data.token;
            const decodedToken = jwtDecode(token);

            if (decodedToken.userType !== 'Admin' && decodedToken.userType !== "Superadmin") {
                toast.error("Unauthorized user type");
                return router.push('/login');
            }
            Cookies.set('auth_token', token)
            router.push("/dashboard/admin/home");
        } catch (error) {
            console.error("login error:", error.response?.data || "somethings went wrong")
        }
    }
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <Card className="w-[400px]">
                    <CardHeader>
                        <CardTitle className="text-center">Login</CardTitle>
                        <CardDescription className="text-center">
                            Please porovide you credentials
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <form onSubmit={handleSubmit(onSubmit)} id="login-form">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" {...register("email", { required: true })} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" {...register("password", { required: true })} />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" form="login-form">Login</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Login 