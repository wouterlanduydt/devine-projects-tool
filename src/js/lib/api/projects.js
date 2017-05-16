import fetch from 'isomorphic-fetch';

const url = `/api/projects`;

export default {

  read: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  create: (name, deadline, consultday, note) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`name`, name);
    body.append(`deadline`, deadline);
    body.append(`consultday`, consultday);
    body.append(`note`, note);

    return fetch(url, {method, body})
      .then(r => r.json());
  },

  delete: _id => {
    const method = `DELETE`;

    return fetch(`${url}/${_id}`, {method});
  }

  // EDIT

};
