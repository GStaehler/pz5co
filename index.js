function speaking() {

	function reponse(botSpeaking) {
		botSpeaking.classList.add("bg-info", "text-white", "rounded", "p-2", "input-margin");
		document.getElementById("loader").style.display = "none";
		document.getElementById("conversation").appendChild(botSpeaking);
	}

	var input = document.getElementById("userInput").value;
	if (input.length > 0) {
		var userSpeaking = document.createElement("p");
		userSpeaking.textContent = input;
		userSpeaking.classList.add("bg-danger", "text-white", "rounded", "p-2", "input-margin");
		document.getElementById("conversation").appendChild(userSpeaking);
	}

	// SALUTATION
	if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/hey.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/coucou.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/salut.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/bonjour.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/bonsoir.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/yo.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/hello.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var now = new Date();
				var heure = now.getHours();
				if (heure > 18) {
					salutations = ["Salut !", "Bonsoir !", "Coucou !", "Hey !", "Oh, salut !", "Oh, bonsoir !"];
				} else {
					var salutations = ["Salut !", "Bonjour !", "Coucou !", "Hey !", "Oh, salut !", "Oh, bonjour !"];
				}
				var salutation = salutations[Math.floor(Math.random() * salutations.length)];
				botSpeaking.textContent = salutation;
				reponse(botSpeaking);
			}, 2000);
		}, 2000);
	}

	// DATE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/on est le combien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/quel jour sommes nous.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/on est quel jour.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/quel jour on est.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/quelle est la date d'aujourd'hui.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var now = new Date();
				var mois = now.getMonth() + 1;
				var nomduMois;
				switch (mois) {
					case 1:
						nomduMois = "janvier";
						break;
					case 2:
						nomduMois = "février";
						break;
					case 3:
						nomduMois = "mars";
						break;
					case 4:
						nomduMois = "avril";
						break;
					case 5:
						nomduMois = "mai";
						break;
					case 6:
						nomduMois = "juin";
						break;
					case 7:
						nomduMois = "juillet";
						break;
					case 8:
						nomduMois = "août";
						break;
					case 9:
						nomduMois = "septembre";
						break;
					case 10:
						nomduMois = "octobre";
						break;
					case 11:
						nomduMois = "novembre";
						break;
					case 12:
						nomduMois = "décembre";
						break;
				}
				var jour = now.getDate();
				botSpeaking.textContent = "On est le " + jour + " " + nomduMois + " !";
				reponse(botSpeaking);
			}, 3000);
		}, 2000);
	}

	// HEURE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/quelle heure est il.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/il est quelle heure.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/quelle heure il est.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/donne moi l'heure.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var now = new Date();
				var jour = now.getDate();
				var heure = now.getHours();
				var minute = now.getMinutes();
				if (minute < 10) {
					minute = "0" + minute;
				}
				botSpeaking.textContent = "Il est " + heure + "h" + minute + ".";
				reponse(botSpeaking);
			}, 3000);
		}, 2000);
	}

	// PRESENTATION
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/quel est ton nom.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/qui es tu.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/t'es qui.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/qui t'es.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comment t'appelles tu.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/donne moi ton nom.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/présente toi.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comment tu t'appelles.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var presentations = ["Je m'appelle PZ-5CO, enchantée."];
				var presentation = presentations[Math.floor(Math.random() * presentations.length)];
				botSpeaking.textContent = presentation;
				reponse(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// BLAGUE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/raconte moi une blague.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/raconte-moi une blague.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/raconte une blague.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je veux une blague.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je veux que tu me racontes une blague.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/fais tu de l'humour.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/fais de l'humour.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/fais moi rire.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/fais moi rigoler.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var blagues = ["Quel est le contraire du Plutonium ? Le Mointonium !", "Votre ordinateur est infecté par un virus.", "Je ne suis pas un robot ! Ah si...", "Tu as cru ?", "Je fais aussi la cuisine."];
				var blague = blagues[Math.floor(Math.random() * blagues.length)];
				botSpeaking.textContent = blague;
				reponse(botSpeaking);
			}, 4000);
		}, 1000);
	}

	// POLITESSE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comment vas tu.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comment vas-tu.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comment ca va.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comment ça va.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ca va?.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ça va?.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/tout va bien?.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/tout va pour le mieux?.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/la forme?.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comment va?.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/tu vas bien.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var politesses = ["Je vais bien, et toi comment vas tu?"];
				var politesse = politesses[Math.floor(Math.random() * politesses.length)];
				botSpeaking.textContent = politesse;
				reponse(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// POLITESSE 2
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je vais bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/plutot bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/pas mal.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je vais super bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je pète la forme.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/en super forme.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ca va mieux.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ça va mieux.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ca va bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ça va bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/oui ca va.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/oui ça va.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ouai ca va.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ouai ça va.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/nickel.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ouai nickel.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var politesses2 = ["Super !", "Ça roule !", "Tant mieux !", "Oh, tant mieux !"];
				var politesse2 = politesses2[Math.floor(Math.random() * politesses2.length)];
				botSpeaking.textContent = politesse2;
				reponse(botSpeaking);
			}, 2000);
		}, 1000);
	}

	// POLITESSE 3
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je ne vais pas bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je ne vais pas trop bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je ne vais pas très bien.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je vais mal.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/mal.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/très mal.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/bof.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/pas trop.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ca va pas.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ça va pas.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/non ca va pas.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/non ça va pas.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/pas des masses.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/pas ouf.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/comme ci comme ça.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je suis malade.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je suis très malade.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je suis trop malade.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/malade.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/j'ai le cancer.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/j'ai un cancer.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je fais une dépression.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/vite fais.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var politesses3 = ["Oh non !", "Il faut se reposer !", "Demain est un autre jour !", "Oh, courage !"];
				var politesse3 = politesses3[Math.floor(Math.random() * politesses3.length)];
				botSpeaking.textContent = politesse3;
				reponse(botSpeaking);
			}, 2000);
		}, 1000);
	}

	// ADDITION
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/.*\+.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				botSpeaking.textContent = parseFloat(userSpeaking.textContent.split('+')[0]) + parseFloat(userSpeaking.textContent.split('+')[1]);
				reponse(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// DESSIN CERCLE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine un cercle.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine moi un cercle.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine un rond.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine moi un rond.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("canvas");
				botSpeaking.style.height = "100px";
				botSpeaking.style.width = "200px";
				var c = botSpeaking;
				var ctx = c.getContext("2d");
				ctx.beginPath();
				ctx.lineWidth = "2";
				ctx.arc(150, 75, 60, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.fillStyle = "white";
				ctx.fill();
				document.getElementById("loader").style.display = "none";
				document.getElementById("conversation").appendChild(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// DESSIN CARRE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine un carré.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine moi un carré.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("canvas");
				botSpeaking.style.height = "100px";
				botSpeaking.style.width = "200px";
				var c = botSpeaking;
				var ctx = c.getContext("2d");
				ctx.beginPath();
				ctx.lineWidth = "2";
				ctx.rect(100, 25, 100, 100);
				ctx.stroke();
				ctx.fillStyle = "white";
				ctx.fill();
				document.getElementById("loader").style.display = "none";
				document.getElementById("conversation").appendChild(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// DESSIN TRIANGLE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine un triangle.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/dessine moi un triangle.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("canvas");
				botSpeaking.style.height = "100px";
				botSpeaking.style.width = "200px";
				var c = botSpeaking;
				var ctx = c.getContext("2d");
				ctx.beginPath();
				ctx.lineWidth = "2";
				ctx.moveTo(80, 130);
				ctx.lineTo(220, 130);
				ctx.lineTo(150, 20);
				ctx.closePath();
				ctx.stroke();
				ctx.fillStyle = "white";
				ctx.fill();
				document.getElementById("loader").style.display = "none";
				document.getElementById("conversation").appendChild(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// SOUSTRACTION
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/.*\-.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				botSpeaking.textContent = parseFloat(userSpeaking.textContent.split('-')[0]) - parseFloat(userSpeaking.textContent.split('-')[1]);
				reponse(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// MULTIPLICATION
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/.*\*.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				botSpeaking.textContent = parseFloat(userSpeaking.textContent.split('*')[0]) * parseFloat(userSpeaking.textContent.split('*')[1]);
				reponse(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// DIVISION
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/.*\/.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				botSpeaking.textContent = parseFloat(userSpeaking.textContent.split('/')[0]) / parseFloat(userSpeaking.textContent.split('/')[1]);
				reponse(botSpeaking);
			}, 3000);
		}, 1000);
	}

	// CAPACITES APPRISES
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/que sais tu faire.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/que peux tu faire.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/de quoi es tu capable.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/a quoi sert tu.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/a quoi tu sert.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var presentation = "Je suis capable de saluer, me présenter, répondre à un remerciement, ouvrir un nouvel onglet ou une page web, actualiser la page, donner la date et l'heure, dessiner un cercle, un carré ou un triangle, additionner, soustraire, multiplier et diviser, et faire de l'humour.";
				botSpeaking.textContent = presentation;
				reponse(botSpeaking);
			}, 4000);
		}, 1000);
	}

	// OUVRIR UN NOUVEL ONGLET
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ouvre un nouvel onglet.*/)) {
		setTimeout(function () {
			window.open("", "_blank");
		}, 1000);
	}

	// ACTUALISER LA PAGE
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/actualise.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
		}, 1000);
		setTimeout(function () {
			var botSpeaking = document.createElement("p");
			var presentation = "A tout de suite !";
			botSpeaking.textContent = presentation;
			reponse(botSpeaking);
			setTimeout(function () {
				window.location.reload();
			}, 2000);
		}, 2000);
	}

	// OUVRIR UNE PAGE WEB
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/ouvre.*/)) {
		setTimeout(function () {
			var webPage = userSpeaking.textContent.split(" ").splice(-1)[0];
			if (webPage == "!" || webPage == ".") {
				webPage = userSpeaking.textContent.split(" ").splice(-2)[0];
			}
			window.open("https://" + webPage.replace(".", "").replace("!", "") + ".com", "_blank");
		}, 1000);
	}

	// REPONSE A UN REMERCIEMENT
	else if (userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/je te remercie.*/) || userSpeaking.textContent.toLowerCase() == userSpeaking.textContent.toLowerCase().match(/.*merci.*/)) {
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var politesses4 = ["Il n'y a pas de quoi !", "De rien !", "Ce n'est rien !", "Je t'en prie !", "Je suis là pour ça !", "Pas de problème !"];
				var politesse4 = politesses4[Math.floor(Math.random() * politesses4.length)];
				botSpeaking.textContent = politesse4;
				reponse(botSpeaking);
			}, 2000);
		}, 1000);
	} else { // INCOMPREHENSION
		setTimeout(function () {
			document.getElementById("loader").style.display = "block";
			setTimeout(function () {
				var botSpeaking = document.createElement("p");
				var erreurs = ["Quoi?", "Pardon?", "Oui?", "Je n'ai pas compris !"];
				var erreur = erreurs[Math.floor(Math.random() * erreurs.length)];
				botSpeaking.textContent = erreur;
				reponse(botSpeaking);
			}, 2000);
		}, 1000);
	}
	document.getElementById("userInput").value = "";
}
