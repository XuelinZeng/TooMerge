<template>
<div class="page-wrapper">
  <banner></banner>
  <div class="page-container">
    <leftnav></leftnav>
    <div class="page-content-wrapper">
    <div class="col-sm-9 col-sm-offset-2 col-md-10 main" style="padding-top:30px; padding-left:100px; background-color:white; height:1000px">
            <div v-for="(item,i) in webs" class="form-group" id="url-add">
              <input type="text" class="form-control" id="url" placeholder="Please input the url you want to merge" style="width:600px" v-model:value="webs[i]" />
            </div>

            <div class="ratio" style="height:40px">
              <label class="radio-inline" style="width:250px">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="horrizontal" v-model="picked"> horrizontal
              </label>
              <label class="radio-inline" style="width:250px">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="vertical" v-model="picked"> vertical
              </label>
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="custom" v-model="picked"> custom
              </label>

            </div>

              <div v-if="custom" class="form-group" id="url-add">
                <input  type="text" class="form-control" id="url" placeholder="Please input the amount of collums" style="width:600px" v-model="rownumber">
              </div>

            <button v-on:click="addValue()" class="btn green btn-outline" style="width:298px">Add</button>
            <button v-on:click="submitToEdit()" type="button" class="btn green" style="width:298px">Submit</button>
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
      webs: ['https://www.baidu.com', 'https://www.jd.com', 'http://www.abd.com/'],
      picked: '',
      rownumber: 0
    }
  },
  computed: {
    custom: function () {
      return this.picked === 'custom'
    }
  },
  methods: {
    addValue () {
      this.webs.push('')
    },
    submitToEdit () {
      this.$store.commit('SET_WEBS', this.webs)
      this.$store.commit('SET_ROWNUMBER', this.rownumber)
      console.log(this.$store.state.webs.length)
      this.$router.push('/edit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
