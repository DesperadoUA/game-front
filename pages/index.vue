<template>
      <div>
        <app_search />
        <app_popular_console />
        <app_block_image />
        <app_popular_games />
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
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
        /*
        const request = {
            url: 'main'
        }
        const response = await DAL_Page.getData(request)
        const body = response.data 
        const data = body
        data.body.currentUrl = process.env.BASE_URL + route.path 
        return {data}
        */
       const data = {
           body: {
               content: '<h1>Что такое Lorem Ipsum?</h1><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p><p>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p><p>Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>'
           }
       } 
       return {data}
    },
    head() {
        return {
            /*
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
            */
        }
    }
}
</script>

<style>

</style>
