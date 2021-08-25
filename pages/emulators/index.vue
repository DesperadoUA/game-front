<template>
      <div>
        <app_category_h1 :value="data.body.h1" />
        <app_loop_roms :value="data.body.category" />
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Builder from '~/DAL/builder'
   import app_content from '~/components/content/app-content'
   import app_category_h1 from '~/components/category_h1/app-category_h1'
   import app_loop_roms from '~/components/loop-roms/app-loop-roms'
export default {
    name: "emulators",
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_content, app_category_h1, app_loop_roms},
    async asyncData({store, route}) {
        const request = new DAL_Builder()
        const response = await request.setCategory('category')
                                      .url('emulators')
                                      .get()
        const body = response.data 
        const data = body
        data.body.currentUrl = process.env.BASE_URL + route.path
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
