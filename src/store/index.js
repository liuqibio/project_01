import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formInline: {
      id: '',
      name: '',
      author: '',
      publisher: ''
    },
    tableData: []
  },
  getters: {},
  mutations: {
    initData(state, val) {
      state.tableData = val
    },
    queryById(state, val) {
      console.log(val)
      // state.formInline.id = val
      // deleteByIds(val)
    }
  },
  actions: {
    async getData(context) {
      // const { data: res } = await axios.get('data.json')
      const { data: res } = await axios.get('http://www.liulongbin.top:3006/api/getbooks')
      // console.log(res.data)
      context.commit('initData', res.data)
    },
    async deleteByIds(context, val) {
      const { data: res } = await axios.get('http://www.liulongbin.top:3006/api/delbook/', { id: Number(val) })
      // console.log(index)
      // console.log(val)
      // console.log(state.formInline.id)
      // context.commit('queryById')
      if (res.status !== 200) {
        alert(res.msg)
      }
    },
    async addData(context, val) {
      const { data: res } = await axios.post('http://www.liulongbin.top:3006/api/addbook/', {
        bookname: val.bookname,
        author: val.author,
        publisher: val.publisher
      })
      // console.log(val)
      // console.log(val.bookname)
      // console.log(val.author)
      // console.log(val.publisher)
      // console.log(state.formInline.id)
      // context.commit('queryById')
      if (res.status !== 200) {
        alert(res.msg)
      }
    }
  },
  modules: {}
})
