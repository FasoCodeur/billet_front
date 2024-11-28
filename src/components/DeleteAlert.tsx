'use client'
import React, {Dispatch, SetStateAction} from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {useDeleteCompanyMutation} from "@/redux/features/company/apiCompany";
import toast from "react-hot-toast";


type AlertProps = {
    open: boolean;
    setOpen:Dispatch<SetStateAction<boolean>>,
    id: string;
};
const DeleteAlert :React.FC<AlertProps> = ({open, setOpen, id}) => {
    const [deleteCompany, { isLoading, isError, error, isSuccess }] = useDeleteCompanyMutation();
    const handleDelete = async () => {
        try {
           await deleteCompany(id).unwrap();
            if (isSuccess){
                toast.success('Company successfully deleted');
            }
        } catch (err) {
            // Gérer les erreurs de la mutation
            console.error('Error deleting company:', err);
        }
    }
    
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() =>setOpen(!open)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() =>handleDelete()} className="bg-red-500 hover:bg-red-700">
                        {isLoading ? 'Deleting...' : ' Yes, delete'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteAlert;