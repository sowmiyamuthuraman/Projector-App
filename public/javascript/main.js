$.ajax(
  {type:"GET",
  url:"/movies/all",
  dataType:"json",
  success:function(response)
  {
  //  console.log("Data from success",response);
  var data = formObject(response.data);
  constructDOM(data);
  },
  error:function(err){
    console.log("Error in GET Method",err);
  }

});

function formObject(response){
  var flags=[],categoryObject=[];
  var length=response.length;
  for(var i=0;i<length;i++){
    var movie=response[i];
  //  console.log("movie",m
  var index=flags.indexOf(movie.language);
  if(index>=0){
    //flags.push(movie.language);
    categoryObject[index].movies.push(movie);
    continue;
  }
  else{
    flags.push(movie.language);
  }
  var objectSchema={
    "category":movie.language,
    "movies":[]
  }
  objectSchema.movies.push(movie);
  categoryObject.push(objectSchema);

  console.log("category",categoryObject);
}

    console.log(flags);

  console.log("formObject response",response);
  return categoryObject;

}
function constructDOM(data){
var categoryContent=[];
  for(var i=0;i<data.length;i++){
    var objectSchema=data[i];
    console.log("construct dom data",objectSchema);
    var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
    categoryContent.push(categoryTitle);
  }
  //console.log("categ",categoryContent);
    $('section.content').html(categoryContent);

}
