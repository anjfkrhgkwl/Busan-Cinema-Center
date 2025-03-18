$(function(){
    $('a').click(function(event){
        event.preventDefault();
    }) //클릭 이벤트 무시
});

$(function(){
    let pickList = $('.pick-list' );
    let pickListImage = $('.pick-list-img li')

    pickListImage.not('.on').hide();

    pickList.mouseenter(function(){
        let index = $(this).index();

        pickList.removeClass('click');
        pickListImage.removeClass('on');

        $(this).addClass('click');
        pickListImage.eq(index).addClass('on');
        pickListImage.eq(index).show();
    })

    /* pickList.mouseleave(function(){
        pickList.removeClass('click');
        pickListImage.removeClass('on');

        pickList.eq(0).addClass('click');
        pickListImage.eq(0).addClass('on');
    }) */



    let selectTheaterBtn = $('.todays-movie .select-theater-btn')
    let theaterList = $('.todays-movie .select-theater')
    let listColor = $('.todays-movie .select-theater li')

    selectTheaterBtn.click(function(){
        theaterList.slideToggle(500);
        theaterList.toggleClass('on');
    });

    listColor.mouseenter(function(){
        listColor.removeClass('on')
        $(this).addClass('on');
    });
    listColor.mouseleave(function(){
        listColor.removeClass('on');
    });


    let quickBtn = $('.btn-quick')
    
    quickBtn.mouseenter(function(){
        quickBtn.removeClass('on')
        $(this).addClass('on');
    });


});