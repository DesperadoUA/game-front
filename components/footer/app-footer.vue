<template>
<footer class="footer">
    <div class="partners-logos">
        <div class="container">
            <ul class="partners-logos__list">
                <li class="partners-logos__item" v-for="(item, index) in footer_menu" :key="index">
                    <NuxtLink no-prefetch :to="item.value_1">
                        {{item.value_2}}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer__copyrights">
        <div class="container">
            <p v-html="footer_text"></p>
        </div>
    </div>
</footer>
</template>

<script>
    export default {
        name: "app-footer",
        data(){
            return {
              footer_text: 'Footer tex',
              footer_menu: [
                {
                  value_1: '#',
                  value_2: 'Popular ROMS'
                },
                {
                  value_1: '#',
                  value_2: 'Popular ROMS:'
                },
                {
                  value_1: '#',
                  value_2: 'Popular ROMS:'
                },
              
              ]
            }
        },
        /*
        computed: {
          changeText(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
              this.footer_text = settings.filter(item => item.key === 'footer_text')[0].value
            }
            return this.footer_text
          },
          changeMenu(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
              this.footer_menu = settings.filter(item => item.key === 'footer_menu')[0].value
            }
            return this.footer_menu
          }
        }
        */
    }
</script>

<style lang="scss">
.footer {
    color: var(--theme-cr-txt-alt);
    position: relative;
    overflow: hidden;
    z-index: 3;
}

.footer__container {
}

.partners-logos {
    background: #151727;
    padding-top: 41px;
    padding-bottom: 38px;

    @media (min-width: 992px) {
    }
}

.partners-logos__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: -25px;
    margin-right: -25px;
}

.partners-logos__item {
    margin-left: 25px;
    margin-right: 25px;
}
.partners-logos__item a {
    color: var(--theme-cr-txt-alt);
    text-decoration: none;
}
.footer__copyrights {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 15px;
    text-align: center;

    @media (min-width: 992px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}
</style>
