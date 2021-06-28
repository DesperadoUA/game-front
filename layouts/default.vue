<template>
  <div>
    <app_canvas />
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
    import Header from '~/components/header/app-header'
    import Footer from '~/components/footer/app-footer'
    import app_canvas from '~/components/canvas/app_canvas'
    export default {
        name: "app-main",
        components: {Header, Footer, app_canvas}
    }
</script>

<style lang="scss">
:root {
    /* container width */
    --container-width: 1152px;
    --container--cms: 960px;

    /* Theme color */
    --theme-cr-1: #302552;
    --theme-cr-2: #281c4c;
    --theme-cr-3: #1f4fad;
    --theme-cr-4: #FF7272;
    --faq-cr: #0b0038b3;
    --theme-cr-txt: var(--theme-cr-2);
    --theme-cr-txt-alt: #fff;
    --cr-success: #00ff66;
    --btn-primary: #0194ff;
    --btn-secondary: #01b94a;
    --table-head: #5f63c0;
    --disabled-bg: #fafbfc;
    --disabled-cr: #c7ccd8;


    /* Fonts */
    --base-font-size: 16px;
    --base-line-height: 1.6;
    --base-font-family: 'Open Sans', Arial, sans-serif;
    --alt-font-family: 'Roboto', Arial, sans-serif;

    --side-gutters: 15px;

    @media (max-width: 767px) {
        --base-font-size: 15px;
        --side-gutters: 8px;
    }

    /* Theme bg-color */
    --theme-bg-1: #f5f8ff;

    /* Theme images */

    --transition-default: .27s cubic-bezier(0.215, 0.61, 0.355, 1);
}

* {
    box-sizing: border-box
}

@font-face {
    font-family: "Open Sans";
    src: url("/fonts/opensans.woff2") format("woff2");
    font-weight: 400;
}

@font-face {
    font-family: "Open Sans";
    src: url("/fonts/opensansbold.woff2") format("woff2");
    font-weight: 700;
}

@font-face {
    font-family: "Roboto";
    src: url("/fonts/roboto.woff2") format("woff2");
    font-weight: 400;
}

@font-face {
    font-family: "Roboto";
    src: url("/fonts/robotobold.woff2") format("woff2");
    font-weight: 700;
}

body {
    margin: 0;
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--base-font-size);
    font-family: var(--base-font-family);
    line-height: var(--base-line-height);
    color: var(--theme-cr-txt);
    background-color: var(--theme-bg-1);
}

a {
    text-decoration: underline;
    color: var(--theme-cr-3);

    &:not([class]) {
        @media (min-width: 992px) {
            &:hover {
                text-decoration: none;
            }
        }
    }
}

a,
button {
    transition: var(--transition-default);
}

img {
    max-width: 100%;
    height: auto;
}

img,
video,
iframe {
    vertical-align: top;
}

strong, b {
    font-weight: 700;
}

.h,
h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5 {
    margin-top: 0;
}

p {
    margin-top: 0;
    margin-bottom: 0;
}

ul, ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    vertical-align: top
}

/*
Common styles*/
.container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--side-gutters);
    padding-right: var(--side-gutters);
    max-width: var(--container-width);

    &--cms {
        @extend .container;
        max-width: var(--container--cms);
    }
}

.icon {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    max-width: 1em;
    flex: 0 0 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
}

.full-width {
    width: 100% !important;
    flex-basis: 100% !important;
    max-width: 100% !important;
}

.items-more {
    width: 100%;
    text-align: center;

    [class*="btn"] {
        min-width: 230px;
    }
}

.main {
    overflow: hidden;
    position: relative;
    padding-top: 111px;
    z-index: 2;
    background-position: 50% 0;
    background-repeat: no-repeat;
    max-width: var(--container-width);
    margin: 0 auto;

    @media (min-width: 992px) {
        padding-top: 134px;
    }
}

/*
Buttons */

