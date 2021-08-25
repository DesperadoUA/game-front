<template>
      <div>
        <app_breadcrumds :value="data.body.breadcrumbs"></app_breadcrumds>
        <div class="game_top">
            <div class="game_top_left">
              <app_category_h1 :value="data.body.h1" />
              <app_game_thumbnail 
                   thumbnail="http://localhost:3000/img/games.png"
                   :list="data.body.characters" 
                   :link="data.body.linkDownload"
              />
            </div>
            <div class="game_top_right">
                <app_sidebar title="POPULAR ROMS GAMES" :list="data.body.sidebarMenu" />
            </div>
            <app_recomended_games 
                title="WE ALSO RECOMMEND YOU TO TRY THIS ROM GAMES"
                :list="data.body.posts"
            />
        </div>
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import app_content from '~/components/content/app-content'
   import app_breadcrumds from '~/components/breadcrumbs/app-breadcrumbs'
   import app_sidebar from '~/components/sidebar/app-sidebar'
   import app_category_h1 from '~/components/category_h1/app-category_h1' 
   import app_game_thumbnail from '~/components/game_thumbnail/app-game-thumbnail'
   import app_recomended_games from '~/components/recomendet-games/app-recomendet-games'
export default {
    name: "single-game",
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_content, app_category_h1, app_breadcrumds, app_sidebar, app_game_thumbnail, app_recomended_games},
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
               h1: 'GAMEBOY / GB ROMS Single game',
               breadcrumbs: [
                   {
                     path: '/',
                     title: 'Home'
                   },
                   {
                     path: '/roms',
                     title: 'Roms'
                   },
                   {
                     path: '/roms/gameboy',
                     title: 'Gameboy Advance'
                   },
                   {
                     path: '/roms/gameboy/red-version',
                     title: 'Fire Red Version (V1.1)'
                   },

               ],
               sidebarMenu: [
                   {
                       permalink: '/link-1',
                       title: 'Title 1'
                   },
                   {
                       permalink: '/link-2',
                       title: 'Title 2'
                   },
                   {
                       permalink: '/link-3',
                       title: 'Title 3'
                   },
                   {
                       permalink: '/link-4',
                       title: 'Title 4'
                   },
               ],
               characters: {
                   fullName: 'Pokemon - Fire Red Version (V1.1)',
                   fullSize: '4.9MB',
                   region: 'Region',
                   console: 'Gameboy Advance',
                   genre: 'Role Playing',
                   downloads: '16,167,161',
                   rating: 95
               },
               linkDownload: '/link-download',
               posts: [
                   {
                       thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-1'
                   },
                   {
                        thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-2'
                   },
                   {
                        thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-3'
                   },
                   {
                        thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-4'
                   },
                   {
                        thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-5'
                   },
                   {
                       thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-6'
                   },
                   {
                       thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-7'
                   },
                   {
                       thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-8'
                   },
                   {
                       thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-9'
                   },
                   {
                       thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-10'
                   },
                   {
                       thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-11'
                   },
                   {
                        thumbnail: 'http://localhost:3000/img/games.png',
                       permalink: '/link-12'
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
.game_top {
    display: flex;
    flex-wrap: wrap;
}
.game_top_left {
    width: 65%;
}
.game_top_right {
    width: 35%;
}
</style>
