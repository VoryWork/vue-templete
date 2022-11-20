<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" version="1.1">
        <path :d="path" />
    </svg>
</template>
    
<script setup lang='ts'>
const props=defineProps({
    path:String,
})
</script>
    
<style>

</style>