%btn-general {
    font-family: var(--base-font-family);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    padding: 0;
}

.btn-default {
    @extend %btn-general;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    text-align: center;
    position: relative;
    padding: 0;
}

.btn-primary {
    @extend %btn-general;
    font-size: 16px;
    background-color: rgba(#fff, .1);
    border-radius: 10px;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    z-index: 0;
    color: #fff;
    min-height: 50px;
    padding: 5px .9em;

    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#fff, .2);
        }
    }

    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 50px;
        }
    }

    &.is-disabled,
    &[disabled] {
        background-color: var(--disabled-bg);
        color: var(--disabled-cr);
    }
}

[class*="btn"][disabled] {
    pointer-events: none;
}

.btn-secondary {
    @extend %btn-general;
    border: 1px solid var(--btn-primary);
    font-size: 16px;
    border-radius: 10px;
    background-color: rgba(#fff,.1);
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    z-index: 0;
    color: var(--theme-cr-4);
    min-height: 50px;
    padding: 5px .9em;

    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#0194ff, .1);
        }
    }

    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 50px;
        }
    }

    &.is-disabled,
    &[disabled] {
        background-color: var(--disabled-bg);
        color: var(--disabled-cr);
    }
}

.btn-tertiary {
    @extend %btn-general;
    font-size: 16px;
    border-radius: 6px;
    background-color: var(--btn-primary);
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    z-index: 0;
    color: #fff;
    min-height: 50px;
    padding: 5px .9em;

    @media (max-width: 767px) {
        padding: 0;
    }

    @media (min-width: 992px) {
        &:hover {
            background-color: #0475dd;
        }

    }

    &.--green {
        background-color: var(--btn-secondary);

        @media (min-width: 992px) {
            &:hover {
                background-color: #009c3e;
            }
        }
    }

    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 50px;
        }
    }
}

.btn-block {
    display: flex;
    width: 100%;
}

.btn-play-video {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(#fff, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    cursor: pointer;

    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#000, .3);
        }
    }
}

.link-primary {
    font-size: 16px;
    font-weight: 700;

    @media (min-width: 992px) {
        &:hover {
            text-decoration: none;
        }
    }
}

/*
Circle rating */

.circle-rating {
    position: relative;
    flex-shrink: 0;
    flex-basis: 76px;
    width: 76px;
    height: 76px;
    margin-bottom: 5px;
}

.circle-rating__logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-radius: 50%;
    width: 62px;
    height: 62px;
}

.circle-rating__chart {
    display: block;
}

.circle-rating__circle-bg {
    fill: none;
    opacity: .23;
    stroke: var(--cr-rating);
    stroke-width: 2;
}

.circle-rating__circle {
    fill: none;
    stroke: var(--cr-rating);
    stroke-width: 2;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
}

@keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
}

.circle-rating__percentage {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 800;
    font-size: 24px;
    text-anchor: middle;
}

/*
Casino Card*/

.casino-cards-container {
    @media (max-width: 599px) {
        --casino-card-width: 100%;
        --casino-card-gutter: 0px;
    }

    @media (max-width: 991px) {
        --casino-card-width: 50%;
    }

    @media (max-width: 1279px) {
        --casino-card-width: 33.333%;
        --casino-card-gutter: 20px;

        width: calc(var(--container-width) + var(--casino-card-gutter));
        margin-left: calc(var(--casino-card-gutter) / -2);
        margin-right: calc(var(--casino-card-gutter) / -2);
        display: flex;
        flex-wrap: wrap;
    }

    .casino-card {
        flex-shrink: 0;
        flex-basis: calc(var(--casino-card-width) - var(--casino-card-gutter));
        width: calc(var(--casino-card-width) - var(--casino-card-gutter));
        margin-left: calc(var(--casino-card-gutter) / 2);
        margin-right: calc(var(--casino-card-gutter) / 2);
    }
}

