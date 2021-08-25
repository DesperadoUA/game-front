<template>
   <div class="search">
       <div class="search-box">
           <div class="container search-box__container">
               <h1 class="search-box__ttl">{{title}}</h1>
               <p class="search-box__sub-ttl">{{description}}</p>
               <div class="form-search">
                   <input class="form-search__field"
                          type="search"
                          v-model="searchWord"
                          placeholder="Enter ROM Game">
                   <button type="submit" class="btn-default form-search__cta" @click="search">
                       <svg class="search__icon" width="19" height="19" viewBox="0 0 345 344.6" xmlns="http://www.w3.org/2000/svg">
                           <path d="M319.3,343.2c-1.6-0.7-21-19.4-43-41.5c-22-22.1-40.3-40.1-40.6-40.1c-0.3,0-4.4,2.5-9,5.6 c-15.4,10.2-32.8,17.5-51.7,21.7c-14.4,3.2-44.3,3.1-59.2-0.1c-28.9-6.3-52.2-19.2-73.6-40.6c-17.7-17.8-27.9-34.4-35.5-57.5 c-5.7-17.3-7.3-30-6.7-50.5c1-29.4,8.1-51.7,24.5-76.5c7.3-11,24.8-29.1,35.9-37C76.2,15.5,97.4,6.2,116.9,2 c12-2.6,44.8-2.7,56.9-0.1c29.9,6.4,53.5,19.1,75.1,40.7c21.4,21.3,34.6,45.9,40.6,75.8c2.7,13.2,2.4,43.3-0.5,56.5 c-4.3,19.3-11.4,36.4-21.6,51.6c-3.1,4.6-5.6,8.6-5.6,9s18.4,19.1,40.9,41.7c44.4,44.5,43.1,42.8,41.8,52.6 C343.1,340.6,329.5,347.8,319.3,343.2L319.3,343.2z M167.2,253c62-11.7,101.5-76.2,84.1-137.2c-11.9-41.6-46.6-72.3-89.2-78.7 c-12.3-1.9-20.2-1.9-32.6,0C105.7,40.7,85.3,51,68.2,68c-52.8,52.6-38.4,142,28.1,175.1C119.4,254.6,141.9,257.8,167.2,253 L167.2,253z"/>
                       </svg>
                       SEARCH
                   </button>

                   <ul class="search-suggest" v-if="posts.length !== 0">
                       <li v-for="(item, index) in posts" :key="index" @click="goToSearch">
                         <NuxtLink :to="item.permalink">{{item.title}}</NuxtLink>
                       </li>
                   </ul>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
    import DAL_Builder from '~/DAL/builder'
    export default {
        name: "app-search",
        props: ['title', 'description'],
        data(){
            return {
                posts: [],
                searchWord: ''
            }
        },
        methods: {
            async search(){
                if(this.searchWord === '') return
                const request = new DAL_Builder()
                const response = await request.url('search')
                                              .setSearch(true)
                                              .searchWold(this.searchWord)
                                              .get()
                if(response.data.confirm !== 'error') {
                   this.posts = response.data.body.posts
                }
            },
            goToSearch(){
                this.$store.dispatch('common/setShowSearch', !this.$store.getters['common/getShowSearch'])
                this.posts = []
                this.searchWord = ''
            }
        }
    }
</script>

<style lang="scss">
.search {
    padding-top: 70px;
    padding-bottom: 90px;
}
.search-box__ttl {
    text-align: center;
    color: var(--theme-cr-txt-alt);
    font-size: 62px;
    margin-bottom: 5px;
}
.search-box__sub-ttl {
    font-size: 34px;
    color: var(--theme-cr-txt-alt);
    text-align: center;
}
.form-search {
    max-width: 720px;
    background: var(--theme-cr-txt-alt);
    border-radius: 10px;
    padding: 3px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
}
.form-search__field {
    border:none;
    height: 50px;
    font-family: var(--base-font-family);
    font-size: 18px;
    padding: 5px 15px;
    width: 100%;
    margin-right: 10px;
    overflow: hidden;
}
.form-search__cta {
  margin-top: 1px;
  background: #0472D7;
  border-radius: 8px;
  color: var(--theme-cr-txt-alt);
  height: 48px;
  width: 160px;
}
.search__icon {
    margin-right: 10px;
}
</style>
