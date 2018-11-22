<template>
  <div id="app">
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="홈" to="/" md-icon="home"></md-tab>
      <md-tab id="tab-pages" md-label="예제1" to="/ex1" md-icon="pages"></md-tab>
      <md-tab id="tab-posts" md-label="예제2" to="/ex2" md-icon="pages"></md-tab>
      <md-tab id="tab-settings" md-label="예제3" to="/ex3" md-icon="pages"></md-tab>
    </md-tabs>
    <router-view/>
  </div>
</template>

    <!-- <md-button to="/" class="md-raised">홈으로</md-button>
    <md-button to="/ex1" class="md-raised">예제1</md-button>
    <md-button to="/ex2" class="md-raised">예제2</md-button>
    <md-button to="/ex3" class="md-raised">예제3</md-button> -->


    <!-- <router-link to="/"></router-link>
    <router-link to="/ex1"></router-link>
    <router-link to="/ex2"></router-link>
    <router-link to="/ex3"></router-link> -->
    
    
<script>
export default {
  name: 'App',
  
}
</script>
 