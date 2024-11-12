'use client'
import React, { useState, useEffect } from 'react';

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
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

type AlertProps = {
    open: boolean;
    setOpen:any
    // handleDelete:(e: any) => void;
    // title: string;
};
const DeleteAlert :React.FC<AlertProps> = ({open, setOpen}) => {
    const { toast } = useToast()
    const handleDelet = () => {
        toast({
            description: "Your message has been sent.",
        })
        setOpen(!open)
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
                    <AlertDialogAction onClick={() =>handleDelet()} className="bg-red-500 hover:bg-red-700">Yes, delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteAlert;