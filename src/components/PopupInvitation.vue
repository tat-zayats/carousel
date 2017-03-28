<template>
    <section class="popup-invitation">
        <span class="cross" 
              @click="onClose">✖</span>
        <h3>Is your JavaScript as good as your English? 
            Join us!
        </h3>
        <a @click="onClose" 
           target="_blank"
           href="https://vk.com/smartjs">
            <img src="../logo.jpg" />
        </a>
    </section>
</template>

<script>
    import Vue from 'vue';

    export default Vue.component('PopupInvitation', {
        props: ['onClose'],
    });
</script>

