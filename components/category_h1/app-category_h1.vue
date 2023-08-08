<template>
<div class="cms">
    <div class="container">
        <h1 v-html="value"></h1>
    </div>
</div>
</template>

<script>
    export default {
        name: "app-category_h1",
        props: ['value'],
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss" scope>

</style>