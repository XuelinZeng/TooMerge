<template>
    <div>
    <div v-for="item in webs">
    <block :url="item"></block>
    </div>
    </div>
</template>

<script>
import block from '@/components/block'

export default {
  components: {
    block
  },
  name: 'MainEdit',
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
