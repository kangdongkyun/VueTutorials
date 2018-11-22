<template>
  <div id="app">
    <md-button to="/" class="md-raised">홈으로</md-button>
    <md-button to="/ex1" class="md-raised">예제1</md-button>
    <md-button to="/ex2" class="md-raised">예제2</md-button>
    <md-button to="/ex3" class="md-raised">예제3</md-button>


    <!-- <router-link to="/"></router-link>
    <router-link to="/ex1"></router-link>
    <router-link to="/ex2"></router-link>
    <router-link to="/ex3"></router-link> -->
    <router-view/>
  </div>
</template>
    
<script>
export default {
  name: 'App',
  
}
</script>
 