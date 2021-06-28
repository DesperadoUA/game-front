<template>
   <div class="popular_games">
        <div class="container">
            <div class="popular_games_wrapper_title">
                <div class="popular_games_ttl">Popular Game Roms</div>
                <nuxt-link to="/games" class="popular_games_link">VIEW All</nuxt-link>
            </div>
            <div class="populer_console_wrapper">
                <div class="popular_games_item">
                    <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
                <div class="popular_games_item">
                   <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
                <div class="popular_games_item">
                   <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
                <div class="popular_games_item">
                    <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
                <div class="popular_games_item">
                   <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
                <div class="popular_games_item">
                   <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
                <div class="popular_games_item">
                   <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
                <div class="popular_games_item">
                    <div class="popular_games_img">
                        <nuxt-link to="#">
                            <img src="http://localhost:3000/img/games.png" class="popular_games_item_img" />
                        </nuxt-link>
                    </div>
                    <nuxt-link to="#" class="popular_games_item_ttl">
                        Pokemon - Fire Red Version (V1.1)
                    </nuxt-link>
                </div>
            </div>
        </div>    
   </div>
</template>
<script>
    export default {
        name: "app_popular_games",
        data(){
            return {
                posts: []
            }
        },
    }
</script>

<style lang="scss">
.popular_games_wrapper_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.popular_games_ttl {
    font-family: var(--base-font-family);
    color: var(--theme-cr-txt-alt);
    font-size: 32px;
}
.popular_games_link {
    color: var(--theme-cr-4);
}
.populer_console_wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0px;
    justify-content: space-between;
}
.popular_games_item {
    width: 225px;
    border-radius: 10px;
    margin: 20px 0px;
}
.popular_games_item_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.popular_games_img {
     width: 225px;
    height: 198px;
}
.popular_games_item_ttl {
    font-family: var(--base-font-family);
    color: var(--theme-cr-txt-alt);
    text-decoration: none;
    margin-top: 15px;
    display: block;
}
</style>
