export default class Todo {
  name: string;
  done: boolean;

  constructor(name: string | null | undefined) {
    this.name = name ?? '';
    this.done = false;
  }
}
