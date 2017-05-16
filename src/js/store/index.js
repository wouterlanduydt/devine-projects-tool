import {observable, action} from 'mobx';

import Project from '../models/Project';

import projectsAPI from '../lib/api/projects';

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

  init = () => {
    projectsAPI.read()
      .then(d => this._add(...d.projects));
  }

  constructor() {
    this.init();
  }

  add = (name, deadline, consultday, note) => {
    projectsAPI.create(name, deadline, consultday, note)
      .then(project => this._add(project));
  }

  @action
  _add = (...projects) => {

    projects.forEach((name, deadline, consultday, note) => {

      this.projects.push(
        new Project(name, deadline, consultday, note)
      );

    });

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
  getProjectById = _id => {
    return this.projects.find(p => p._id === _id);
  }

  remove = _id => {
    projectsAPI.delete(_id)
      .then(() => this._removeProject(_id));
  }

  @action
  _removeProject = _id => {
    this.projects = this.projects.filter(p => p._id !== _id);
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
