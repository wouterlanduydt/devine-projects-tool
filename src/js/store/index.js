import {observable, action} from 'mobx';

import Project from '../models/Project';

class Store {

  @observable
  name = ``

  @observable
  deadline = ``

  @observable
  consultday = ``

  @observable
  note = ``

  @observable
  projects = []

  @action
  add = (name, deadline, consultday, note) => {

    this.projects.push(
      new Project(name, deadline, consultday, note)
    );

  }

  @action
  setName = name => {
    this.name = name;
  }

  @action
  setDeadline = deadline => {
    this.deadline = deadline;
  }

  @action
  setConsultday = consultday => {
    this.consultday = consultday;
  }

  @action
  setNote = note => {
    this.note = note;
  }

  @action
  getProjectById = id => {
    return this.projects.find(p => p.id === id);
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
