import uuid from 'uuid';

import ucFirst from '../lib/ucFirst';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default class Project {

  id= ``
  name = ``
  deadline = ``
  consultday = ``
  note = ``

  constructor(name, deadline, consultday, note) {
    this.name = ucFirst(name);
    this.deadline = distanceInWordsToNow(deadline);
    this.consultday = consultday;
    this.note = note;
    this.id = uuid.v4();
  }

}
