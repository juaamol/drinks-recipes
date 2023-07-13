import api from '../lib/axios'

export default {
  getCategories() {
    return api.get('/list.php?c=list')
  }
}
