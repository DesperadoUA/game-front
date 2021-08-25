<template>
<div class="loop_roms">
    <div class="container">
        <nuxt-link :to="item.permalink" class="loop_roms_item" v-for="(item, index) in value" :key="index">
            <span class="loop_roms_column">
                <img :src="item.thumbnail" />
            </span>
            <span class="loop_roms_column">
                {{item.title}}
            </span>
            <span class="loop_roms_column">
                <span>
                    <span class="loop_roms_ttl">Total roms:</span><br>
                    {{item.posts_count}}
                </span>
            </span>
            <span class="loop_roms_column">
                <span>
                    <span class="loop_roms_ttl">Total Downloads:</span><br>
                    {{item.totalDownloads}}
                </span>
            </span>
            <span class="loop_roms_column">
                <span>
                    <span class="loop_roms_ttl">Total Size:</span><br>
                    {{item.totalSize}}
                </span>
            </span>
        </nuxt-link>
    </div>
</div>
</template>

<script>
    export default {
        name: "app-loop-rooms",
        props: ['value'],
        data(){
            return {

            }
        },
    }
</script>
<style lang="scss" scope>
.loop_roms_column {
    font-family: var(--base-font-family);
    color: var(--theme-cr-txt-alt);
    font-size: 22px;
    font-weight: bold;
}
.loop_roms_column:nth-child(1) {
    width: 15%;
}
.loop_roms_column:nth-child(2) {
    width: 25%;
    padding: 10px;
    display: flex;
    align-items: center;
}
.loop_roms_column:nth-child(3), .loop_roms_column:nth-child(4), .loop_roms_column:nth-child(5) {
    width: 20%;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
}
.loop_roms_item {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
}
.loop_roms_column img {
    max-height: 95px;
}
.loop_roms_ttl {
    font-weight: 100;
    }
</style>
