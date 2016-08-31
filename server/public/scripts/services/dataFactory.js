colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'papayawhip', 'green'];
  var numColor = 4



  var addColor = function(color){
    colors.push(color);
    console.log('new color array: ' ,colors)
  }

  // var removeColor = function (color){
  //   console.log('removed color: ', color);
  //   colors.pop(color);
  //   console.log('new color array: ' , colors);

  // }

  return {
    colors: colors,
    addColor: function(color){
      addColor(color);
    },
    // removeColor: function(color){
    //   removeColor(color);
    // }
  };


}]);
