import ucFirst from '../lib/ucFirst';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default class Project {

  name = ``
  deadline = ``
  consultday = ``
  note = ``
  created = ``
  modified = ``
  _id = ``
  isActive = ``

  constructor({
    _id,
    name,
    deadline,
    consultday,
    note,
    modified,
    created,
    isActive,
  }) {
    this.name = ucFirst(name);
    this.deadline = distanceInWordsToNow(deadline);
    this.consultday = consultday;
    this.note = note;
    this._id = _id;
    this.modified = modified;
    this.created = created;
    this.isActive = isActive;
  }

}
