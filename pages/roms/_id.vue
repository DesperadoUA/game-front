<template>
      <div>
        <app_category_h1 :value="data.body.h1" />
        <app_search_roms />
        <app_loop_games :value="data.body.posts" />
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Builder from '~/DAL/builder'
   import config from '~/config/index'
   import app_content from '~/components/content/app-content'
   import app_category_h1 from '~/components/category_h1/app-category_h1'
   import app_loop_games from '~/components/loop-games/app-loop-games'
   import app_search_roms from '~/components/search-roms/app-search-roms' 
export default {
    name: "single-roms",
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_content, app_category_h1, app_loop_games, app_search_roms},
    async asyncData({store, route}) {
       const request = new DAL_Builder()
        const response = await request.setCategory('category')
                                          .url(route.params.id)
                                          .get()
        if(response.data.confirm === 'error') {
                 error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const body = response.data.body
            const data = {body}
            data.body.currentUrl = config.BASE_URL + route.path
            return {data}
        }
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
