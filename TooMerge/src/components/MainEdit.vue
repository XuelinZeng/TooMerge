<template>
 <div class="page-wrapper">
    <banner></banner>
    <div class="page-container">
      <leftnav></leftnav>
      <!--<div class="col-md-10 col-md-offset-2 main">
        <div v-for="n in RowNumber" class="row ui-sortable" id="sortable_protlets">
          <span>
            <div class="collum sortable">
              <block v-for="i in rowPerItem" :key="i" :url="getURL(webs,n,i)" :rowPerItem="rowPerItem" v-if="getURL(webs,n,i)"></block>
            </div>
          </span>
        </div>
      </div>-->
      <div class="col-md-10 col-md-offset-2 main">
          <div class="container-fluid row" v-for="n in sRowNumber">
            <span>
              <block v-for="i in rowPerItem" :key="i" :url="getURL(webs,n,i)" :rowPerItem="rowPerItem" v-if="getURL(webs,n,i)"></block>
            </span>
          </div>
      </div>
      <div class="side-bar">  
        <button type="button" class="btn btn-success">Save</button>  
      </div>
    
    </div>
  </div> 
</template>

<script>
import block from '@/components/block'
import banner from '@/components/banner'
import leftnav from '@/components/leftnav'

export default {
  components: {
    block,
    banner,
    leftnav
  },
  name: 'MainEdit',
  data () {
    return {
      webs: ['https://www.baidu.com', 'https://www1.baidu.com', 'http://hao123.com'],
      rowPerItem: 2
    }
  },
  computed: {
    sRowNumber: function () {
      return Math.ceil(this.webs.length / this.rowPerItem)
    }
  },
  methods: {
    getURL (webArray, n, i) {
      console.log(webArray, n, i)
      let index = (n - 1) * this.rowPerItem + (i - 1)
      return index < webArray.length ? webArray[index] : 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar {width: 66px;position: fixed;bottom: 20px;right: 25px;font-size: 0;line-height: 0;z-index: 100;} 
.side-bar a {width: 66px;height: 66px;display: inline-block;background-color: #ddd;margin-bottom: 2px;} 
.side-bar a:hover {background-color: #669fdd;} 
.side-bar .icon-qq {background-position: 0 -62px;} 
.side-bar .icon-chat {background-position: 0 -130px;position: relative;} 
.side-bar .icon-blog {background-position: 0 -198px;} 
.side-bar .icon-mail {background-position: 0 -266px;} 
</style>
