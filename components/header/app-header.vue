<template>
    <header class="header">
        <div class="header__container container">
            <app_logo />
            <app_menu />
        </div>
    </header>
</template>
<script>
    import app_logo from './app-logo'
    import app_menu from './app-menu'
    export default {
        name: "app-header",
        components: {app_logo, app_menu},
        data(){
            return {
                options: {},
                settings: {}
            }
        }
    }
</script>

<style lang="scss">
:root {
    --scrollbar-width: 0;
}

.header {
    padding-top: 14px;
    padding-bottom: 14px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: calc(100vw - var(--scrollbar-width));
    z-index: 3;

    @media (max-width: 991px) {
        display: flex;
        align-items: center;
        min-height: 80px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        min-height: 112px;
    }

    @media (min-width: 992px) {
        position: absolute;
        padding-top: 23px;
        padding-bottom: 23px;
    }
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
