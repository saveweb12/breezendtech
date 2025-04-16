"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { Save, ChevronLeft } from "lucide-react"
import Link from 'next/link'
import axios from 'axios'

const Page = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axios.post("https://breezend-backend-2.onrender.com/api/faq/create-Faq", data);
            console.log("Success:", response.data);
            alert("Form submitted successfully!");
            reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form");
        }
    }


    return (
        <section className="w-full mt-16">
            <header className='w-full flex justify-between items-center py-2 border-b'>
                <ul>
                    <h2 className='text-2xl font-semibold'>FAQS</h2>
                </ul>
                <div className='flex space-x-2'>
                    <Link href="/dashboard/admin/faqs" className='flex justify-center items-center gap-2 rounded bg-black text-white px-4 py-1'>
                        <ChevronLeft />
                        <p>Back</p>
                    </Link>
                    <Button type="submit" form="createFaqForm" className="flex items-center gap-2 rounded-md bg-black text-white px-4 py-1">
                        <Save />
                        <p>Save</p>
                    </Button>
                </div>
            </header>
            <div className="w-full mt-6">
                <form id='createFaqForm' onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <Label className="text-sm font-medium">Title</Label>
                        <Input className="w-full p-2 border rounded-md" {...register("question")} />
                    </div>
                    <div>
                        <Label className="text-sm font-medium">Description</Label>
                        <Textarea className="w-full p-2 border rounded-md" rows="4"  {...register("answer")} />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Page