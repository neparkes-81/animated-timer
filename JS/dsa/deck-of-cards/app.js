function makeDeck(){
    const deck = [];
}

function drawCard(deck){
    return deck.pop()
}

const myDeck = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values = '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    drawnCards = [],

    initiaizeDeck(){
        const {
            suits,
            values,
            deck
        } = this;
        for(let value of values.split(',')){
            for (let suit of suits){
                deck.push({
                    value,
                    suit
                });
            }
        }
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultipleCards(numCards){
        const cards = [];
        for(let i = 0; i < numCards; i++){
            cards.push(this.drawCard());
        }
        this.drawnCards.push.apply(this.drawnCards, cards);
        return cards;
    },
    shuffle(){
        const {deck} = this;
        for (let i = deck.length; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            //swap
            deck[i], deck[j] = deck[j], deck[i];
        }
    }

}
