var movies = [
    {
      id: 1,  
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      cast: 'Daniel Radcliff',
      img: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=60'
    },
    {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    cast: 'Elton John',
    img: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=60'
   }
];



var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('h2', {}, this.props.title) 
      )
  },
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('p', {}, this.props.desc) 
      )
  },
});

var MovieCast = React.createClass({
  propTypes: {
    cast: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('p', {}, 'Cast: ' + this.props.cast) 
      )
  },
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('img', {src: this.props.img}) 
      )
  },
});


var MovieItem = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('li', {key: this.props.data.id},
        React.createElement(MovieTitle, {data: this.props.data.title}),
        React.createElement(MovieDesc, {data: this.props.data.desc}),
        React.createElement(MovieCast, {data: this.props.data.cast}),
        React.createElement(MovieImage, {data: this.props.data.img})
    )
      )
  },
});

var element =
React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));

  var moviesElements = movies.map(function(movie) {
   return React.createElement(MovieItem, {key: movie.id, data: movie})
      
  });
  