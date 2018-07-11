$(()=>{
  // let search = [];

  let searchBar = $('#submit-btn').on('click',()=>{
    // Plants.find({$or: [{name:{search}}, {tags:{search}}, {description:{search}}]}, (err, result)=>{
    //   res.render(houseplants.ejs);
    // }
    console.log('CLICKED!');
  });

});

module.exports = searchBar;
