import api from '../plugins/api.ts'


export const getMethod = async (endpoint) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    console.log(e)
  }

  return null
}

export const deleteMethod = async (endpoint) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    console.log(e)
  }

  return null
}