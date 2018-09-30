/*var element = React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {},
		React.createElement('li', {},
			React.createElement('h2', {}, 'Harry Potter'),
			React.createElement('p', {}, 'Film o młodym czarodzieju'),
			),
		React.createElement('li', {},
			React.createElement('h2', {}, 'Król Lew'),
			React.createElement('p', {}, 'Film o królu sawanny')
			),
		React.createElement('li', {},
			React.createElement('h2', {}, 'Kapitan Phillips'),
			React.createElement('p', {}, 'Film opowiadający historię porwania statku')
			)
		)
	);*/


var movies = [
	
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o młodym czarodzieju.',
		image: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5XQS/image?locale=en-nz&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg'
	},

	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny.',
		image: 'https://images-na.ssl-images-amazon.com/images/I/51wE754kPiL._SY445_.jpg'
	},

	{
		id: 3,
		title: 'Kapitan Phillips',
		desc: 'Film opowiadający historię porwania statku.',
		image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtBp2U_GivKqB_d3jNV6YaHWk3-takKR_tljlxgVb0P3wBm5Ic'
	},

	{
		id: 4,
		title: 'Iniemamocni',
		desc: 'Film o przygodach rodziny superbohaterów.',
		image: 'https://images-na.ssl-images-amazon.com/images/I/41xmzNbNOqL._SY300_.jpg'
	},

	{
		id: 5,
		title: 'Titanic',
		desc: 'Film o słynnej katastrofie statku pasażerskiego.',
		image: 'https://movieposters2.com/images/728632-b.jpg'
	}
]


var moviesElement = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.image})
	);
});

var element = React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów:'),
	React.createElement('ul', {}, moviesElement)
);


ReactDOM.render(element, document.getElementById('app'));