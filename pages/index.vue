<template>
      <div>
        <app_search :title="data.body.h1" :description="data.body.short_desc" />
        <app_popular_console :value="data.body.category" />
        <app_block_image />
        <app_popular_games :value="data.body.rome"/>
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Builder from '~/DAL/builder'
   import app_content from '~/components/content/app-content'
   import app_search from '~/components/search/app-search.vue'
   import app_popular_console from '~/components/popular_console/app_popular_console'
   import app_popular_games from '~/components/popular_games/app_popular_games'
   import app_block_image from '~/components/block_image/app_block_image.vue'
export default {
    name: "main-page",
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_content, app_search, app_popular_console, app_popular_games, app_block_image},
    async asyncData({store, route}) {
        const request = new DAL_Builder()
        const response = await request.postType('pages')
                                      .url('main')
                                      .get()
        const body = response.data 
        const data = body
        data.body.currentUrl = process.env.BASE_URL + route.path 
       return {data}
    },
    head() {
        return {
            title: this.data.body.meta_title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.data.body.description
                },
            ],
            link: [
                { rel: 'canonical', href: this.data.body.currentUrl}
            ]
        }
    }
}
</script>

<style>

</style>
