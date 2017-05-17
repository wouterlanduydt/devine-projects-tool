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

  @observable
  project = {}

  @action
  getProjects = () => {
    projectsAPI.read()
      .then(d => this._add(...d.projects));
  }

  add = (name, deadline, consultday, note) => {
    projectsAPI.create(name, deadline, consultday, note)
      .then(project => this._add(project));
  }

  @action
  _add = (...projects) => {

    projects.forEach(p => {
      this.projects.push(new Project(p));
    });

  }

  @action
  getProjectById = _id => {
    projectsAPI.readProject(_id)
      .then(d => this.addProject(d));
  }

  @action
  addProject = project => {
    this.project = project;
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

  remove = _id => {
    projectsAPI.delete(_id)
      .then(() => this._removeProject(_id));
  }

  @action
  _removeProject = _id => {
    this.projects = this.projects.filter(p => p._id !== _id);
  }

  @action
  updateProject = project => {
    this._removeProject(project._id);
    projectsAPI.update(project)
    .then(p => this.projects.push(new Project(p)));
  }

  @observable
  formShown = true;

  @action
  toggleForm = () => {
    if (this.formShown) {
      this.formShown = false;
    } else {
      this.formShown = true;
    }
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
