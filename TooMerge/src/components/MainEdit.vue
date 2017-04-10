<template>
 <div>
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="http://v3.bootcss.com/examples/dashboard/#">TooMerge</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a style="padding-top:10px;padding-bottom:5px"><img src="../assets/test.jpg" height="30" width="30" class="img-responsive"></a></li>
            <li><a href="http://v3.bootcss.com/examples/dashboard/#">Test Lee</a></li>
            <li><a href="http://v3.bootcss.com/examples/dashboard/#">Log Out</a></li>
            <li><a href="http://v3.bootcss.com/examples/dashboard/#">Help</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>
         
    <div class="col-md-10 col-md-offset-2 main">
          <div class="container-fluid row" v-for="n in sRowNumber">
            <span>
            <block v-for="i in rowPerItem" :key="i" :url="getURL(webs,n,i)" :rowPerItem="rowPerItem" v-if="getURL(webs,n,i)"></block>
          </span>
        </div>
      </div>
            <div class="side-bar">  
    <button type="button" class="btn btn-default btn-lg">Save</button>  
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
      webs: ['https://www.baidu.com', 'https://www1.baidu.com', 'http://hao123.com'],
      rowPerItem: 2
    }
  },
  computed: {
    sRowNumber: function () {
      return Math.floor(this.webs.length / this.rowPerItem) + 1
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
