import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  //userIid = input<string>();
  @Input({required: true}) name!: string;
  // name = input<string>();

  tasks = [
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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
