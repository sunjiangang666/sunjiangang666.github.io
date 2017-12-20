$(function(){

  var d="<div class='snow'>❅<div>"

			setInterval(function(){

				var f=$(document).width();

				var e=Math.random()*f-100;

				var o=0.5+Math.random();

				var fon=20+Math.random()*40;

				var l = e - 100 + 200 * Math.random();

				var k=2000 + 5000 * Math.random();

				$(d).clone().appendTo(".header").css({

					left:e+"px",

					opacity:o,

					"font-size":fon,

				}).animate({

				  top:"500px",

					left:l+"px",

					opacity:0.2,

				},k,"linear",function(){$(this).remove()})

			},200)

})