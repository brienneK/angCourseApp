import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})

export class TasksService { 
   private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Do stuff',
          summary: 'Ya know, stuff',
          dueDate: '2025-03-31'
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'More stuff',
          summary: 'More and more',
          dueDate: '2025-07-31'
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Bit more stuff',
          summary: 'Adulting never ends',
          dueDate: '2025-12-31'
        },    
    ];
    
    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}