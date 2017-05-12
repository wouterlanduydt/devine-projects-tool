import uuid from 'uuid';

export default class Project {

  id= ``
  name = ``
  deadline = ``
  consultday = ``
  notes = ``

  constructor({name, deadline, consultday, notes}) {
    this.name = name;
    this.deadline = deadline;
    this.consultday = consultday;
    this.notes = notes;
    this.id = uuid.v4();
  }

}
