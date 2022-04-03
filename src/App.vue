<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="书名">
        <el-input v-model="formInline.bookname" placeholder="书名"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formInline.author" placeholder="作者"></el-input>
      </el-form-item>
      <el-form-item label="出版社">
        <el-input v-model="formInline.publisher" placeholder="出版社"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" max-height="100%">
      <el-table-column fixed prop="id" label="编号" width="100"> </el-table-column>
      <el-table-column prop="bookname" label="书名" width="300"> </el-table-column>
      <el-table-column prop="author" label="作者" width="200"> </el-table-column>
      <el-table-column prop="publisher" label="出版社" width="400"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 移除 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      formInline: {
        bookname: '',
        author: '',
        publisher: ''
      }
      // tableData: [
      //   {
      //     name: '西游记',
      //     author: '黄贯中',
      //     publisher: '北京大学出版社'
      //   }
      // ]
    }
  },
  created() {
    this.$store.dispatch('getData')
  },
  computed: {
    ...mapState(['tableData'])
  },
  methods: {
    onSubmit() {
      // console.log(this.formInline)
      this.$store.dispatch('addData', this.formInline)
    },
    deleteRow($index, tableData) {
      console.log($index, tableData)
      // this.$store.commit('queryById', $index)

      this.$store.dispatch('deleteByIds', tableData[$index].id)
      // console.log(tableData)
      // console.log($index)
      // console.log(tableData[$index].id)
    }
  }
}
</script>

<style></style>
