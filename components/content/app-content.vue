<template>
<div class="cms">
    <div class="container" v-html="value"></div>
</div>
</template>

<script>
    export default {
        name: "app-content",
        props: ['value'],
        data(){
            return {

            }
        },
        mounted(){
            
        }
    }
</script>
<style lang="scss" scope>
.cms {
    padding-top: 45px;
    font-family: var(--alt-font-family);
    display: flow-root;

    .slots + & {
        padding-top: 0;
    }

    p {
        margin-bottom: 32px;
        color: var(--theme-cr-txt-alt);
    }
    h1 {
        color: var(--theme-cr-txt-alt);
    }
    h2 {
        font-size: 24px;
        line-height: 1.179;
        margin-bottom: 21px;
        color: var(--theme-cr-txt-alt);

        @media (min-width: 992px) {
            font-size: 28px;
        }
    }

    h3 {
        font-size: 20px;
        line-height: 1.182;
        margin-bottom: 16px;
        color: var(--theme-cr-txt-alt);

        @media (min-width: 992px) {
            font-size: 22px;
        }
    }

    h4 {
        font-size: 16px;
        line-height: var(--base-line-height);
        margin-bottom: 25px;
        color: var(--theme-cr-txt-alt);

        @media (min-width: 992px) {
            font-size: 18px;
        }
    }

    ul, ol {
        margin: 0 0 25px;
        padding: 0;
        list-style: none;
    }

    ul {
        li {
            padding-left: 25px;
            position: relative;

            &:before {
                position: absolute;
                top: 10px;
                left: 5px;
                content: '';
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: currentColor;
            }
        }
    }

    ol {
        counter-reset: counter;

        li {
            padding-left: 25px;
            position: relative;
            counter-increment: counter;

            &:before {
                content: counter(counter) '.';
                position: absolute;
                top: 0;
                left: 5px;
            }
        }
    }
}

.cms-banner {
    position: relative;
    margin-bottom: 30px;

    @media (min-width: 992px) {
        margin-bottom: 50px;
    }

    img {
        border-radius: 15px;
    }
}

.cms-banner__ttl {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: 700;
    line-height: 1.6;
    color: rgba(#fff, .35);

    @media (min-width: 992px) {
        font-size: 64px;
    }
}

.two-cols {
    margin-bottom: 10px;

    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 25px;
    }
}

.two-cols__ttl {
    width: 100%;
}

.two-cols__col {
    @media (min-width: 992px) {
        flex: 0 0 49%;
        max-width: 49%;
    }
}

table {
    font-family: var(--base-font-family);
    line-height: 1.6;
    box-shadow: 0 2px 14px rgba(#04001a, .15);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 50px;
    border-spacing: 0;
    background-color: #fff;
    border-radius: 14px;
    border: 1px solid rgba(#000, .2);
    display: block;
    width: 100%;

    thead,
    tbody {
        min-width: 800px;
        display: table;
        width: 100%;
    }

    thead td,
    th {
        font-size: 18px;
        line-height: 1.556;
        background-color: var(--table-head);
        padding: 12px 10px 12px 24px;
        color: #fff;
        text-align: left;
        text-transform: uppercase;

        &:first-child {
            border-radius: 14px 0 0 0;
            width: 260px;
        }

        &:last-child {
            border-radius: 0 14px 0 0;
        }
    }

    tr {
        &:not(:last-child) {
            td {
                border-bottom: 1px solid rgba(#000, .2);
            }
        }
    }

    &--no-border {
        tr {
            &:not(:last-child) {
                td {
                    border-bottom: 0;
                }
            }
        }
    }

    td {
        font-size: 18px;
        padding: 11px 10px 11px 24px;

        &:first-child {
            width: 260px;
        }

        img {
            vertical-align: middle;
        }
    }

    .icon-cross {
        color: #ff5f5f;
    }

    .icon-check {
        color: var(--btn-secondary);
    }
}

.table__btn {
    text-align: center;
    margin-top: 32px;

    [class*="btn-"] {
        min-width: 230px;
    }
}
</style>
