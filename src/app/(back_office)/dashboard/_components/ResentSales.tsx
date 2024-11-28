'use client'
import React from 'react';
import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    // Cardname,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>
const notifications = [
    {
        name: "Toure Transport",
        description: "1 hour ago",
        price:150,
    },
    {
        name: "Aigle travel",
        description: "1 hour ago",
        price:260,
    },
    {
        name: "CMT",
        description: "2 hours ago",
        price:170,
    },
]

const ResentSales = ({ className, ...props }: CardProps) => {
    return (
        <Card className={cn("w-full", className)} {...props}>
            <CardHeader>
                {/*<Cardname>Notifications</Cardname>*/}
                <CardDescription>All sales feel</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    {/*<BellRing />*/}
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Recent Sales
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                        </p>
                    </div>
                    {/*<Switch />*/}
                </div>
                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1 w-full">
                                <div className='flex justify-between items-center'>
                                    <p className="text-sm font-medium leading-none">
                                        {notification.name}
                                    </p>
                                    <h1>+${notification.price}</h1>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Check />More
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ResentSales;