<template>
    <iframe :src="url"></iframe>
</template>

<script>
export default {
  name: 'block',
  props: ['url'],
  data () {
    return {
      webs: ['https://www.baidu.com', 'https://www.jd.com']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
