import type HttpClient from "./httpClient.ts";

const getTodoSummariesPath = "https://api.satchelone.com/api/todos"
const getTodoPath = "https://api.satchelone.com/api/homeworks/"

export type TodoSummary = {
    class_task_title: string,
    class_task_id: number,
    class_task_description: string,
    class_task_type: string,
    subject: string,
    teacher_name: string,
}

export type TodoSummaries = {
    todos: TodoSummary[]
}

export type Todo = {
    id: number,
    title: string,
    description: string,
    subject: string,
    issued_at: string,
    due_on: string,
    teacher_name: string,
    submission_type: string
}

export async function getTodoSummaries(httpClient: HttpClient, from: string, to: string) {
    const res: TodoSummaries = await httpClient.get(`${getTodoSummariesPath}?add_dateless=true&from=${from}&to=${to}`);
    
    return res;
}

export async function getTodo(httpClient: HttpClient, todoSummary: TodoSummary) {
    const res = await httpClient.get(getTodoPath+todoSummary.class_task_id.toString())
    const todo: Todo = res[todoSummary.class_task_type.toLowerCase()];
    
    return todo;
}