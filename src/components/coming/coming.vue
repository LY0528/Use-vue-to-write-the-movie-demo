<template>
  <div id="container" class="clearfix">
    <ul class="theaters">
      <li v-for='item in theater.subjects'>
        <img v-lazy="item.images.medium">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import {
  Lazyload
} from 'mint-ui'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Lazyload)
export default {
  data() {
      return {
        theater: {}
      }
    },
    created() {
      this.$http.jsonp('//api.douban.com/v2/movie/coming_soon', {}).then(function(res) {
        this.theater = res.body
      })
    }
}
</script>
<style type="text/css">
image[lazy=loading] {
  width: 200px;
  height: 300px;
  margin: auto;
}
.clearfix:after{
	content: '';
	height: 0;
	line-height: 0;
	display: block;
	visibility: hidden;
	clear: both;
}

.theaters>li {
	float: left;	
  width: 50%;
  text-align: center;
  padding-bottom: 1%;
}
.theaters>li img{
	width: 95%;
}
</style>
