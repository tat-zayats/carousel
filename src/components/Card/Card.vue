<template>
    <div class="card" 
         :class="state">
        <h3>{{word}}</h3>
        <TranslationField 
            :translate="setTranslation" 
            v-if="state !== 'correct'"/>
        <h4 v-else>{{translation.toUpperCase()}}</h4>
    </div>
</template>

<script src="./Card"></script>
