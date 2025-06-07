import type { Task } from "../entities/task"

export const tasksServices = {
    async fetchTasks(): Promise<Task[]>{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        const data: Task[] = await response.json()
        return data 
    }, 
    async createTask(attributes: Omit<Task,"id">): Promise<Task> {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(attributes)
        })
        const newTask: Task = await response.json()
        return newTask
    }
}