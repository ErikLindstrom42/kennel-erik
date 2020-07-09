const remoteURL = "http://localhost:5002"

export default {

  getAll(type) {
    return fetch(`${remoteURL}/${type}`).then(result => result.json())
  }
}