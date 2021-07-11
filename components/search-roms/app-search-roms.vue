<template>
    <div class="search-roms container">
      <div class="search-roms-wrapper">
          <input type="search" placeholder="Search" class="search-roms-input">
          <select class="search-roms-select">
                <option>Select Genre</option>
                <option>Genre 1</option>
                <option>Genre 2</option>
                <option>Genre 3</option>
          </select>
          <select class="search-roms-select">
                <option>Select Region</option>
                <option>Region 1</option>
                <option>Region 2</option>
                <option>Region 3</option>
          </select>
      </div>
    </div>
</template>
<script>
    import DAL_Builder from '~/DAL/builder'
    export default {
        name: "app-search-roms",
        data(){
            return {
                posts: [],
                searchWord: ''
            }
        },
        methods: {
            /*
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
            */
        }
    }
</script>

<style lang="scss">
.search-roms-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    padding-top: 15px;
}
.search-roms-input {
    width: 50%;
    height: 50px;
    padding: 20px;
    border-radius: 10px;
    background: var(--theme-cr-txt-alt);
    font-family: var(--base-font-family);
    font-size: 18px;
}
.search-roms-select {
    width: 24%;
    border-radius: 10px;
    font-family: var(--base-font-family);
    font-size: 18px;
}
</style>
