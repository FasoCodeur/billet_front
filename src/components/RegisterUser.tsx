'use client'
import {useCreateAccountMutation} from "@/redux/features/auth/authApiSlice";
import React, {ChangeEvent, Dispatch, SetStateAction, useState, useEffect} from 'react';
import {z} from "zod";
import toast from "react-hot-toast";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useUpdateUserMutation} from "@/redux/features/user/apiUser";
type user = {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    email: string | null;
    city: string | null;
    country: string | null;
    password: string | null;
};

type DialogProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    mode: 'add' | 'edit';
    initialData?: user | null;
    id?: string | null;
}
const RegisterUser :React.FC<DialogProps> = ({open, setOpen, mode, initialData, id}) => {
    const isEditMode = mode === 'edit';
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        password: '',
    })
    const handleChance= (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((values) => ({ ...values, [name]: value }))
    }
    const [updateUser, {isLoading: isUpdating}] = useUpdateUserMutation();
    const [createuser, {isLoading: isCreating}] = useCreateAccountMutation();

    // const userrSchema = z.object({
    //     ice: z.string().min(15, { message: "Le ICE doit avoir au moins 15 caractères." }),
    //     name: z.string().min(1, { message: "Le nom est requis." }),
    //     phone: z.string().min(1, { message: "Le téléphone est requis." }),
    //     email: z.string().email({ message: "Veuillez entrer un email valide." }),
    //     city: z.string().min(1, { message: "La ville est requise." }),
    // });

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            if (!isEditMode) {
                // userSchema.parse(user);
                // await createuser(user).unwrap();
                // toast.success("Société ajoutée avec succès.");
                // setOpen(false);
                // if (isSuccess) {
                //     toast.success('Successfully created user.');
                //     setOpen(false);
                // }
                // console.log('Ajout de la société :', user);
                // Appeler l'API pour ajouter une société
            } else {
                // userSchema.parse(user);
                await updateUser({id: id, data: user}).unwrap();
                toast.success("Utilisateur mise à jour avec succès.");
                setOpen(false);
                // if (isSuccess) {
                //     toast.success('Successfully created user.');
                //     setOpen(false);
                // }
                // console.log('Mise à jour de la société :', user);
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
            setUser(initialData);
        }
    }, [mode, initialData]);
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[700px] bg-white">
                <DialogHeader>
                    <DialogTitle>{mode ==='add' ? 'Add user' : 'Edit user'}</DialogTitle>
                    <DialogDescription>
                        Make changes for user here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
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
                            defaultValue={isEditMode ? user?.firstName : ''}
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
                            defaultValue={isEditMode ? user?.lastName : ''}
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
                            defaultValue={isEditMode ? user?.email : ''}
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
                            defaultValue={isEditMode ? user?.phone : ''}
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
                            defaultValue={isEditMode ? user?.country : ''}
                            onChange={handleChance}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            {isEditMode ? "Entre votre ancien mot de passe" : " Mot de passe"}
                        </Label>
                        <Input
                            id="password"
                            name='password'
                            placeholder='Enter user country'
                            className="col-span-3"
                            onChange={handleChance}
                            disabled={true}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Nouveau mot de passe
                        </Label>
                        <Input
                            id="password"
                            name='password'
                            placeholder='Enter user country'
                            className="col-span-3"
                            defaultValue={isEditMode ? user?.password : ''}
                            onChange={handleChance}
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

export default RegisterUser;