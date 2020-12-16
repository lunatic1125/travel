export default {
  tagListChange(state, info) {
    state.taginfo = info;
  },
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city
    } catch (error) { }
  }
}