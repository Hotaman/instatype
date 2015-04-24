//var InfiniteGrid = require('../react-infinite-grid-master/src/grid.js');

var React = require('react');

// Displays grid of images
var GridComponent = React.createClass({

  getDefaultProps: function() {
    return {
      data: [],
    };
  },

  render: function(){

    var resultNodes = this.props.data.map(function(result){
        return (<img src={result.image} key={result.id} />);
    });

    /*
    return(
      <InfiniteGrid entries={resultNodes} />
    );
    */

    return (
        <div>
            {resultNodes}
        </div>
    );
  }
});


module.exports = GridComponent; 