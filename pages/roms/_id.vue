<template>
      <div>
        <app_category_h1 :value="data.body.h1" />
        <app_search_roms />
        <app_loop_games :value="data.body.posts" />
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
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
               content: '<h1>Что такое Lorem Ipsum?</h1><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p><p>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p><p>Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>',
               h1: 'GAMEBOY / GB ROMS',
               posts: [
                   {
                       permalink: '/roms/playstation',
                       thumbnail: 'http://localhost:3000/img/games.png',
                       title: 'Playstation',
                       rating: '4.7/5',
                       totalDownloads: '10',
                       totalSize: '7.9 mb'
                   },
                   {
                       permalink: '/roms/playstation-2',
                       thumbnail: 'http://localhost:3000/img/games.png',
                       title: 'Playstation 2',
                       rating: '4.7/5',
                       totalDownloads: '10',
                       totalSize: '7.9 mb'
                   },
                   {
                       permalink: '/roms/playstation-3',
                       thumbnail: 'http://localhost:3000/img/games.png',
                       title: 'Playstation 3',
                       rating: '4.7/5',
                       totalDownloads: '15',
                       totalSize: '7.9 mb'
                   }

               ]
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
