import Vue from 'vue';
import Card from '../Card/Card.vue';

export default Vue.component('CardsBox', {
    props: ['cards'],
    components: {
        Card,
    },
    render(){
        return(
            <section class="itemsList">
            {
                this.cards.map(card => (
                    <keep-alive>
                        <Card 
                            word={card.word}
                            key={card.id}/>
                    </keep-alive>
                ))
            }
            </section>
            
        )
    },
});
