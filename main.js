// function fadeIn(i, elements, duration, callback){
// 			    if(i >= elements.length)
// 			        $.isFunction(callback) && callback();
// 			    else
// 			        elements.eq(i).fadeIn(duration, function(){
// 			           fadeIn(i+1, elements, duration, callback);
// 			        });        
// 			}

// 			fadeIn(0, $('ul li'), 100, function(){console.log("animation finished!");});

$("fadein").each(function(i) {
    $(this).delay(500*i).fadeIn();
    console.log("in function");
});
