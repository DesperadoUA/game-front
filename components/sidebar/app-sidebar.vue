<template>
    <div class="sidebar">
        <div class="sidebar_ttl">{{title}}</div>
        <nav>
            <ul class="sidebar_menu">
                <li class="sidebar_menu_item" v-for="(item, index) in list" :key="index">
                    <nuxt-link :to="item.permalink">
                            {{item.title}}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "app-sidebar",
        props: ['title', 'list'],
        data(){
            return {

            }
        },
    }
</script>
<style lang="scss" scope>
.sidebar {
    padding: 10px;
}
.sidebar_ttl {
    font-family: var(--base-font-family);
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;
    color: var(--theme-cr-txt-alt);
    margin-bottom: 20px;
}
.sidebar_menu_item {
    margin-bottom: 10px;
}
.sidebar_menu_item a {
    color: var(--theme-cr-4);
    text-decoration: none;
}
</style>
