import api from '../lib/axios'

export default {
  getCategories() {
    return api.get('/list.php', { params: { c: 'list' } })
  },
  getRecipes(by) {
    const params = { i: by.name, c: by.category }

    return api.get('/filter.php', { params })
  },
  getRecipe(id) {
    return api.get('/lookup.php', { params: { i: id } })
  }
}
