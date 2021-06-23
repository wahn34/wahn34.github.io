$(document).ready(function() {
    $('html, body').animate({scrollTop : $("#view1").offset().top}, 300);
    setView(1);
});

var page = 1;
const MAX_PAGE = 11;

//2021.04.04 추가
//휠 이벤트
$(window).bind('wheel', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0)
    	eventWheel("up");
    else eventWheel("down");
});

//2021.04.06 추가
//방향키
$(document).keydown(function(event){
	var key = event.keyCode;
	if(key==38) eventWheel("up");
	else if(key==40) eventWheel("down");
});

//2021.04.05 수정
//스크롤
function eventWheel(option){
	if(option=="up"){
		if(page > 1){
        	page --;
        	console.log(page);
        	var offset = $("#view" + page).offset();
            $('html, body').animate({scrollTop : offset.top}, 200);
        }
        else console.log("already top!");
	}
	else {
		// scroll down
        if(page < MAX_PAGE) {
        	page ++;
        	console.log(page);
        	var offset = $("#view" + page).offset();
            $('html, body').animate({scrollTop : offset.top}, 200);
        }
        else {
        	console.log("already bottom!");
        }
	}
	setView(page);
}

//페이지별 설정
function setView(page){
	for(var i = 1; i < MAX_PAGE+1; i++){$('#lst'+i).removeClass('active');}
	$('#lst'+page).addClass('active');
	if(page == 1) $('body').css('background-color', 'rgb(255, 255, 255)');
	if(page == 2) $('body').css('background-color', 'rgb(242, 250, 255)');
	if(page == 3) $('body').css('background-color', 'rgb(229, 245, 255)');
	if(page == 4) $('body').css('background-color', 'rgb(216, 240, 255)');
	if(page == 5) $('body').css('background-color', 'rgb(203, 235, 255)');
	if(page == 6) $('body').css('background-color', 'rgb(190, 230, 255)');
	if(page == 7) $('body').css('background-color', 'rgb(177, 225, 255)');
	if(page == 8) $('body').css('background-color', 'rgb(164, 220, 255)');
	if(page == 9) $('body').css('background-color', 'rgb(151, 215, 255)');
	if(page == 10) $('body').css('background-color', 'rgb(138, 210, 255)');
	if(page == 11) $('body').css('background-color', 'rgb(125, 205, 255)');
}

function lst_clicked(num){
	$('html, body').animate({scrollTop : $("#view"+num).offset().top}, 400);
    setView(num);
    page = num;
}