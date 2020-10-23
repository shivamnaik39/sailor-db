import axios from 'axios'

const url = 'http://localhost:5000/sailor/'

class SailorService {
  // Get All  Sailors
  static getSailors () {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }

  // Get a Single Sailor
  static getSailor (id) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}${id}`)
        const data = res.data
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }

  // Add a Single Sailor
  static AddSailor (sailor) {
    return axios.post(url, sailor)
  }

  // Update a Sailor
  static UpdateSailor (id, sailor) {
    return axios.patch(`${url}${id}`, sailor)
  }

  // Delete a Sailor
  static DeleteSailor (id) {
    return axios.delete(`${url}${id}`)
  }
}

export default SailorService
