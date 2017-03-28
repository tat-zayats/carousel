import Vue from 'vue';
import { mapMutations } from 'vuex';
import AsyncComputed from 'vue-async-computed';

import checkTranslation from '../../api/checkTranslation';
import { INCREASE_CORRECT_ANSWERS } from '../../store/mutations';

import TranslationField from '../TranslationField.vue';

 
Vue.use(AsyncComputed);

export default Vue.component('Card', {
    props: ['word',],
    data(){
        return{
            translation: '',
        }
    },
    computed: {
        states(){
            return{
                default: 'default',
                correct: 'correct',
                incorrect: 'incorrect',
            }
        },
    },
    asyncComputed: {
        state(){
            if (this.translation === ''){
                return Promise.resolve(this.states.default);
            }
            return checkTranslation(this.word, this.translation)
                    .then(r => r ? this.states.correct : this.states.incorrect)
                    .catch(() => this.states.default)
        },
    },
    watch: {
        'state': 'answersHandler',
    },
    components: {
        TranslationField,
    },
    methods: {
        ...mapMutations({
            correctAnswersHandler: [INCREASE_CORRECT_ANSWERS],
        }),
        setTranslation(translation){
            this.translation = translation.trim().toLowerCase();
        },
        answersHandler(){
            if(this.state === this.states.correct){
                this.correctAnswersHandler();
            }
        },
    }
});
