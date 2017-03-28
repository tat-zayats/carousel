<template>
    <button v-if="direction === 'prev'" 
            class="arrow" 
            @click="navigate">
            &lt;
    </button>
    <button v-else 
            class="arrow" 
            @click="navigate">
            &gt;
    </button>
</template>


<script>
    import Vue from 'vue';

    export default Vue.component('Arrow', {
        props: ['direction', 
                'navigate',
        ],
    });
</script>
