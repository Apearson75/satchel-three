import type HttpClient from "./httpClient.ts";

const weekFromDayURL = "https://api.satchelone.com/api/timetable/school/90334/student/14102987"


type Subject = {
    name: string,
    subject: string,
}

type Period = {
    startDateTime: string
    endDateTime: string
}

type Lessons = {
    classGroup: Subject,
    period: Period,
    room: string,
    teacher: string,
    startTime: string,
    endTime: string,
    subject: string
}

type Days = {
    date: string,
    order: number,
    lessons: Lessons[]
}

export async function getWeekTimetableFromDay(httpClient: HttpClient, day: string) {
    const res = await httpClient.get(`${weekFromDayURL}?requestDate=${day}`);
    const days: Days[] =  res["weeks"][0]["days"];

    return days;
}