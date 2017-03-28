<template>
    <form type="submit" 
          @submit.prevent="submitHandler(translation)">
        <input v-model="translation"/>
    </form> 
</template>


<script>
    import Vue from 'vue';

    export default Vue.component('TranslationField', {
        data() {
            return {
                translation: '',
            };
        },
        props: ['translate'],
        methods: {
            submitHandler(translation) {
                if (translation !== '') {
                    this.translate(translation);
                }
            },
        },
    });
</script>
