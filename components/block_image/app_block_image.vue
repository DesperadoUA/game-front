<template>
    <div class="block_image">
        <div class="block_image_left">
            <img src="/img/img_2.png" class="block_image_1" />
            <img src="/img/img_1.png" class="block_image_2" />
            <img src="/img/img_3.png" class="block_image_3" />
        </div>
        <div class="block_image_right">
            <h2 class="block_image_ttl">Rom Games Download</h2>
            <p>You can spend a lot of time looking for them, or you can simply find anything that you need on our website. The most popular games such as: Super Mario, Pokemon, Contra, Zelda, Crash Bandicoot, Tekken 3, God of War, Grand Theft Auto</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "app_block_image",
        data(){
            return {
               
            }
        },
    }
</script>

<style lang="scss">
.block_image {
    display: flex;
    padding: 35px;
    background: var(--theme-cr-txt-alt);
    border-radius: 10px;
    margin-top: 45px;
    margin-bottom: 45px;
    overflow: hidden;
}
.block_image_1 {
    position: absolute;
    left:0px;
    top:-37px;
    z-index: 1;
}
.block_image_2 {
    position: absolute;
    left:30px;
    top:-36px;
    z-index: 2;
}
.block_image_3 {
    position: absolute;
    left:0px;
    bottom:-35px;
    z-index: 1;
}
.block_image_left {
    width: 40%;
   position: relative;
}
.block_image_right {
    width: 60%;
}
.block_image p {
    padding-left: 30px;
}
</style>
