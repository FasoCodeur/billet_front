'use client'
import React, {useState, ChangeEvent, SetStateAction, Dispatch} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {usePostCompanyMutation} from "@/redux/features/company/apiCompany";
import toast from "react-hot-toast";
import { z } from "zod";

type DialogProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
};

const AddCompany :React.FC<DialogProps> = ({open, setOpen}) => {
    const [company, setCompany] = useState({
        ice:'',
        name:'',
        phone:'',
        email:'',
        city:'',
        logo:'',
    })
    const handleChance= (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCompany((values) => ({ ...values, [name]: value }))
    }

    const [createCompany, {isLoading, error, isSuccess, isError}] = usePostCompanyMutation();

    const companySchema = z.object({
        ice: z.string().min(15, { message: "Le ICE doit avoir au moins 15 caractères." }),
        name: z.string().min(1, { message: "Le nom est requis." }),
        phone: z.string().min(1, { message: "Le téléphone est requis." }),
        email: z.string().email({ message: "Veuillez entrer un email valide." }),
        city: z.string().min(1, { message: "La ville est requise." }),
    });

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            companySchema.parse(company);
             await createCompany(company).unwrap();
            if (isSuccess) {
                setOpen(false);
                toast.success('Successfully created company.');
            }


        } catch (err) {
            if (err instanceof z.ZodError) {
                err.errors.forEach((error) => {
                    toast.error(error.message);
                });
            } else {
                console.log(err);
                if (isError && error) {
                    toast.error('An error occurred');
                }

            }
        }

        }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[700px] bg-white">
                <DialogHeader>
                    <DialogTitle>Add company</DialogTitle>
                    <DialogDescription>
                        Make changes for company here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cin" className="text-right">
                            ICE
                        </Label>
                        <Input
                            id="cin"
                            name='ice'
                            placeholder='Enter company ice'
                            className="col-span-3"
                            onChange={handleChance}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name='name'
                            placeholder='Enter company name'
                            className="col-span-3"
                            onChange={handleChance}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
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
                        <Label htmlFor="Email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="Email"
                            name='email'
                            placeholder='Enter company email example:qqq@gmail.com'
                            className="col-span-3"
                            onChange={handleChance}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Address" className="text-right">
                            Addresse
                        </Label>
                        <Input
                            id="Address"
                            name='city'
                            placeholder='Enter company address'
                            className="col-span-3"
                            onChange={handleChance}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Logo" className="text-right">
                            Logo
                        </Label>
                        <Input
                            id="Logo"
                            name="logo"
                            type="file"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}  className="bg-primary"
                            type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Save'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddCompany;