'use client'
import React, {useState, useEffect} from 'react';
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

type DialogProps = {
    open: boolean;
    setOpen:any
    // handleDelete:(e: any) => void;
    // title: string;
};

const AddCompany :React.FC<DialogProps> = ({open, setOpen}) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[700px] bg-white">
                <DialogHeader>
                    <DialogTitle>Add company</DialogTitle>
                    <DialogDescription>
                        Make changes for company here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cin" className="text-right">
                            CIN
                        </Label>
                        <Input
                            id="cin"
                            defaultValue="142345678"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Phone" className="text-right">
                            Phone number
                        </Label>
                        <Input
                            id="Phone"
                            defaultValue="+2127645334"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="Email"
                            defaultValue="aboubacartour993@gmail.com"
                            className="col-span-3"
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Addresse" className="text-right">
                            Addresse
                        </Label>
                        <Input
                            id="Addresse"
                            defaultValue="Agadir"
                            className="col-span-3"
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Logo" className="text-right">
                            Logo
                        </Label>
                        <Input
                            id="Logo"
                            type="file"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button className="bg-primary" type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddCompany;