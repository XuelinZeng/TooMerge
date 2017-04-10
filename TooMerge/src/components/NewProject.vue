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

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">New Project <span class="sr-only">(current)</span></a></li>
            <li><a href="http://v3.bootcss.com/examples/dashboard/#">User Profile <span class="sr-only">(current)</span></a></li>
            <li><a href="http://v3.bootcss.com/examples/dashboard/#">Historical Project</a></li>
            <li><a href="http://v3.bootcss.com/examples/dashboard/#">Historical Layout</a></li>
          </ul>
        </div>
        
        <div class="col-sm-9 col-sm-offset-3 col-md-10 main">
      
        </div>
      </div>
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
