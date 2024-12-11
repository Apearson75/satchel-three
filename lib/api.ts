import HttpClient from "./httpClient.ts";
import moment from "moment";
import { getTodo, getTodoSummaries, type TodoSummary } from "./todos.ts";
import { getWeekTimetableFromDay } from "./timetable.ts";

const studentInfoURL = "https://api.satchelone.com/api/students/14102987?include=user_private_info%2Cschool%2Cpackage%2Cpremium_features"

export class SatchelThree {
    authToken: string;
    httpClient: HttpClient;
    constructor(authToken: string) {
        this.authToken = authToken;
        this.httpClient = new HttpClient(authToken);
    }

    formatDate(date: string | number) {
        return moment(new Date(date)).format("yyyy-MM-DD");
    }

    formatTime(time: string | number) {
        return moment(new Date(time)).format("HH:mm");
    }


    async getTodoSummaries(from: string, to: string) {
        return await getTodoSummaries(this.httpClient, from, to);
    }

    async getTodo(todoSummary: TodoSummary) {
        return await getTodo(this.httpClient, todoSummary);
    }


    async getWeekTimetableFromDay(day: string) {
        return await getWeekTimetableFromDay(this.httpClient, day);
    }
}