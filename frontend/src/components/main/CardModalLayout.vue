<template>
<div class="card__container">
    <header>
        <slot name="header"></slot>
    </header>
    <div class="sign_contents">
<slot name="content"></slot>
    </div>
</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CardModalLayout extends Vue {}
</script>

<style lang="scss">
.card__container{
    top:0;
    position:fixed;
    z-index:10;
    width:100%;
    height:100%;
    background-color: rgba( 255, 255, 255, 0.5 );
}

</style>