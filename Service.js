$(function () {
	//流程移入背景颜色改变	
$(".js_liucheng_item").mouseover(function (e) {
		$(this).find(".js_bg_l1").fadeIn(200).siblings(".js_bg_l2").fadeOut(200);
	}).mouseout(function() {
		$(this).find(".js_bg_l1").fadeOut(200).siblings(".js_bg_l2").stop().fadeIn(200);
	});
});
