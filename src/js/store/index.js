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
  projects = [
    {
      id: 1,
      name: `Appnormal`,
      deadline: `2017-05-17`,
      consultday: `monday`,
      note: `Dit zijn notities over de Appnormal opdracht. Dit kunnen todos zijn, of bijvoorbeeld feedback van consultmomenten.`
    },
    {
      id: 2,
      name: `DevineTool`,
      deadline: `2017-05-17`,
      consultday: `wednesday`,
      note: `Dit zijn notities over de DevineTool opdracht. Dit kunnen todos zijn, of bijvoorbeeld feedback van consultmomenten.`
    },
  ]

  @action
  add = (...projects) => {
    // console.log(...projects);
    projects.forEach(p => {
      console.log(p);
      this.projects.push(
        new Project(p)
      );

    });

  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
