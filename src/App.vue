<template>
  <div id="app">
    <div class="tab">
    	<div class="tab-items">
    		<router-link to="/theaters">正在热映</router-link>
    	</div>
    	<div class="tab-items">
    		<router-link to="/coming">即将上映</router-link>
    	</div>
    	<div class="tab-items">
    		<router-link to="/top250">Top250</router-link>
    	</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'


export default {
  components:{
  }
}
</script>

<style>
#app{
  padding-top: 40px;
  background: #f1f1f1;
}

#app>.tab{
	display: flex;
	width: 100%;
	line-height: 40px;
	height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background: #f5f5f5;
}
#app>.tab>.tab-items{
	flex: 1;
}
.tab>.tab-items>a{
	display: block;
	text-align: center;
	font-size: 16px;
}
.active{
	color: rgb(240,20,20);
}
</style>
