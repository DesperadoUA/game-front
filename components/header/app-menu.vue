<template>
<!--    для работы мобильного меню нужно добавлять класс "is-menu-open" на div.main-nav при клике-->
    <div :class="stateMenu">
        <nav class="mobile-menu">
            <ul class="main-nav__list">
                <li v-for="(item, index) in settings" @click="closeMenu"
                  :key="index">
                    <NuxtLink no-prefetch :to="item.value_1" class="main-nav__link">
                        {{item.value_2}}
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <div class="navbar__btn"
             aria-expanded="false"
             aria-label="Menu Button"
             @click="menuActivate"
             role="button">
            <span class="bar"></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "app-menu",
        data(){
            return {
                settings: []
            }
        },
        async mounted(){
          const data = {lang: 1}
          await this.$store.dispatch('settings/setSettings', data)
          const settings = this.$store.getters['settings/getSettings']
          if(settings.length !== 0) {
             this.settings = settings.filter(item => item.key === 'header_menu' )[0].value
          }
          console.log(this.settings)
        },
        methods: {
            menuActivate(){
                this.$store.dispatch('common/setMobileMenu', !this.$store.getters['common/getMobileMenu'])
            },
            closeMenu(){
                console.log('close menu')
                this.$store.dispatch('common/setMobileMenu', false)
            }
        },
        computed: {
            stateMenu(){
                return this.$store.getters['common/getMobileMenu']
                           ? 'main-nav is-menu-open'
                           : 'main-nav'
            }
        }
    }
</script>

<style lang="scss">
.is-menu-open {
    .logo,
    .search,
    & ~ .main,
    & ~ .footer {
        filter: blur(24px);
    }
}

.main-nav {
    @media (min-width: 992px) {
        margin-left: auto;
        margin-right: 47px;
    }
}

.main-nav__list {
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
    }

    > li {
        position: relative;

        @media (max-width: 991px) {
            margin-bottom: 26px;
        }

        @media (min-width: 992px) {
            &:hover {
                .main-nav__link {
                    opacity: 1;
                }

                .main-nav__drop {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }

        &:not(:first-child) {
            @media (min-width: 992px) {
                margin-left: 32px;
            }

        }
    }
}

.main-nav__link {
    color: var(--theme-cr-txt-alt);
    opacity: .5;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    text-transform: uppercase;

    @media (max-width: 991px) {
        font-size: 16px;
    }

    .active > &,
    .is-active > &,
    &.nuxt-link-exact-active,
    &.is-active {
        opacity: 1;
    }

    @media (min-width: 992px) {
        &:hover {
            opacity: 1;
        }
    }
}

.main-nav__icon {
    margin-right: 7px;
    max-width: 25px;

    @media (min-width: 992px) {
        margin-right: 5px;
        max-width: 18px;
    }
}

.main-nav__drop {
    position: absolute;
    min-width: 160px;
    top: 100%;
    left: 0;
    background-color: #4e3986ea;
    border-radius: 8px;
    padding: 27px 20px 13px 23px;
    z-index: 1;
    transition: var(--transition-default);
    opacity: 0;
    visibility: hidden;

    > li {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        line-height: 1.333;
        margin-bottom: 16px;
    }

    a {
        color: rgba(#fff, .7);
        text-decoration: none;

        @media (min-width: 992px) {
            &:hover {
                color: #fff;
            }
        }
    }
}

.navbar__btn {
    position: fixed;
    top: 0;
    right: 0;
    width: 92px;
    height: 80px;
    border: 0;
    cursor: pointer;
    z-index: 1002;
    display: none;

    @media (max-width: 991px) {
        display: flex;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        top: 16px;
        right: 9px;
    }

    .bar:before,
    .bar:after,
    &:after,
    &:before {
        content: '';
        list-style: none;
        position: absolute;
        background-color: #fff;
        margin-left: auto;
        margin-right: auto;
        width: 28px;
        height: 2px;
        transform: translateY(-50%);
        transition: .9s;
    }

    &:before {
        top: 36.25%;
    }

    &:after {
        top: 50%;
    }

    .bar:before,
    .bar:after {
        width: 14px;
        top: 63.75%;
    }

    &:before,
    &:after,
    .bar:before {
        left: 50%;
        margin-left: -14px;
    }

    .bar:after {
        right: 50%;
        margin-right: -14px;
    }

    .is-menu-open &:before {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
    }
    .is-menu-open &:after {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
    }

    .is-menu-open & .bar:before {
        left: 0;
        opacity: 0;
    }

    .is-menu-open & .bar:after {
        right: 0;
        opacity: 0;
    }
}

.mobile-menu {
    z-index: 2;
    @media (max-width: 991px) {
        transition: var(--transition-default);
        overflow: hidden;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 100%;
        height: 100vh;
        width: 100vw;
        background: rgba(#281c4b, .98);
        padding: 132px 53px 30px;
        display: none;
        flex-direction: column;

        .is-menu-open & {
            display: flex;
            transform: translateX(-100%);
        }
    }
}
</style>