.casino-card {
    background: rgba(#000, .2);
    border: 1px solid rgba(#fff, .1);
    border-radius: 14px;
    padding: 8px 18px 8px 8px;
    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 11px;

    @media (max-width: 1279px) {
        flex-wrap: wrap;
        padding: 0;
    }
}

.casino-card__logo {
    flex: 0 0 244px;
    max-width: 244px;
    overflow: hidden;
    border-radius: 10px;
    margin-right: 8px;

    @media (max-width: 1279px) {
        border-radius: 14px 0 0 0;
        flex-shrink: 0;
        flex-basis: calc(100% - 112px);
        margin-right: 0;
    }

    img {
        width: 100%;
        max-height: 140px;
        max-width: none;
        object-fit: cover;
    }
}

.casino-card__rating {
    flex: 0 0 119px;
    max-width: 119px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(#1c0e27, .75);
    border-radius: 10px;
    margin-right: 16px;

    @media (max-width: 1279px) {
        width: 112px;
        border-radius: 0 14px 0 0;
        margin-right: 0;
        padding-top: 15px;
        max-width: 112px;
    }
}

.casino-card-param {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 0 0 188px;
    max-width: 188px;

    @media (max-width: 1279px) {
        width: 100%;
        max-width: none;
        flex: 0 0 100%;
    }
}

.casino-card-param__item {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;

    &:first-child,
    &:nth-child(2) {
        margin-bottom: 20px;
    }

    &.disabled {
        opacity: .5;
    }

    @media (max-width: 1279px) {
        margin-bottom: 0 !important;
        padding: 20px 5px;
        flex: 0 0 25%;
    }
}

.casino-card-param__img {
    margin-bottom: 2px;
    max-width: 21px;
}

.casino-card-param__value {
    font-size: 26px;
    line-height: 1;
    font-weight: 700;
}

.casino-card-param__txt {
    font-size: 10px;
    font-weight: 700;
    opacity: .75;
}

.casino-card-bonus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 700;
    min-width: 130px;
    border-radius: 6px;
    text-align: center;

    @media (max-width: 1279px) {
        max-width: calc(50% - 8px);
        flex-basis: calc(50% - 8px);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        font-weight: 700;
        background-color: rgba(#fff, .1);
        border-radius: 6px;
        text-align: center;
        padding-top: 18px;
        padding-bottom: 18px;
        margin-left: 4px;
        margin-right: 4px;
        margin-bottom: 25px;
    }
}

.casino-card-bonus__value {
    font-size: 22px;
    line-height: 1.25;
    padding-left: 10px;
    padding-right: 10px;
}

.casino-card-bonus__ttl {
    font-size: 11px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
}

.casino-card-bonus__wager {
    opacity: .75;
    font-size: 12px;
    line-height: 25px;
}

.casino-card__cta {
    flex-shrink: 0;
    width: 100%;
    max-width: 215px;
    margin-left: auto;
    padding-left: 15px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1279px) {
        max-width: none;
        padding-left: 0;
    }

    [class*="btn"] + [class*="btn"] {
        margin-top: 6px;

        @media (max-width: 1279px) {
          margin-top: 0;
          border-radius: 0 0 15px 15px;
        }
    }

    a {
        @media (max-width: 1279px) {
            border-radius: 0;
        }
    }
}


.casino-card__txt {
    line-height: 1.8125;
    margin-left: 16px;

    @media (max-width: 1279px) {
        margin: 16px;
   }
}

.casino-card__more {
    margin-top: 45px;
    margin-bottom: 80px;
}

/*
 */

.casino-group-item {
    background-color: rgba(#fff, .1);
    border-radius: 10px;
    padding: 6px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.072;
    color: currentColor;
    text-decoration: none;
    margin-bottom: 8px;

    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#000, .1);
        }
    }

    .circle-rating {
        margin-right: 16px;
        margin-bottom: 0;
    }
}

.casino-group-item__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
}

