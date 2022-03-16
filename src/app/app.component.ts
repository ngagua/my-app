import { Component } from '@angular/core';


interface AddTasks {
  content: string,
  difficulty: Difficulty | undefined;
  state: states | undefined;
}

enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Difficult = "Difficult",

}
enum states {
  Todo = "Todo",
  inProgress = "inProgress",
  Done = "Done",

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  difficultyOptions = [
    Difficulty.Easy,
    Difficulty.Medium,
    Difficulty.Difficult
  ]

  addTask: AddTasks = {
    content: "",
    difficulty: undefined,
    state: undefined

  }
  todos: AddTasks[] = []
  inProgress: AddTasks[] = []
  done: AddTasks[] = []


  difficulty = Difficulty;


  addTodo() {
    if (!this.addTask.content || !this.addTask.difficulty) {
      return
    }

    this.todos.push({
      content: this.addTask.content,
      difficulty: this.addTask.difficulty,
      state: this.addTask.state
    });

    this.addTask = {
      content: "",
      difficulty: undefined,
      state: undefined
    }

  }
  removeTask(id: number) {
    this.todos = this.todos.filter((_task, index) => index !== id);
  }

  moveToProgress(id: number) {
    this.inProgress.push(this.todos[id]);
    this.todos = this.todos.filter((_task, index) => index !== id);
  }

  ProgressTotodo(id: number) {
    this.todos.push(this.inProgress[id]);
    this.inProgress = this.inProgress.filter((_task, index) => index !== id);
  }

  moveToDone(id: number) {
    this.done.push(this.inProgress[id]);
    this.inProgress = this.inProgress.filter((_task, index) => index !== id);
  }
  doneToProgress(id: number) {
    this.inProgress.push(this.done[id]);
    this.done = this.done.filter((_task, index) => index !== id);
  }

}

