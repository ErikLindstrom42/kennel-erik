const remoteURL = "http://localhost:5002"

export default {

  get(id, type) {
    return fetch(`${remoteURL}/${type}/${id}`).then(result => result.json())
  },

  getAll(type) {
    return fetch(`${remoteURL}/${type}`).then(result => result.json())
  },

  delete(id, type) {
    return fetch(`${remoteURL}/${type}/${id}`, {
      method: "DELETE"

    }).then(result => result.json())
  },

  postAnimal(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },

  postLocation(newLocation) {
    return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(data => data.json())
}

}