let jokers = [
	{
		name: 'Combination Lock',
		text: ['Discard a [Random Rank], [Random Rank], [Random Rank], and [Random Rank] in that order to gain $10 and a Double Tag. {C:red}Self-destructs.{} {C:grey}Ranks are chosen upon obtaining Combination Lock, and do not change.{}'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Crisp Twenty',
		text: ['+20 Mult. -1 Mult for every {C:money}$1{} you have more or less than {C:money}$20{}.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Frozen Joker',
		text: ['After 2 Rounds, create a {C:attention}Thawed Joker{}. {C:red}Self-destructs.{}'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Thawed Joker',
		text: ['{X:mult,C:white}X1.5{} Mult. X1.5 Chips.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Greeting Card',
		text: ['Gives first card in your hand a random modifier at the start of every Round.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Holey Joker',
		text: ['If there are {C:attention}exactly{} 3 3s in scoring hand, scored 3s give {C:mult}+11{} Mult.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Interdimensional Joker',
		text: ['After 3 Rounds, sell this to create a Joker that fuses with one of your other Jokers. (If you have no fusable Jokers, create a random fusable Joker instead.)'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'ミラクルミュージカル',
		text: ['+12 Chips. +12 Mult. Sell this after playing 12 Hands for -1 Ante, and to stop this from appearing for the rest of the game.'],
		image_url: 'assets/miraclemusical.png',
		rarity: 'Common',
	},
	{
		name: 'Powderkeg',
		text: ['At the end of each Round, Destroy the card in your hand with the lowest chip value.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Rewind',
		text: ['Retrigger every fourth card played.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Saucy Joker',
		text: ['+6 Mult for each Consumable Card held.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Sleight of Hand',
		text: ['Gains X0.05 Chips whenever an Ace is scored.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Sterling Silver',
		text: ['2 in 5 Chance to prevent Silver Cards from Tarnishing.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Traveling Salesman',
		text: ['Gains {C:money}$5{} Sell Value when played hand contains a Full House.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Ugly Sweater',
		text: ['X2.5 Chips when played hand contains a Three of a Kind.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Whirlpool',
		text: ['Upgrade all cards in the first Discard of the Round, giving them +10 Bonus Chips.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Common',
	},
	{
		name: 'Antique Joker',
		text: ['When a Silver Card is played, earn {C:money}$2{} for every level of Tarnish removed.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Band-Aids',
		text: ['When a card is Destroyed, 1 in 3 Chance to add a copy of it to your Deck.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Keep This Coupon',
		text: ['Score Five 5s to create a Voucher Tag.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Leprechaun',
		text: ['Enhance the last scoring card in each hand into a Lucky Card.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Lycanthropy',
		text: ['{X:mult,C:white}X0.15{} Mult for every level of Tarnish on each Silver Card in your Full Deck.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Piñata',
		text: ['Start of Round: Create a random Consumable. Self-destructs after 5 Rounds.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Reincarnation',
		text: ['When you Sell a Joker, gain a Negative Fool. Fools cannot create Judgements while this is in play.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Silent Auction',
		text: ['Sell this card to gain a [Random Tag] and a [Random Tag]. Tags change every Round.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Undertaker',
		text: ['Gains X0.2 Chips when a Playing Card or Joker is Destroyed.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Wormhole',
		text: ['+1 Mult for every card Discarded this Round. At the end of each Round, replace all cards you discarded with cards of a random rank, suit, and enhancement.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Power Stone',
		text: ['Anything that would give {X:mult,C:white}X1.5{} Mult gives {X:mult,C:white}X1.75{} Mult instead.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Space Stone',
		text: ['+1 Discard. +1 Hand Size.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Reality Stone',
		text: ['The first time each Round you Sell a Joker, create a random Joker of the same Rarity and Edition.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Soul Stone',
		text: ['Create a Spectral Card when a Boss Blind is defeated.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Time Stone',
		text: ['When another Joker upgrades itself, 1 in 4 Chance to upgrade it again.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Mind Stone',
		text: ['+2 Consumable Slots'],
		image_url: 'assets/placeholder.png',
		rarity: 'Uncommon',
	},
	{
		name: 'Infinity Gauntlet',
		text: ['+1 Joker Slot for every unique Infinity Stone in play. Sell this with all Six Stones in play to Destroy them and create Thanos.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'Counterfeit',
		text: ['If your first hand of the Round is a single Card with a Seal, remove the Seal and add it to two random Unsealed Cards in your hand.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'DJ Hallyboo',
		text: ['{X:mult,C:white}X4{} Mult. Loses {X:mult,C:white}X0.1{} Mult for every {C:money}$1{} of Sell Value of your other Jokers.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'It\'s Pizza Time!',
		text: ['{C:attention}While Sleeping:{} +{C:money}$1{} at the end of Round. Gains +{C:money}$1{} when Blind is defeated. {C:attention}While Awake:{} {X:mult,C:white}X0.5{} Mult. This cannot be Sold, and Self-destructs at the end of the Round. {C:attention}Wakes up on the last hand of the Round.{}'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'Joker\'s Best Friend',
		text: ['When you play a Hand, Upgrade all Cards in your Deck, giving them +1 Bonus Chip.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'Prestigious Pair',
		text: ['Discard a Two Pair to create a Random Tag.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'Seventh Horizon',
		text: ['Scoring 7s have a 2 in 7 Chance to create a Black Hole.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'Sticky Fingers',
		text: ['Choose an extra card from Packs you open.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'Too Many Cooks',
		text: ['When your consumable slots are full, all new consumables are Negative. When you pick up a Negative Consumable, lose {C:money}$5{}.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'Zen Garden',
		text: ['When a Stone Card scores, 1 in 4 Chance of generating a random Consumable.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Rare',
	},
	{
		name: 'D\'Acosta',
		text: ['Gains the Chip value of each card you Discard as Mult. Mult is reset after Hand is Scored.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Legendary',
	},
	{
		name: 'Mathurine',
		text: ['+1 Joker Slot. Sell {C:money}$15{} Worth of Jokers to gain +1 Joker Slot.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Legendary',
	},
	{
		name: 'Thanos',
		text: ['X0.5 Required Blind Score. Has the abilities of all six Infinity Stones.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Legendary',
	},
	{
		name: 'Auction House',
		text: ['When hand contains a Full House, gain a random Tag. When a Tag is triggered, earn $3.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/placeholder.png", "assets/placeholder.png"],
	},
	{
		name: 'Cyberspace',
		text: ['{X:mult,C:white}X0.25{} Mult and +{C:money}$1{} at the end of the Round for every Blind Skipped or Boss Blind Defeated.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Throwback.png", "assets/site/Rocket.png"],
	},
	{
		name: 'Digital Piracy Joker',
		text: ['Adds the sell value of all Jokers to Mult. Add {C:money}$1{} of sell value to every Joker and Consumable card at end of round.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Gift_Card.png", "assets/site/Swashbuckler.png"],
	},
	{
		name: 'Exploding Kitten',
		text: ['Lucky Cards have activation chances doubled, but also gain a 1 in 6 Chance of being destroyed after being played. Gains {X:mult,C:white}X0.25{} Mult when a Lucky Card activates.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Lucky_Cat.png", "assets/placeholder.png"],
	},
	{
		name: 'Garden Gnome',
		text: ['When Blind Selected, add a Stone Card to your Deck. When a Stone Card scores, 1 in 3 Chance of generating a random Consumable.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Marble_Joker.png", "assets/placeholder.png"],
	},
	{
		name: 'Halley\'s Comet',
		text: ['Every 4 Hands, Level Up the Poker Hand Played Twice.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Space_Joker.png", "assets/site/Loyalty_Card.png"],
	},
	{
		name: 'Pajamas',
		text: ['Gains X0.3 Chips if hand contains a Full House.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/placeholder.png", "assets/site/Spare_Trousers.png"],
	},
	{
		name: 'Phantom Thief Joker',
		text: ['When Blind is selected, convert all Discards to Hands. 1 in 3 Chance to create a Negative Fool for each Discard converted.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Burglar.png", "assets/placeholder.png"],
	},
	{
		name: 'Pseudoisochromatism',
		text: ['+2 Chips for each remaining card in Deck. 1 in 2 Chance to gain +1 Chip when a Pack is opened.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Blue_Joker.png", "assets/site/Hallucination.png"],
	},
	{
		name: 'Royal Family',
		text: ['Each Face Card held in your hand gives +5 Mult, then {X:mult,C:white}X1.5{} Mult.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Shoot_the_Moon.png", "assets/site/Baron.png"],
	},
	{
		name: 'Ruinous Prophecy',
		text: ['Each played card with [Suit] gives {X:mult,C:white}X1.5{} Mult when scored. Each played card with [Rank] gives {X:mult,C:white}X1.5{} Mult when scored. {C:grey}Suit and Rank are taken from a Random Card in your Deck.{}'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Ancient_Joker.png", "assets/site/The_Idol.png"],
	},
	{
		name: 'Stampede',
		text: ['{X:mult,C:white}X0.1{} Mult for every {C:money}$4{}. {X:mult,C:white}X2{} Mult and Double Interest against Boss Blinds.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Bull.png", "assets/site/Matador.png"],
	},
	{
		name: 'Still Life',
		text: ['Cards whose Suit doesn\'t match any previous Card in the hand give {X:mult,C:white}X2{} Mult when scored.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Flower_Pot.png", "assets/site/Seeing_Double.png"],
	},
	{
		name: 'The Fool\'s Journey',
		text: ['{X:mult,C:white}X0.25{} Mult for every unique Tarot Card used this run.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Fortune_Teller.png", "assets/site/Satellite.png"],
	},
	{
		name: 'Viking Funeral',
		text: ['Level Up the first hand you discard each round. Upgrade all cards that score in that hand, giving them +15 Bonus Chips.'],
		image_url: 'assets/placeholder.png',
		rarity: 'Fusion',
		fusion_jokers: ["assets/site/Burnt_Joker.png", "assets/placeholder.png"],
	},
];

// works the same.
let consumables = [
	{
	  name: "Aeon",
	  text: ["Enhances a card in to a Silver Card."],
	  image_url: "assets/placeholder.png",
	  rarity: "Tarot"
	},
	{
	  name: "Hope",
	  text: ["Select three or more cards, then add a copy of a random one of them to your hand."],
	  image_url: "assets/placeholder.png",
	  rarity: "Tarot"
	},
	{
	  name: "Charity",
	  text: ["Select 2 Cards, and give them +10 Bonus Chips."],
	  image_url: "assets/placeholder.png",
	  rarity: "Tarot"
	},
	{
	  name: "Faith",
	  text: ["Select 2 Cards, and convert them to the most common Suit in your Deck."],
	  image_url: "assets/placeholder.png",
	  rarity: "Tarot"
	},
	{
	  name: "Art",
	  text: ["Add a random Seal to a random Unsealed card in your hand."],
	  image_url: "assets/placeholder.png",
	  rarity: "Tarot"
	},
	{
	  name: "Adjustment",
	  text: ["Select 3 Cards, and give them -2 Rank. Cannot lower Rank past 2."],
	  image_url: "assets/placeholder.png",
	  rarity: "Tarot"
	},
	{
	  name: "Hunger",
	  text: ["Add $2 Sell Value to all Jokers and other Consumables."],
	  image_url: "assets/placeholder.png",
	  rarity: "Tarot"
	},
];

let card_modifications = [
 {
   name: "Silver",
   text: [
     "When in hand: X2 Chips, +1 Tarnish. Max 4 Tarnish. Each Tarnish takes away X0.25 Chips from this card. Remove all Tarnish when this card scores. "
   ],
   image_url: "assets/placeholder.png",
   rarity: "Enhancement"
 },
];

let decks = [
	{
	  name: "Chessed Deck",
	  text: [
	    "Start run with 26 Clubs and 26 Diamonds in Deck."
	  ],
	  image_url: "assets/placeholder.png",
	  rarity: "Deck"
	},
	{
	  name: "Folly Deck",
	  text: [
	    "Start run with a choice between 4 random Eternal Negative Jokers."
	  ],
	  image_url: "assets/placeholder.png",
	  rarity: "Deck"
	},
	{
	  name: "Fusion Deck",
	  text: [
	    "Fusing Jokers costs half the usual price. Start run with an Interdimensional Joker."
	  ],
	  image_url: "assets/placeholder.png",
	  rarity: "Deck"
	},
	{
	  name: "Gauntlet Deck",
	  text: [
	    "Sell 2 Jokers to create an Uncommon Tag. Start run with an Infinity Gauntlet."
	  ],
	  image_url: "assets/placeholder.png",
	  rarity: "Deck"
	},
];

let stickers = [];

let blinds = [];

let shop_items = [];

let cols = {
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
  "Fusion": "#F7D762"
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
	for (let joker of jokers) {
		console.log('adding joker', joker.name);

		joker.text = joker.text.map((line) => {
			return line + '{}';
		});

		joker.text = joker.text.join('<br/>');
		joker.text = joker.text.replaceAll('{}', '</span>');
		joker.text = joker.text.replace(
			regex,
			function replacer(match, p1, offset, string, groups) {
				let classes = p1.split(',');

				let css_styling = '';

				for (let i = 0; i < classes.length; i++) {
					let parts = classes[i].split(':');
					if (parts[0] === 'C') {
						css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
					} else if (parts[0] === 'X') {
						css_styling += `background-color: ${
							cols[parts[1].toUpperCase()]
						}; border-radius: 5px; padding: 0 5px;`;
					}
				}

				return `</span><span style='${css_styling}'>`;
			}
		);

		let joker_div = document.createElement('div');
		joker_div.classList.add('joker');
		if (joker.rarity === 'Sticker' || joker.rarity == 'Seal') {
			joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
		} else if (joker.soul) {
			joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
		} else {
			joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
		}

    if (joker.fusion_jokers) {
      let fusion_div = document.createElement("div");
      fusion_div.innerHTML = `
      <table>
        <tr>
        <td><img src="${joker.fusion_jokers[0]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
        <td><h1 style="padding-right: 20px; padding-left: 20px">+</h1></td>
        <td><img src="${joker.fusion_jokers[1]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
        </tr>
      </table>
      `
      joker_div.innerHTML += `
      <button type="button" class="collapsible">Show Fusion</button>`

      fusion_div.classList.add("content");
      joker_div.appendChild(fusion_div);
    }

		jokers_div.appendChild(joker_div);
	}
};

if (jokers.length === 0) {
	document.querySelector('.jokersfull ').style.display = 'none';
} else {
	let jokers_div = document.querySelector('.jokers');
	add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
	document.querySelector('.consumablesfull').style.display = 'none';
} else {
	let consumables_div = document.querySelector('.consumables');
	add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
	document.querySelector('.cardmodsfull').style.display = 'none';
} else {
	let cardmods_div = document.querySelector('.cardmods');
	add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
	document.querySelector('.decksfull').style.display = 'none';
} else {
	let decks_div = document.querySelector('.decks');
	add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
	document.querySelector('.stickersfull').style.display = 'none';
} else {
	let stickers_div = document.querySelector('.stickers');
	add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
	document.querySelector('.blindsfull').style.display = 'none';
} else {
	let blinds_div = document.querySelector('.blinds');
	add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
	document.querySelector('.shopitemsfull').style.display = 'none';
} else {
	let shopitems_div = document.querySelector('.shopitems');
	add_cards_to_div(shop_items, shopitems_div);
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      this.innerHTML = "Show Fusion"
      content.style.maxHeight = null;
    } else {
      this.innerHTML = "Hide Fusion"
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
