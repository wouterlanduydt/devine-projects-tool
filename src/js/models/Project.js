import uuid from 'uuid';

export default class Project {

  id= ``
  name = ``
  deadline = ``
  consultday = ``
  note = ``

  constructor(name, deadline, consultday, note) {
    this.name = name;
    this.deadline = deadline;
    this.consultday = consultday;
    this.note = note;
    this.id = uuid.v4();
  }

}
