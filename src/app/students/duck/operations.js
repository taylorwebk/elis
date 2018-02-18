import axios from 'axios'
import creators from './actions'
import { baseip } from '../../../utils'

const requestStudentJsonAction = creators.requestStudentJson
const receiveStudentJsonAction = creators.receiveStudentJson

const arrayToObject = array => (
  array.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})
)

const fetchStudentsJson = () => (dispatch) => {
  dispatch(requestStudentJsonAction())
  return axios.get(`${baseip}student`)
    .then((res) => {
      const { data } = res
      const content = data.content.reduce((result, item) => {
        const module = {
          id: item.id,
          des: item.des,
          nombre: item.nombre,
          dia: item.dia,
          ini: item.ini,
          fin: item.fin,
          instructores: arrayToObject(item.instructores),
          estudiantes: arrayToObject(item.estudiantes)
        }
        result[item.id] = module
        return result
      }, {})
      dispatch(receiveStudentJsonAction(data.usrmsg, content))
    })
}
export default {
  fetchStudentsJson
}
