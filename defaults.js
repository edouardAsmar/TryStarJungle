var companies = [
	{name :"Disney", image : 'http://vignette4.wikia.nocookie.net/logopedia/images/d/dd/Disney_Logo.png/revision/latest?cb=20121228101315', category:"Media", description:"Shop here for Princesses and Mickey Mouse!"},
	{name :"Lego", image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2000px-LEGO_logo.svg.png", category:"Building", description:"Shop here if you dream of being an engineer!"},
	{name : "MegaBlocks", image : "http://vignette1.wikia.nocookie.net/lego/images/8/85/New_Mega_Bloks_logo.png/revision/latest?cb=20100401000031", category:"Building", description:"Shop here if you want to shamelessly rip off lego!"},
	{name : "Nintendo", image : "http://logok.org/wp-content/uploads/2014/12/Nintendo-logo-red.png", category:"Video Games", description : "Shop here if you want to get your smash on!"},
	{name :"Barbie", image : "https://upload.wikimedia.org/wikipedia/commons/a/aa/Barbie_Logo.png", category:"Dolls", description : "Shop here if you want to destroy your body image!"},
	{name : "Playmobil", image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Playmobil_logo.svg/2000px-Playmobil_logo.svg.png", category:"Building", description:"Shop here if your hands are huge!"}

];

var getCompanies = function () {
	return companies;
};

var getMoney = function() {
	return 50;
};

var getUser = function() {
	return {
		firstName : 'Henry',
		lastName : "Magun",
		interests : ["Dolls", "Video Games"]
	};
};