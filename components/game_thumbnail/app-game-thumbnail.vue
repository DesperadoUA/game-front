<template>
<div class="game-thumbnail">
   <div class="game-thumbnail-left">
       <img :src="thumbnail" class="game-thumbnail-img">
   </div>
   <div class="game-thumbnail-right">
       <table>
           <tbody>
               <tr>
                   <td>
                       FULL NAME:
                   </td>
                   <td>
                       {{list.fullName}}
                   </td>
               </tr>
               <tr>
                   <td>
                       FULL SIZE:
                   </td>
                   <td>
                       {{list.fullSize}}
                   </td>
               </tr>
               <tr>
                   <td>
                       REGION:
                   </td>
                   <td>
                       {{list.region}}
                   </td>
               </tr>
               <tr>
                   <td>
                       CONSOLE:
                   </td>
                   <td>
                       {{list.console}}
                   </td>
               </tr>
               <tr>
                   <td>
                       GENRE:
                   </td>
                   <td>
                       {{list.genre}}
                   </td>
               </tr>
               <tr>
                   <td>
                       DOWNLOADS:
                   </td>
                   <td>
                       {{list.downloads}}
                   </td>
               </tr>
               <tr>
                   <td>
                       RATING:
                   </td>
                   <td>
                       <div class="item_rating_box">
                           <div class="item_rating_empty"></div> 
                           <div class="item_rating_full" :style="{ width: list.rating + '%' }" ></div>
                        </div>
                   </td>
               </tr>
           </tbody>
       </table>
       <nuxt-link class="download_game" :to="link" target="_blank">
           Download
       </nuxt-link>
   </div>
</div>
</template>

<script>
    export default {
        name: "app-game-thumbnail",
        props: ['thumbnail', 'list', 'link'],
        data(){
            return {

            }
        },
    }
</script>
<style lang="scss" scope>
.game-thumbnail {
    display: flex;
}
.game-thumbnail-left {
    width: 40%;
    padding: 10px;
}
.game-thumbnail-right {
    width: 60%;
    padding: 10px;
}
.game-thumbnail-img {
    width: 100%;
}
.game-thumbnail tbody {
    background: transparent;
    min-width: auto;
}
.game-thumbnail table {
    background: transparent;
    margin-bottom: 25px;
}
.game-thumbnail td {
    padding: 2px 0px;
    color: var(--theme-cr-txt-alt);
    font-size: 15px;
}
.game-thumbnail td:nth-child(1) {
    width: 30%;
    font-weight: 100;
}
.item_rating_box {
    margin: 0;
    padding: 0;
    width: 120px;
    height: 24px;
    position: relative;
}
.item_rating_empty {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: var(--star_empty);
}
.item_rating_full {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--star_full);
}
.download_game {
    padding: 10px 55px;
    width: 227px;
    height: 38px;
    background: #0472D7;
    border-radius: 10px;
    margin: 28px 0px;
    text-decoration: none;
    color: var(--theme-cr-txt-alt);
}
</style>
