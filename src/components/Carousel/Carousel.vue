<template>
    <section class="carousel">
        <template v-if="sessionState.loading">
            <h1>LOADING...</h1>
        </template>

        <template v-if="sessionState.startedWithError">
            <h1>ERROR</h1>
            <button @click="reloadSession" 
                    class="update error">Update</button>
        </template>

        <template v-if="sessionState.started">
            <Arrow direction="prev" 
                   :navigate="showPrev" />
            <CardsBox :cards="activeWords" /> 
            <Arrow direction="next" 
                   :navigate="showNext"/>
            <button @click="reloadSession" 
                    class="update">Update</button>
        </template>

        <template v-if="sessionState.willBeFinished">
            <Popup :onClose="finishSession" />
        </template>
    </section>
</template>

<script src="./Carousel"></script>
