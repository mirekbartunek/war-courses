"use client";
import {format} from "date-fns";
import {Button} from "@/components/ui/button";
import {toast} from "sonner"
import {Badge} from "@/components/ui/badge";

type CourseProps = {
    name: string;
    speaker: string;
    location: string;
    date: string;
    isNew: boolean;
}
export const Course = ({name, speaker, location, isNew, date}: CourseProps) => {
    return <div className="flex flex-col gap-5 justify-between relative border border-gray-400 rounded-lg p-5 w-72 shadow-lg" onClick={() => alert(name)}>
        <div className="flex flex-row justify-between">
            <h4 className="font-bold text-lg">{name}</h4>
            {isNew ?
                <Badge variant="secondary">New!</Badge> : null}
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="font-3xl font-bold">{speaker}</h2>
            <div>
                <p className="text-sm text-gray-500">Location: {location}</p>
                <p className="text-sm text-gray-500">Date: {format(date, "MMMM dd, yyy")}</p>
            </div>
            <Button className="self-start" onClick={(e) => {
                e.stopPropagation();
                toast.success("Enrolled", {
                    description: "Check your email for details",
                })
            }}>Enroll</Button>
        </div>
    </div>
}
