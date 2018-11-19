<template>
    <div>
        <p>  {{msg1}}  </p>
       <button v-on:click="reverseText">뒤집기</button>
       <br>
       <p>  {{msg2}}  </p>
       <button @click="changeText">텍스트 변경</button>
       <br>
        <p> {{reverse}}</p>
    </div>
</template>

<script>
    export default {
        data() { return{
            msg1 : "안녕하세요!",
            msg2 : "KOREATECH",
            msg3 : "강동균"
            }
        },
        methods:{
            reverseText: function(){
                this.msg1 = this.msg1.split('').reverse().join('');
            },
            changeText: function(){
                this.msg2 = '한국기술교육대학교';
            }
        },
        computed :{
            
            reverse: function(){
                return this.msg3 = this.msg3.split('').reverse().join('');
            }
        
        }
    }
</script>

<style scoped>

</style>