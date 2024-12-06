import { Component, Input, Output, EventEmitter, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Decorator method
    @Input({required: true}) id!: string;
  // @Input({required: true}) avatar: string;
  // @Input({required: true}) name: string;
  @Output() select = new EventEmitter();

  // Signal method with generic type - (read only)
  avatar = input.required<string>();
  name = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
