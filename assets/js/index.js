$(document).ready(function() {

 var hero_img = new Array();
  hero_img[0] = new Image();
  hero_img[0].src = 'assets/images/link.png';
  hero_img[0].id = 'image';

  hero_img[1] = new Image();
  hero_img[1].src = 'assets/images/bongo.png';
  hero_img[1].id = 'image';

  hero_img[2] = new Image();
  hero_img[2].src = 'assets/images/gandondorf.jpg';
  hero_img[2].id = 'image';

  hero_img[3] = new Image();
  hero_img[3].src = 'assets/images/queen.png';
  hero_img[3].id = 'image';

  hero_img[4] = new Image();
  hero_img[4].src = 'assets/images/volvagia.png';
  hero_img[4].id = 'image';

  hero_img[5] = new Image();
  hero_img[5].src = 'assets/images/phantom.png';
  hero_img[5].id = 'image';

  hero_img[6] = new Image();
  hero_img[6].src = 'assets/images/twin.png';
  hero_img[6].id = 'image';

  hero_img[7] = new Image();
  hero_img[7].src = 'assets/images/morpha.png';
  hero_img[7].id = 'image';

  hero_img[8] = new Image();
  hero_img[8].src = 'assets/images/barinade.png';
  hero_img[8].id = 'image';

  hero_img[9] = new Image();
  hero_img[9].src = 'assets/images/king.png';
  hero_img[9].id = 'image';



  //var choices_name = ["Link", "Bongo Bongo", "Gandondorf", "Queen Gohma","Volvagia","Phantom Ganon","Twinirova","Morpha","Barinade" , "King Dodongo"]

  var choices_data = ["He is usually depicted as a courageous young boy or teenager in green clothing who leaves his home and any relatives to pursue his destiny: fighting the evil forces threatening the land. Over the course of his adventure, Link defeats legions of evil monsters, explores vasts lands, helps anyone he meets struggling, navigates deadly dungeons, and collects mythical items while pursuing his quest for justice and peace. In the end, he gains the power needed to thwart his main enemy and becomes a legendary hero. He is considered an iconic character in video gaming and the very symbol of the Zelda franchise, and remains one of the most popular video game protagonists."
   ,"Bongo Bongo is a gargantuan, invisible, and evil spirit, appearing as a one-eyed monster with disembodied hands and a black-purpleish colorization. Prior to the game's events, it was sealed away by Impa in the bottom of the Well of Three Features in Kakariko Village. However, when Ganondorf assumes power, Bongo Bongo eventually breaks the seal placed on it and sets Kakariko Village on fire. Link arrives just as Bongo Bongo escapes, but fails to stop it from traveling to the Shadow Temple." 
   ,"Great King of Evil or the Dark Lord Ganondorf was born a member of the Gerudo; as the only male member to be born in a hundred years, Ganondorf is made either the King of the Gerudo or the Guardian of the Desert, depending on the game. Gifted with powerful magic, Ganondorf often seeks the omnipotent Triforce to grant his wish of conquering the entire world. He frequently wields the Triforce of Power, and stages coups against the Royal Family of Hyrule to take the Hyrulean Throne by force."
   ,"Parasitic Armored Arachnid Queen Gohma is the 'curse' that was placed on the Great Deku Tree by Ganondorf. A spider-like creature, she can hatch Gohma Larvae to help her defeat Link. nterestingly, Queen Gohma's boss title labels her only as 'Gohma' The term 'Queen Gohma' is only used in-game by the Deku Scrub Brothers outside her lair."
   ,"Scorching Hot Cave Dwelling Dragon  Boss of the Fire Temple, the second dungeon in the adult portion of The Legend of Zelda: Ocarina of Time, and the fifth dungeon overall. Volvagia is a monstrous dragon and was a blight upon Hyrule, specifically Death Mountain, for many years prior to the events of the game. He flies through the air in a blaze of fire and dives through pools of molten lava, unharmed despite their intense heat. Volvagia is infamous among the Gorons for devouring their kind alive, but was eventually defeated and slain by the Hero of the Gorons, who wielded the Megaton Hammer."
   ,"Evil Spirit of Another Dimension  Boss of the Forest Temple, the first dungeon in the adult portion of The Legend of Zelda: Ocarina of Time, and the fourth dungeon overall. Created by Ganondorf to hold Saria captive, he is depicted as being nearly identical to Ganondorf, with the only exception being his skull-like face."
   ,"Twin Sorceresses  Bosses from The Legend of Zelda: Ocarina of Time. They can be found in the Spirit Temple, the fifth dungeon in the adult portion of the game and the ninth dungeon overall. Twinrova is fought both as two separate entities, and one singular unit. Koume controls fire, while Kotake controls ice."
   ,"Aquatic Cell Nucleus  Boss of the Water Temple, the sixth dungeon in The Legend of Zelda: Ocarina of Time. It is a large, amoebic creature consisting of a main nucleus surrounded by blue cytoplasm. The nucleus is able to manipulate the water in a pool, allowing it to grab, constrict, or strike Link."
   ,"Electric Rotating Intestinal Worm Boss of Inside Jabu-Jabu's Belly, the third dungeon in The Legend of Zelda: Ocarina of Time. This parasitic organism is revealed to be the cause of Lord Jabu-Jabu's gastrointestinal distress. It appears to have a symbiotic relationship of some sort with Bari. It also bears some resemblance to Kalle Demos."
   ,"Infernal Dinosaur King Dodongo is the leader of the Dodongo sent to the cavern by Ganondorf. This is problematic for the Gorons, as King Dodongo loves to eat them. Interestingly, even though the size of King Dodongo is impressive, he is apparently not the largest one of his kind, as the entrance to his lair is adorned with what appears to be the skull of a Dodongo even bigger than him."]

var hangman = {

	random: 0,
	word_bank: ["link", "bongo bongo", "gandondorf", "queen gohma","volvagia","phantom ganon","twinirova","morpha","barinade" , "king dodongo"],
	select: "",
	guess: "",
	wins: 0,
	loss: 0,
	guess_left: 1,
	dashs: [],
	splits: [],
	correct_letter: [],
	replace_array: [],
	alphabet:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],

	random_num: function(){

	hangman.random = Math.floor((Math.random() * hangman.word_bank.length));		

	},


	select_word: function() {

		hangman.select = hangman.word_bank[hangman.random];

	},

	picture: function() {



	},

	dash_word: function() {

		for (var i = 0; i < hangman.select.length; i++) {

			if (hangman.select[i] == " ") {
				hangman.dashs.push("&nbsp;");
			} else {
				hangman.dashs.push("_");	
			}

		}
	},

	splits_word: function() {


		hangman.splits = hangman.select.split("");

		console.log(hangman.splits);


	},

	correct_i: function() {

		hangman.correct_letter = [];

		for (var i = 0; i < hangman.splits.length; i++) {
					
			if (hangman.splits[i] == hangman.guess) {

				hangman.correct_letter.push(i);

			}

		}		
		console.log(hangman.correct_letter);
	},

	replace_dash: function(){

		for (var i =  0; i < hangman.correct_letter.length; i++) {
		
			hangman.dashs[hangman.correct_letter[i]] = hangman.guess;

		}

		console.log(hangman.dashs);

	},

	alphabet_splice: function(){

		var index = this.alphabet.indexOf(this.guess);
		this.alphabet.splice(index,1);

	},

	check_lost: function(){

		if(this.splits.indexOf(this.guess) == -1){

			this.guess_left--;

		}

		if (this.guess_left == 0) {

			$(".title").html("It was " + this.word_bank[this.random]);
			$('.pic').html(hero_img[this.random]);
			$('.pic').append("<p>" + choices_data[this.random] + "</p>");
		}

	},

	check_win(){

		if (this.dashs.indexOf("_") == -1 ) {}

	},

	board_set: function(){

		hangman.random_num();
		hangman.select_word();
		hangman.dash_word();
		hangman.splits_word();
		hangman.correct_letter = [];
		hangman.replace_array = [];

	},

	play_game: function(){

		
		hangman.board_set();

		var alphabet = hangman.alphabet;

		//$(".gameboard").html(hangman.dashs);

		$(".gameboard").html("<p>Game Board</p>" + hangman.dashs.join(" "));

			document.onkeyup = function(e){

				hangman.guess = String.fromCharCode(e.keyCode).toLowerCase();

				if (alphabet.indexOf(hangman.guess) >= 0) {

					hangman.correct_i();

					console.log(hangman.correct_letter);

					hangman.replace_dash();

					$('.gameboard').html("<p>Game Board</p>" + hangman.dashs.join(" "));

					hangman.alphabet_splice();

					hangman.check_lost();

				}

			}

	}

};
  var num_words = hangman.word_bank.length;
  
hangman.play_game();
console.log(hangman.random);
});


