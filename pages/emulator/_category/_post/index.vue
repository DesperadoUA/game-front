<template>
      <div>
        <app_breadcrumds :value="data.body.breadcrumbs"></app_breadcrumds>
        <div class="game_top">
            <div class="game_top_left">
              <app_category_h1 :value="data.body.h1" />
              <app_game_thumbnail 
                   :thumbnail="data.body.thumbnail"
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
   import DAL_Builder from '~/DAL/builder'
   import config from '~/config/index'
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
        const request = new DAL_Builder()
        const response = await request.postType('emulator')
                                      .setCategory(route.params.category)
                                      .url(route.params.post)
                                      .get()
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const body = response.data.body
            const data = {body}
            const dataCategory = response.data.category
            const popularGames = response.data.popular_games
            const relativeGames = response.data.relative_games
            data.body.currentUrl = config.BASE_URL + route.path
            data.body.breadcrumbs = [
                   {
                     path: '/',
                     title: 'Home'
                   },
                   {
                     path: '/emulators',
                     title: 'Emulators'
                   },
                   {
                     path: `/emulators/${dataCategory.permalink}`,
                     title: dataCategory.title
                   },
                   {
                     path: '',
                     title: data.body.title
                   }
                 ]
            data.body.sidebarMenu = popularGames
            data.body. characters = {
                fullName: data.body.title,
                fullSize: '4.9MB',
                region: data.body.icon,
                console: dataCategory.title,
                genre: data.body.genre,
                downloads: '16,167,161',
                rating: data.body.rating
            },
            data.body.linkDownload = '/link-download'
            data.body.posts = relativeGames;
            return {data}
        }
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
