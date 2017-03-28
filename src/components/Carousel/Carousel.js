import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';

import { SET_CORR_ANSW_TO_ZERO,
         SET_SESSION_STATE,
       } from '../../store/mutations';
import { LOAD_WORDS,
         CLEAR_STATE,
       } from '../../store/actions';
import { setWillBeFinishedState,
         setFinishedState,
       } from '../../helpers/actionCreators';

import Arrow from '../Arrow.vue';
import CardsBox from '../CardsBox/CardsBox.vue';
import PopupInvitation from '../PopupInvitation.vue';

export default Vue.component('Carousel', {
    data(){
        return{
            position: 0,
        }
    },
    computed: {
        ...mapState({
            words: state => state.words,
            correctAnswers: state => state.correctAnswers,
            successfulSessionCorrAnsw: state => state.successfulSessionCorrAnsw,
            sessionState: state => state.sessionState,
        }),
        activeWords(){
            const {position, words} = this;
            const activeWords = 
                position === words.length - 1 ?
                [words[position], words[0]] :  
                [words[position], words[position + 1]];
            return activeWords;
        },
        sessionIsSuccessful(){
            if(this.correctAnswers < this.successfulSessionCorrAnsw){
                return false;
            }
            return true;
        }
    },
    components: {
        CardsBox,
        Arrow,
        Popup: PopupInvitation,
    },
    methods: {
        ...mapMutations([
            SET_CORR_ANSW_TO_ZERO,
            SET_SESSION_STATE,
        ]),
        ...mapActions([ 
            LOAD_WORDS,
            CLEAR_STATE,
        ]),
        showPrev: function(){
            const {position, words} = this;
            this.position = position === 0 ? words.length - 2 : position - 2;
        },
        showNext: function(){
            const {position, words} = this;
            this.position = position === words.length - 2 ? 0 : position + 2;
        },
        finishSession(){
            this[SET_CORR_ANSW_TO_ZERO]();
            this[SET_SESSION_STATE](setFinishedState());
        },
        reloadSession(){
            if(this.sessionIsSuccessful){
                this[SET_SESSION_STATE](setWillBeFinishedState());
                return;                
            }
            // this[SET_SESSION_STATE](setFinishedState());
            this[CLEAR_STATE]();
            this[LOAD_WORDS]();
        },
    },
    mounted(){
        this[LOAD_WORDS]();
    }, 
});
