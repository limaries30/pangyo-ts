<template>
<div class="sign__container">
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
export default class SignLayout extends Vue {}
</script>

<style>

</style>