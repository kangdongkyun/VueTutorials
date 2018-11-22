<template>
    <div>
        <p>message : {{message}}</p>
        <span title="마우스오버">커서를 올리시오.</span>
        <br>
        <span v-bind:title="message">커서를 올리면 message를 볼 수 있어요.</span>
        <br>
        <!-- v-bind 생략가능 -->
        <span :title="message">커서를 올리면 message를 볼 수 있어요.</span>
        <example3></example3>
    </div>    
</template>

<script>
    import Example3 from '@/components/Example3'

    export default {
        components:{
            Example3
        },
        data() {
            return {
                message : "Hello Vue.js!"
            }
        }
    }
</script>

<style scoped>

</style>