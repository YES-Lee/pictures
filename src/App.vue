<template>
  <div class="picture-wrapper">
    <ul>
      <li v-for="image of imageList" :key="image.name">
        {{image.path}}
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      imageList: []
    }
  },
  created () {
    Axios.get('/api/list').then(result => {
      this.imageList = result.data
    })
  }
}
</script>

<style lang="less">
</style>
