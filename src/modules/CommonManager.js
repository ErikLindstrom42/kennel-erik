const remoteURL = "http://localhost:5002"

export default {

  get(id,type) {
    return fetch(`${remoteURL}/${type}/${id}`).then(result => result.json())
  },

  getAll(type) {
    return fetch(`${remoteURL}/${type}`).then(result => result.json())
  },

  delete(id, type) {
    return fetch(`${remoteURL}/${type}/${id}`, {
      method: "DELETE"

    }).then(result => result.json())
  }

}