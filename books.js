import React from 'react'
import ReactDOM from 'react-dom'


var BookRow = React.createClass({
  render : function(){
    return (<div class="col-xs-4 col-sm-3 col-md-2">
              <img src={BOOKS[0].imgUrl} alt={BOOKS[0].type}/>
              </div>);
  }
});
export default BookRow

// var BookComponent = React.createClass({
//   render : function(){
//     var alias = this.props.book.alias;
//     var imgUrl = this.props.book.imgUrl;
//
//     return (
//       <div>{alias}</div>
//       <div>{imgUrl}</div>
//     );
//   }
// });



var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

// export default SearchBar


var LibraryComponent = React.createClass({
  render : function(){
    var rows = [];
    BOOKS.forEach(function(BOOKS) {
        rows.push(<BookRow />);
    });
    return (
      <div >
       <SearchBar />
      <section class="row">
          {rows}
      </section>
      </div>
    );
  }
});
export default LibraryComponent


// ReactDOM.render(
//     <SearchBar   />,
//     document.getElementById('container')
// );

var BOOKS = [{
"_id" : "54b1bbf7549e22123fd531cc",
"isbn" : "2290051462",
"title" : "Fly, tome 35 : Se livrer à fond au combat ! ! !",
"alias" : "fly%2Binada",
"tomeNumber" : "35",
"type" : "Manga",
"isOneShot" : false,
"imgUrl" : "http://ecx.images-amazon.com/images/I/51CTG3ZPVGL._SL160_.jpg",
"studio" : "J'ai lu",
"released" : "1999-04-22",
"language" : "Français",
"price" : "600"
},
{ "_id" : "54b1bc05549e22123fd53206", "isbn" : "2723475638", "title" : "Pack Bastard T1+T2", "alias" : "bastard", "tomeNumber" : "1", "type" : "Manga", "isOneShot" : false, "imgUrl" : "http://ecx.images-amazon.com/images/I/51Y55gARLeL._SL160_.jpg", "studio" : "Glenat", "released" : "", "language" : "", "price" : "760" },
{
"_id" : "54b1bc49549e22123fd5329c",
"isbn" : "2723436934",
"title" : "Ranma 1/2 Vol.38",
"alias" : "ranma",
"tomeNumber" : "1",
"type" : "Manga",
"isOneShot" : false,
"imgUrl" : "http://ecx.images-amazon.com/images/I/512Q3560RPL._SL160_.jpg",
"studio" : "Glénat",
"released" : "2002-09-18",
"language" : "Français",
"price" : "690" },
{
"_id" : "54b1bccd549e22123fd533e0",
"isbn" : "2723459632",
"title" : "Berserk (Glénat) Vol.23",
"alias" : "berserk",
"tomeNumber" : "23",
"type" : "Manga",
"isOneShot" : false,
"imgUrl" : "http://ecx.images-amazon.com/images/I/51u-IHjbMdL._SL160_.jpg",
"studio" : "Glénat",
"released" : "2008-01-30",
"language" : "Français",
"price" : "690"
}];
