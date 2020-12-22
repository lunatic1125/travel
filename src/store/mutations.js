export default {
  tagListChange(state, info) {
    state.taginfo = info;
  },
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city
    } catch (error) { }
  },
  getTravels(state, arr) {
    state.travels = arr
  },
  getRecommend(state, arr) {
    state.recommend = arr
  },
  getMytravel(state, obj) {
    state.mytravel = obj

  }
}