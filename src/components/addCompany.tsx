'use client'
import React, {useState, ChangeEvent, SetStateAction, Dispatch, useEffect} from 'react';
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
import {usePostCompanyMutation, useUpdateCompanyMutation} from "@/redux/features/company/apiCompany";
import toast from "react-hot-toast";
import { z } from "zod";

type Company = {
    ice: string;
    name: string;
    phone: string;
    email: string;
    city: string;
    logo: string;
};

type DialogProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    mode: 'add' | 'edit';
    initialData?: Company | null;
    id: string | string[] | null;
};


const AddCompany :React.FC<DialogProps> = ({open, setOpen, mode, initialData, id}) => {
    const [company, setCompany] = useState({
        ice:'',
        name:'',
        phone:'',
        email:'',
        city:'',
        logo:'',
    })
    const isEditMode = mode === 'edit';
    const handleChance= (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCompany((values) => ({ ...values, [name]: value }))
    }

    const [createCompany, {isLoading: isCreating }] = usePostCompanyMutation();
    const [updateCompany, {isLoading: isUpdating}] = useUpdateCompanyMutation();

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
            if (!isEditMode) {
                companySchema.parse(company);
                 await createCompany(company).unwrap();
                toast.success("Société ajoutée avec succès.");
                setOpen(false);
                // if (isSuccess) {
                //     toast.success('Successfully created company.');
                //     setOpen(false);
                // }
                // console.log('Ajout de la société :', company);
                // Appeler l'API pour ajouter une société
            } else {
                companySchema.parse(company);
                 await updateCompany({id:id,data:company}).unwrap();
                toast.success("Société mise à jour avec succès.");
                setOpen(false);
                // if (isSuccess) {
                //     toast.success('Successfully created company.');
                //     setOpen(false);
                // }
                // console.log('Mise à jour de la société :', company);
                // Appeler l'API pour mettre à jour la société
            }


        } catch (err) {
            if (err instanceof z.ZodError) {
                err.errors.forEach((error) => {
                    toast.error(error.message);
                });
            } else {
                console.log(err);
                    toast.error('Une erreur est survenue. Veuillez réessayer.');
            }
        }

        }

    useEffect(() => {
        if (isEditMode && initialData) {
            setCompany(initialData);
        }
    }, [mode, initialData]);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[700px] bg-white">
                <DialogHeader>
                    <DialogTitle>{mode ==='add' ? 'Add company' : 'Edit comapny'}</DialogTitle>
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
                            defaultValue={isEditMode ? company?.ice : ''}
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
                            defaultValue={isEditMode ? company?.name : ''}
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
                            defaultValue={isEditMode ? company?.phone : ''}
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
                            defaultValue={isEditMode ? company?.email : ''}
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
                            defaultValue={isEditMode ? company?.city : ''}
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
                    <Button onClick={handleSubmit}  className="bg-primary text-white"
                            type="submit" disabled={isCreating || isUpdating}>
                        {isCreating || isUpdating  ? 'Loading...' : isEditMode ? 'Edit' : 'Save'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddCompany;