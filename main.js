class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.n_value = value;
        switch(value) {
            case 1:
                this.s_value = "Ace";
                break;
            case 2:
                this.s_value = "Two";
                break;
            case 3:
                this.s_value = "Three";
                break;
            case 4:
                this.s_value = "Four";
                break;
            case 5:
                this.s_value = "Five";
                break;
            case 6:
                this.s_value = "Six";
                break;
            case 7:
                this.s_value = "Seven";
                break;
            case 8:
                this.s_value = "Eight";
                break;
            case 9:
                this.s_value = "Nine";
                break;
            case 10:
                this.s_value = "Ten";
                break;
            case 11:
                this.s_value = "Jack";
                break;
            case 12:
                this.s_value = "Queen";
                break;
            case 13:
                this.s_value = "King";
                break;
        }
        
    }

    show() {
        console.log(this.s_value + " of " + this.suit + "s");
    }
} // end card class

class Deck {
    constructor() {
        var suits = ["Diamond", "Heart", "Club", "Spade"];
        this.cards = [];
        for(let i = 0; i < 4; i++) {
            for(let j = 1; j <= 13; j++) {
                this.cards.push(new Card(suits[i], j))
            }
        }
    }

    show() {
        for(let i = 0; i < this.cards.length; i++) {
            this.cards[i].show();
        }
    }

    shuffle() {
        var m = this.cards.length, t, i;

        while(m) {
            i = Math.floor(Math.random() * m--);

            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }

    reset() {
        var suits = ["Diamond", "Heart", "Club", "Spade"];
        this.cards = [];
        for(let i = 0; i < 4; i++) {
            for(let j = 1; j <= 13; j++) {
                this.cards.push(new Card(suits[i], j))
            }
        }
    }

    deal() {
        var x = Math.floor(Math.random() * this.cards.length) + 1;
        var card = this.cards[x];
        this.cards.splice(x, 1);
        return card;
    }
} // end deck class

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    takeCard(deck) {
        this.hand.push(deck.deal());
    }

    discardCard(card) {
        var i = this.hand.indexOf(card);
        this.hand.splice(i, 1);
    }
}

const deck1 = new Deck();
deck1.shuffle();
let card = deck1.deal();
card.show();
console.log("********************");
deck1.show();