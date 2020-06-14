import axios from 'axios'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001'

// Connect the backend and frontend based on REST endpoint and method
class Api {
  static async request(endpoint, params = {}, verb = 'get') {
    console.debug('API Call:', endpoint, params, verb)

    let q

    if (verb === 'get') {
      q = axios.get(`${BASE_URL}/${endpoint}`, { params: { ...params } })
    } else if (verb === 'put') {
      q = axios.put(`${BASE_URL}/${endpoint}`, { ...params })
    }

    try {
      return (await q).data
    } catch (err) {
      console.error('API Error:', err.response)
      let message = err.response.data.message
      throw Array.isArray(message) ? message : [message]
    }
  }

  // Api call for all businesses
  // splice the array from 50k to 50
  static async getBusinesses() {
    let res = await this.request('business')
    res = res.business.splice(50, 50)
    return res
  }
  // Api call for one business based on id
  static async getBusiness(id) {
    let res = await this.request(`business/${id}`)
    return res.business
  }
  // Api call from editing business based on id and sent data
  static async editBusiness(id, data) {
    let res = await this.request(`business/${id}`, data, 'put')
    console.log('API', res)
    return res
  }
}

export default Api
