<template>
    <div>
        <input v-model="inputData"/>
        <!-- <br> -->
        입력된 값 : {{inputData}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputData : ''
            }
            
        }
    }
</script>

<style scoped>

</style>