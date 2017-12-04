class Task {
  done: boolean = false;
  // description: string;
  // priority: string;

  constructor(public description: string, public priority: string)
// {
  // this.done = false;
  // this.description = description;
  // this.priority = priority;
  // }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
