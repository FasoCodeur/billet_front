'use client'
import React, {ChangeEvent,useState} from 'react';
import {z} from "zod";
import toast from "react-hot-toast";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { useRouter } from 'next/navigation'
import {useCreateAccountMutation} from "@/redux/features/auth/authApiSlice";

const Page = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        password: '',
        password2: '',
    })
    const [loading, setLoading] = useState(false);

    const [createUser] = useCreateAccountMutation();

    const handleChance= (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((values) => ({ ...values, [name]: value }))
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-zA-Z\d]).{8,}$/;
    const userSchema = z.object({
            firstName: z.string().min(1, { message: "Le prénom est requis" }),
            lastName: z.string().min(1, { message: "Le nom est requis" }),
            phone: z.string().min(1, { message: "Le téléphone est requis" }),
            email: z.string().email({ message: "L'email doit être valide" }),
            country: z.string().min(1, { message: "Le pays est requis" }),
            password: z
                .string()
                .regex(passwordRegex, {
                    message:
                        "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule et un caractère spécial (!@#$&*).",
                }),
            password2: z.string().min(1, { message: "Veuillez confirmer votre mot de passe" }),
        })
        .refine((data) => data.password === data.password2, {
            message: "Les mots de passe ne correspondent pas",
            path: ["password2"],
        });
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        try {
            userSchema.parse(user);
            const { password2, ...userData } = user;
           await createUser(userData).unwrap();
           await router.push('/login');
           toast.success("Votre compte a ete cree avec succes.")
        } catch (err) {
            if (err instanceof z.ZodError) {
                err.errors.forEach((error) => {
                    toast.error(error.message);
                });
            } else {
                console.log(err);
                toast.error(err?.data?.message);
            }
        }finally {
            setLoading(false);
        }
    }

    return (
        <form action="" onSubmit={handleSubmit} className=" h-full flex flex-col justify-center items-center p-5 gap-3 m-auto">
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstName" className="text-right">
                    Nom
                </Label>
                <Input
                    id="firstName"
                    name='firstName'
                    placeholder='Enter your first name'
                    className="col-span-3"
                    onChange={handleChance}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastName" className="text-right">
                    Prenom
                </Label>
                <Input
                    id="lastName"
                    name='lastName'
                    placeholder='Enter your last name'
                    className="col-span-3"
                    onChange={handleChance}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Email" className="text-right">
                    Email
                </Label>
                <Input
                    id="Email"
                    name='email'
                    placeholder='Enter user email example:qqq@gmail.com'
                    className="col-span-3"
                    onChange={handleChance}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4" >
                <Label htmlFor="Phone" className="text-right">
                    Phone number
                </Label>
                <Input
                    id="Phone"
                    name="phone"
                    placeholder='Enter phone number'
                    className="col-span-3"
                    onChange={handleChance}
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                    Pays
                </Label>
                <Input
                    id="country"
                    name='country'
                    placeholder='Enter user country'
                    className="col-span-3"
                    onChange={handleChance}
                />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                   Entre votre mot de passe
                </Label>
                <Input
                    id="password"
                    name='password'
                    placeholder='Enter user country'
                    className="col-span-3"
                    onChange={handleChance}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                    Entrez a Nouveau votre mot de passe
                </Label>
                <Input
                    id="password2"
                    name='password2'
                    placeholder='Enter user country'
                    className="col-span-3"
                    onChange={handleChance}
                />
            </div>

        </div>
            <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 ${
                    loading ? 'bg-gray-400' : 'bg-blue-500 text-white'
                }`}
            >
                {loading ? 'Redirecting...' : 'Submit'}
            </button>
        </form>
    );
};

export default Page;