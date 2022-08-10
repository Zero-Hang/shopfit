$(document).ready(function() {
	hoverMenuShow();
});

function hoverMenuShow() {
	// let $btn = $('.title_menu_plan');
	// let $menu = $('#title_menu_plan');

	// 移入显示 原理是手动给 dropdown-menu 加入一个显示类
	$('.title_menu_watch').mouseover(function() {
		$('#title_menu_plan').removeClass('show');
		$('#title_menu_watch').addClass('show');
		$('#title_menu_dynamic').removeClass('show');
		$('#title_menu_about').removeClass('show');
	});

	$('.title_menu_watch').mouseout(function() {
		$hide = setTimeout(function() {
			// 移入菜单栏，取消隐藏
			$('#title_menu_watch').mouseover(function() {
				clearTimeout($hide);
			});
			// 再次移入按钮，取消定时器，不让其隐藏。
			$('.title_menu_watch').mouseover(function() {
				clearTimeout($hide);
			});
			$('#title_menu_watch').removeClass('show');
		}, 150);
	})
	$('#title_menu_watch').mouseout(function() {
		$hide = setTimeout(function() {
			// 移入菜单栏，取消隐藏
			$('#title_menu_watch').mouseover(function() {
				clearTimeout($hide);
			});
			// 再次移入按钮，取消定时器，不让其隐藏。
			$('.title_menu_watch').mouseover(function() {
				clearTimeout($hide);
			});
			$('#title_menu_watch').removeClass('show');
		}, 150);
	})
	
	
	$('.title_menu_about').mouseover(function() {
		$('#title_menu_plan').removeClass('show');
		$('#title_menu_watch').removeClass('show');
		$('#title_menu_dynamic').removeClass('show');
		$('#title_menu_about').addClass('show');
	});
	
	$('.title_menu_about').mouseout(function() {
		$hide = setTimeout(function() {
			// 移入菜单栏，取消隐藏
			$('#title_menu_about').mouseover(function() {
				clearTimeout($hide);
			});
			// 再次移入按钮，取消定时器，不让其隐藏。
			$('.title_menu_about').mouseover(function() {
				clearTimeout($hide);
			});
			$('#title_menu_about').removeClass('show');
		}, 150);
	})
	$('#title_menu_about').mouseout(function() {
		$hide = setTimeout(function() {
			// 移入菜单栏，取消隐藏
			$('#title_menu_about').mouseover(function() {
				clearTimeout($hide);
			});
			// 再次移入按钮，取消定时器，不让其隐藏。
			$('.title_menu_about').mouseover(function() {
				clearTimeout($hide);
			});
			$('#title_menu_about').removeClass('show');
		}, 150);
	})
}
