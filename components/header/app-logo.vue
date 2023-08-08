<template>
    <NuxtLink no-prefetch to="/" class="logo_link" v-if="options !== null">
        <img class="logo" :src="options.value" alt="Logo" />
    </NuxtLink>
</template>
<script>
    export default {
        name: "app-logo",
        data(){
            return {
                options: null
            }
        },
        async mounted() {
          await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options.filter(item => item.key === 'logo')[0]
        }
    }
</script>

<style lang="scss">
    .logo_link {
        z-index: 1;
    }
    .logo {
        width: 177px;
        margin-left: 10px;
    @media (min-width: 768px) {
        width: 200px;
        margin-left: 2px;
    }
}
</style>
