<template>
   <div class="popular_console">
        <div class="container">
            <div class="popular_console_wrapper_title">
                <div class="popular_console_ttl">Popular Console</div>
                <nuxt-link to="/console" class="popular_console_link">VIEW All</nuxt-link>
            </div>
            <div class="populer_console_wrapper">
                <div class="popular_console_item">
                    <nuxt-link to="#">
                        <img src="http://localhost:3000/img/console.png" class="popular_console_item_img" />
                    </nuxt-link>
                </div>
                <div class="popular_console_item">
                    <nuxt-link to="#">
                        <img src="http://localhost:3000/img/console.png" class="popular_console_item_img" />
                    </nuxt-link>
                </div>
                <div class="popular_console_item">
                    <nuxt-link to="#">
                        <img src="http://localhost:3000/img/console.png" class="popular_console_item_img" />
                    </nuxt-link>
                </div>
                <div class="popular_console_item">
                    <nuxt-link to="#">
                        <img src="http://localhost:3000/img/console.png" class="popular_console_item_img" />
                    </nuxt-link>
                </div>
                <div class="popular_console_item">
                    <nuxt-link to="#">
                        <img src="http://localhost:3000/img/console.png" class="popular_console_item_img" />
                    </nuxt-link>
                </div>
                <div class="popular_console_item">
                    <nuxt-link to="#">
                        <img src="http://localhost:3000/img/console.png" class="popular_console_item_img" />
                    </nuxt-link>
                </div>
            </div>
        </div>    
   </div>
</template>
<script>
    export default {
        name: "app_popular_console",
        data(){
            return {
                posts: []
            }
        },
    }
</script>

<style lang="scss">
.popular_console_wrapper_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.popular_console_ttl {
    font-family: var(--base-font-family);
    color: var(--theme-cr-txt-alt);
    font-size: 32px;
}
.popular_console_link {
    color: var(--theme-cr-4);
}
.populer_console_wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0px;
    justify-content: space-between;
}
.popular_console_item {
    width: 295px;
    height: 315px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    margin: 20px 0px;
    padding: 20px;
}
.popular_console_item_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
