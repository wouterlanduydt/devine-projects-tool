import {observable} from 'mobx';

class Store {

  @observable
  name = `yummie`

  @observable
  deadline = `17 mei`

  @observable
  consultDay = `thursday`

  @observable
  notes = `dit is een notitie`

  @observable
  projects = [`hoi`, `hallo`]

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