.casino-group-item__name {
    line-height: 1.643;
    font-weight: 700;
}

/*
Blog */

.blog {
    --blog-item-gutters: 45px;
    --blog-item-max-width: 344px;
    --blog-item-width: 100%;

    @media (min-width: 768px) {
        --blog-item-width: 50%;
    }

    @media (min-width: 1180px) {
        --blog-item-width: 33.333%;
    }

    .items__cta {
        margin-bottom: 46px;
    }
}

.blog__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: calc(var(--blog-item-gutters) / -2);
    margin-right: calc(var(--blog-item-gutters) / -2);

    @media (min-width: 768px) {
        justify-content: space-between;
    }

    &:after {
        content: '';
        flex: auto;
    }

    .blog-item {
        max-width: var(--blog-item-max-width);
        flex-basis: calc(var(--blog-item-width) - var(--blog-item-gutters));
        margin-left: calc(var(--blog-item-gutters) / 2);
        margin-right: calc(var(--blog-item-gutters) / 2);
        flex-shrink: 0;
    }
}

.blog-item {
    display: flex;
    flex-direction: column;
    color: var(--theme-cr-txt-alt);
    text-decoration: none;

    &:not(:last-child) {
        margin-bottom: 32px;
    }

    @media (min-width: 992px) {
        &:hover {
            .blog-item__media img {
                transform: scale(1);
            }
        }
    }
}

.blog-item__media {
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    margin-bottom: 17px;

    img {
        transition: var(--transition-default);
        transform: scale(1.1);
    }
}

.blog-item__caption {
    font-size: 14px;
    line-height: 118.7%;
    font-weight: 700;
    padding-bottom: 16px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        height: 1px;
        left: 8px;
        right: 8px;
        top: 100%;
        background-color: rgba(#fff, 0.1);
    }
}

/*
Casino Detail*/

.casino-detail {
    --heading-col-width: 228px;
    --detail-ttl-width: 139px;

    padding-top: 59px;
    padding-bottom: 17px;
    margin-top: 45px;
    background-color: #fff;
    display: flow-root;
}

.detail-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-bottom: 9px;
    }
}

.detail-row__heading {
    margin-bottom: 20px;
    padding-top: 8px;

    @media (min-width: 768px) {
        flex: 0 0 var(--heading-col-width);
        max-width: var(--heading-col-width);
    }
}

.detail-row__ttl {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.detail-row__sub-ttl {
    font-weight: 400;
    margin-bottom: 0;
}

.detail-row__content {
    margin-bottom: 12px;
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        width: calc(100% - var(--heading-col-width));
    }
}

.detail-list {
    margin: 0 0 -12px;
    padding: 0;
    list-style: none;
    width: 100%;
    line-height: 1.375;

    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
    }

    &.--stack {
        .detail-list__item {
            flex-basis: 100%;
            max-width: 100%;
        }
    }
}

.detail-list__item {
    padding-right: 10px;
    display: flex;
    margin-bottom: 12px;

    @media (min-width: 992px) {
        flex: 0 0 43%;
        max-width: 43%;
    }
}

.detail-list__ttl {
    flex: 0 0 var(--detail-ttl-width);
    padding-right: 5px;
}

.detail-list__value {
    flex-shrink: 0;
    font-weight: 700;
    flex-basis: calc(100% - var(--detail-ttl-width));
}

