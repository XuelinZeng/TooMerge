<template>
    <iframe :src="url" :style="{width:iframe_width + 'px', height:600 +'px', margin:20 +'px'}"></iframe>
</template>

<script>
export default {
  name: 'block',
  props: ['url', 'rowPerItem'],
  data () {
    return {
      webs: ['https://www.baidu.com', 'https://www.jd.com']
    }
  },

  computed: {
    iframe_width: function () {
      return Math.floor(900 / this.rowPerItem)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
