<template>
   <div>
        <ul class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
            <li class="breadcrumbs-item" v-for="(item, index) in value" :key="index" 
            itemprop="itemListElement" itemscope
            itemtype="http://schema.org/ListItem">
                <span v-if="index !== value.length-1">
                   <nuxt-link :to='item.path'  itemprop='item'><span  itemprop='name'>{{item.title}}</span> / </nuxt-link>
                   <meta itemprop='position' :content='index' />
                </span>
                <span v-else>
                    <span  itemprop='name'>
                    <meta itemprop='position' :content='index' />
                    {{item.title}}
                    </span>
                </span>
            </li>
        </ul>
   </div>
</template>

<script>
    export default {
        name: "app-breadcrumbs",
        props: ['value'],
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss" scope>
    .breadcrumbs {
        list-style: none;
        font-family: var(--alt-font-family);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 17px;
        color: var(--theme-cr-txt-alt);
    }
    .breadcrumbs-item {
        display: inline-block;
        padding-left: 5px;
    }
    .breadcrumbs-item a {
        color: var(--theme-cr-5);
        text-decoration: none;
    }
</style>
