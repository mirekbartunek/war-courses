import {COURSES} from "@/constants/courses";
import {Course} from "@/components/Course";

export default function Home() {
    return (
        <main className="flex flex-col">
            <section className="flex flex-row gap-5 flex-wrap">
                {COURSES.map((course) => <Course key={course.date + course.speaker} {...course}/>)}
            </section>
        </main>
    )
}
