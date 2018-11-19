<template>
  <div id="app">
    <router-link to="/">홈으로</router-link>
    <router-link to="/ex1">예제1</router-link>
    <router-link to="/ex2">예제2</router-link>
    <router-link to="/ex3">예제3</router-link>
    <router-view/>
  </div>
</template>
    
<script>
export default {
  name: 'App'
}
</script>