.game-type {
    display: inline-flex;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    min-height: 40px;
    padding: 6px 12px;
    background: rgba(#0f0038, .7);
    border-radius: 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-decoration: none;
}

.game-type__icon {
    margin-right: 10px;
    margin-left: 4px;

    path {
        fill: currentColor;
    }
}

.detail-item {
    display: inline-flex;
    align-items: center;
    color: var(--theme-cr-4);
    font-weight: 600;
    font-size: 14px;
    padding: 6px 12px;
    margin-bottom: 8px;
    margin-right: 8px;
    min-height: 40px;
    background-color: rgba(#281c4b, .08);
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px transparent;
    text-decoration: none;
}

button.detail-item,
a.detail-item {
    @media screen and (min-width: 992px) {
        &:hover {
            box-shadow: inset 0 0 0 1px var(--btn-primary);
        }
    }
}

.detail-item__icon {
    margin-right: 10px;
    margin-left: 4px;
}

/*
Casinos */

.casinos {
    --casino-item-width: 100%;
    --casino-item-gutter: 0px;

    @media (min-width: 600px) {
        --casino-item-width: 50%;
        --casino-item-gutter: 20px;
    }

    @media (min-width: 992px) {
        --casino-item-width: 33.333%;
    }

    @media (min-width: 1280px) {
        --casino-item-gutter: 46px;
    }

    .items-more {
        margin-bottom: 56px;
    }
}

.casinos__container {
    display: flex;
    flex-wrap: wrap;
    counter-reset: counter;
    margin-left: calc(var(--casino-item-gutter) / -2);
    margin-right: calc(var(--casino-item-gutter) / -2);
    margin-bottom: 16px;

    @media (max-width: 599px) {
        flex-direction: column;
        align-items: center;
    }

    &:after {
        content: '';
        flex: auto;
    }

    .casino-item {
        flex-shrink: 0;
        flex-basis: calc(var(--casino-item-width) - var(--casino-item-gutter));
        width: calc(var(--casino-item-width) - var(--casino-item-gutter));
        margin-left: calc(var(--casino-item-gutter) / 2);
        margin-right: calc(var(--casino-item-gutter) / 2);
        position: relative;
        counter-increment: counter;

        &:before {
            content: counter(counter);
            position: absolute;
            z-index: 2;
            border-radius: 50%;
            text-align: center;
            width: 25px;
            height: 25px;
            background: rgba(#000, .35);
            font-size: 12px;
            line-height: 25px;
            font-weight: 700;
            color: #fff;
            top: 7px;
            left: 7px;
        }
    }
}

.casino-item {
    color: #fff;
    background: rgba(#000, .2);
    border: 1px solid rgba(#fff, .1);
    border-radius: 14px;
    margin-bottom: 31px;

    /*max-width: 344px;
    width: 100%;*/
}

.casino-item__top {
    display: flex;
    margin-bottom: 18px;
}

.casino-item__logo {
    background-color: #1c0e27;
    overflow: hidden;
    border-radius: 14px 0 0 0;
    flex-shrink: 0;
    flex-basis: calc(100% - 112px);
    padding-bottom: 38.13%;
    position: relative;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
    }
}

.casino-item__rating {
    width: 112px;
    border-radius: 0 14px 14px 0;
    background-color: #1c0e27;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
}

.casinos-rating__txt {
    font-size: 14px;
}

.casino-item__content {
    padding-left: 8px;
    padding-right: 8px;
}

.casino-param {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
}

.casino-param__item {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;

    &.disabled {
        opacity: .5;
    }
}

.casino-param__img {
    margin-bottom: 2px;
    max-width: 21px;
}

.casino-param__txt {
    font-size: 10px;
    font-weight: 700;
    opacity: .75;
}

.casino-bonuses {
    display: flex;
    justify-content: space-between;
    margin-left: -4px;
    margin-right: -4px;
    margin-bottom: 28px;

    .casino-bonus {
        max-width: calc(50% - 8px);
        flex-basis: calc(50% - 8px);
    }
}

.casino-bonus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 700;
    max-width: 160px;
    background-color: rgba(#fff, .1);
    border-radius: 6px;
    text-align: center;
    padding-top: 18px;
}

.casino-bonus__value {
    font-size: 22px;
    line-height: 1.5;
    padding-left: 10px;
    padding-right: 10px;
}

.casino-bonus__ttl {
    font-size: 11px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
}

.casino-bonus__wager {
    background-color: rgba(#fff, .2);
    font-size: 12px;
    line-height: 25px;
    border-radius: 0 0 6px 6px;
    margin-top: auto;
}

.casino-item__btns {
    margin-left: -9px;
    margin-right: -9px;
    overflow: hidden;
    border-radius: 0 0 14px 14px;
}

.casino-item__btn {
    color: #fff;
    font-family: var(--base-font-family);
    font-size: 16px;
    font-weight: 700;
    min-height: 40px;
    text-decoration: none;
    border: 0;
    padding: 3px 5px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--green {
        background-color: var(--btn-secondary);

        &:hover {
            background-color: #009c3e;
        }
    }

    &.--blue {
        background-color: var(--btn-primary);

        &:hover {
            background-color: #0475dd;
        }
    }
}
// Useful Categories

.useful-categories {
  --news-img-width: 200px;
  --useful-categories-gutters: 45px;
  --useful-categories-max-width: 344px;
  --useful-categories-width: 344px;
  display: flow-root;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    --useful-categories-width: 50%;
  }

  @media (min-width: 1180px) {
    --useful-categories-width: 33.333%;
  }

  .items-more {
    margin-top: 45px;
    margin-bottom: 30px;
  }
}

.useful-categories__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: calc(var(--useful-categories-gutters) / -2);
  margin-right: calc(var(--useful-categories-gutters) / -2);

  @media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
  }
  &:after {
    content: '';
    flex: auto;
  }

  .useful-group {
    max-width: var(--useful-categories-max-width);
    flex-basis: calc(var(--useful-categories-width) - var(--useful-categories-gutters));
    margin-left: calc(var(--useful-categories-gutters) / 2);
    margin-right: calc(var(--useful-categories-gutters) / 2);
    flex-shrink: 0;
    @media (max-width: 767px) {
      flex-basis: 100%;
    }
  }
}

.useful-group {
  padding-top: 24px;
  margin-bottom: 30px;
}

.useful-group__ttl {
  font-size: 28px;
  line-height: 1.833;
  color: var(--theme-cr-txt-alt);
  font-weight: 700;
  margin-bottom: 20px;
}

.news-item {
  padding: 16px;
  background-color: rgba(#fff, .1);
  font-size: 14px;
  line-height: 160%;
  border-radius: 10px;
  color: rgba(#fff, .75);
  text-decoration: none;

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (min-width: 992px) {
    &:hover {
      background-color: rgba(#000, .1);
    }
  }
  @media (max-width: 767px) {
    & {
      display: block;
    }
  }
}

.news-item__img {
  flex-shrink: 0;
  flex-basis: var(--news-img-width);
  max-width: var(--news-img-width);
  margin: -8px 0 -8px -8px;

  ~ .news-item__txt {
    padding-top: 2px;
    align-content: baseline;
    flex-direction: row;
    flex-wrap: wrap;

    @media (min-width: 992px) {
      padding-left: 24px;
      max-width: calc(100% - var(--news-img-width));
      flex-basis: calc(100% - var(--news-img-width));
    }

    .news-item__date {
      line-height: 118.7%;
      width: auto;
      margin-bottom: 10px;
      margin-left: auto;
    }

    .news-item__ttl {
      order: -1;
      margin-bottom: 10px;
    }
  }
}

.news-item__ttl {
  color: #fff;
  line-height: 118.7%;
  margin-bottom: 5px;
}

.news-item__txt {
  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    max-width: 730px;
  }
}

.news-item__date {
  width: 100%;
  font-weight: 400;
  opacity: .75;
  margin-bottom: 5px;
}

.single_template {
  @media (max-width: 767px) {
    & .casino-card__logo {
      flex-basis: 100%;
      max-width: 100%;
      overflow: hidden;
      width: 100%;
    }
    & .casino-card__logo img  {
      max-height: none;
      border-radius: 15px 15px 0px 0px;
    }
  }
}
</style>
