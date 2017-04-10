<template>
  <div class="col-md-3 col-md-offset-4" style="background-color:white;height:600px;width:350px;padding-top:50px">

  
  <div class="hello">
    <div>
		<h2 style="text-align:center">{{ msg }}</h2>
	</div>
	<div>
    <p style="color:red" v-if="err" >错误的用户名和密码</p>
			<ul>
				<ui>
					<input type="text" class="form-control" name="username" style="width:300px" placeholder="username" v-model="username" />
				</ui>
			</ul>
			<ul>
				<ui>
					<input type="password" class="form-control" name="password" style="width:300px" placeholder="password" v-model="password" />
				</ui>
			</ul>
      <div id="example-2">
  
  <button v-on:click="login" class="btn green" style="width:300px">Greet</button>
  </div>
	</div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Sign In',
      username: '',
      password: ''
    }
  },
  computed: {
    err: function () { return this.$route.query.err != null }
  },
  methods: {
    login: function (event) {
      this.$router.go('/edit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
