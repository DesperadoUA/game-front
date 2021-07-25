<template>
  <div class="recomended-games">
      <div class="recomended-games-ttl">
          {{title}}
      </div>
      <div class="recomended-games-wrapper">
          <div class="recomended-games-item" v-for="(item, index) in list" :key="index">
              <nuxt-link :to="item.permalink" >
                  <img :src="item.thumbnail" />
              </nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "app-recomendet-games",
        props: ['title', 'list'],
        data(){
            return {

            }
        },
    }
</script>
<style lang="scss" scope>
    .recomended-games-wrapper {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .recomended-games-item {
        width: 90px;
        margin: 10px;
    }
    .recomended-games {
        width: 65%;
    }
    .recomended-games {
        margin-top: 70px;
        color: var(--theme-cr-txt-alt);
        font-size: 22px;
    }
    .recomended-games-ttl {
        margin-bottom: 20px;
    }
</style>
