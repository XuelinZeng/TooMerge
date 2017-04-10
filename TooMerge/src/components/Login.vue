<template>
  <div>
  <img src="../assets/logo.png" />
  <div class="hello">
    <div>
		<h2>{{ msg }}</h2>
	</div>
    <!--<h2>Essential Links</h2>-->
    <!--<ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>-->
	<div>
    <p style="color:red" v-if="err" >错误的用户名和密码</p>
			<ul>
				<ui>
					用户名：
				</ui>
				<ui>
					<input type="text" name="username"  v-model="username" />
				</ui>
			</ul>
			<ul>
				<ui>
					密&nbsp&nbsp&nbsp&nbsp码：
				</ui>	
				<ui>
					<input type="password" name="username" v-model="password" />
				</ui>
			</ul>
      <div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="login">Greet</button>
  </div>
	</div>
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>-->
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '登陆页面',
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
