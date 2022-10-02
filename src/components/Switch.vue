<template>
    <!-- Rounded switch -->
    <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
</template>
<script>
    export default {
        name: "Switch"
    }
</script>
<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .slider {
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }
</style>