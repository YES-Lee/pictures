<template>
  <div class="picture-wrapper">
    <ul class="image-list">
      <li class="image-item" v-for="image of imageList" :key="image.name">
        <img class="image-item__image" :src="image.path" :alt="image.filename">
        <div class="mask">
          <button class="view" @click="handleView(image)">查看</button>
          <button class="view" @click="handleCopy(image)">拷贝</button>
        </div>
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
  },
  methods: {
    handleView (image) {
      window.open(image.path, '_blank')
    },
    handleCopy (image) {
      const url = window.location.origin + image.path
      window.navigator.clipboard.writeText(url).then(() => {
        window.alert('地址已拷贝')
      }).catch(() => {
        window.alert('拷贝失败，请手动复制：' + url)
      })
    }
  }
}
</script>

<style lang="less">
.image-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  .image-item {
    display: block;
    margin-left: 10px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    &__image {
      display: block;
      width: 128px;
      height: 128px;
    }

    .mask {
      position: absolute;
      background: rgba(0,0,0,0.3);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: none;
    }

    &:hover .mask {
      display: block;
    }
  }
}
</style>
