<template>
 <div class="page-wrapper">
    <banner></banner>
    <div class="page-container">
      <leftnav></leftnav>
      <div class="col-md-10 col-md-offset-2 main">
          <div class="col-md-6">
                                
                                <div class="portlet light bordered" >
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class="icon-share font-green-sharp"></i>
                                            <span class="caption-subject font-green-sharp bold uppercase">合并历史</span>
                                        </div>
                                    </div>
                                    
									<div class="clearfix">
                                            <!--<h4 class="block">合并历史</h4>-->
                                            <div class="panel panel-success">
                                                
                                                <div class="panel-body">
                                                </div>
                                                <!-- Table -->
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th> # </th>
                                                            <th> 合并历史 </th>
                                                            <th> URL </th>
                                                            <!--<th> Username </th>-->
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> 1 </td>
                                                            <td> mergedTab1 </td>
                                                            <td> http://www.xinjunshi.net/?hao123 </td>
                                                            <!--<td> @mdo </td>-->
                                                        </tr>
                                                        <tr>
                                                            <td> 2 </td>
                                                            <td> mergedTab2 </td>
                                                            <td> http://military.china.com/zh_cn/ </td>
                                                            <!--<td> @fat </td>-->
                                                        </tr>
                                                        <tr>
                                                            <td> 3 </td>
                                                            <td> mergedTab3 </td>
                                                            <td> http://www.thepaper.cn/</td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
														<tr>
                                                            <td> 4 </td>
                                                            <td> mergedTab4 </td>
                                                            <td> http://www.pcauto.com.cn/</td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
														<tr>
                                                            <td> 5 </td>
                                                            <td> mergedTab5 </td>
                                                            <td> http://www.tiexue.net/ </td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
														<tr>
                                                            <td> 6 </td>
                                                            <td> mergedTab6 </td>
                                                            <td> http://news.ifeng.com/mil/ </td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
														<tr>
                                                            <td> 7 </td>
                                                            <td> mergedTab7 </td>
                                                            <td> http://www.huanqiu.com/ </td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
														<tr>
                                                            <td> 8 </td>
                                                            <td> mergedTab8 </td>
                                                            <td> https://www.renrenche.com/ </td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
														<tr>
                                                            <td> 9 </td>
                                                            <td> mergedTab9 </td>
                                                            <td> http://mil.news.sina.com.cn/ </td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
														<tr>
                                                            <td> 10 </td>
                                                            <td> mergedTab10 </td>
                                                            <td> http://www.youku.com/ </td>
                                                            <!--<td> @twitter </td>-->
                                                        </tr>
                                                    </tbody>
                                                </table>
												<p id="dynamic_pager_demo2" style="text-align: center"> 
													<ul class="pagination bootpag">
														
													</ul>
												</p>
                                            </div>
                                        </div>
									</div>
                                </div>
    
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
      webs: ['https://www.baidu.com', 'https://www1.baidu.com', 'http://123.com'],
      rowPerItem: 3
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
