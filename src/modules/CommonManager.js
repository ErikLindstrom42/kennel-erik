const remoteURL = "http://localhost:5002"

export default {

  getAll(type) {
    return fetch(`${remoteURL}/${type}`).then(result => result.json())
  },

delete(id,type) {
    return fetch(`${remoteURL}/${type}/${id}`, {
      method: "DELETE"

    }).then(result => result.json())
  }

}