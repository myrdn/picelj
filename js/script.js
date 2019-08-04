//Hide grids
$(document).ready(function(){
  $(".grid,.grid2,.grid3,.grid4,.grid5,.grid6,.grid7,.grid8,.grid9,.grid10,.grid11").hide();
//Toggle specific grids
  $("#1").click(function(){
    $(".grid").toggle();
  });
 $("#2").click(function(){
    $(".grid2,.grid3").toggle();
  });
  $("#3").click(function(){
    $(".grid4,.grid5").toggle();
  });
  $("#4").click(function(){
    $(".grid6,.grid7").toggle();
  });
  $("#5").click(function(){
    $(".grid8,.grid9").toggle();
  });
  $("#6").click(function(){
    $(".grid10,.grid11").toggle();
  });
});

// Hide grid when click outside
$(document).mouseup(function (e) {
	var dirg = $(".dirg")
	console.log(dirg);
	if(!dirg.is(e.target) && dirg.has(e.target).length === 0) {
	    dirg.hide();
	}
});

// Hide grid when click on other grid
$.each($(".dirg")).mouseup(function (e) {
	var dirg = $(".dirg")
	console.log(dirg);
	if(!dirg.is(e.target) && dirg.has(e.target).length === 0) {
	    dirg.hide();
	}
});
