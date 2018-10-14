$(document).ready(function () {
    //    ページ遷移
    $(document.body).hide().fadeIn("slow");

    //　　文字を徐々に表示させる
    $(function () {
        var $allMsg = $('#index-main h1');
        var $wordList = $('#index-main h1').html().split("");
        $('#index-main h1').html("");
        $.each($wordList, function (idx, elem) {
            var newEL = $("<span/>").text(elem).css({
                opacity: 0
            });
            newEL.appendTo($allMsg);
            newEL.delay(idx * 70);
            newEL.animate({
                opacity: 1
            }, 1100);
        });

    });


});





$(function () {
    $('.menubar').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.side').addClass('active');
        } else {
            $('.side').removeClass('active');
        }
    });
});

//likeページのリストをタップすると文が出る
$(function () {
    $('#like1').click(function () {
        $('#ex1').toggle();
    });
});

$(function () {
    $('#like2').click(function () {
        $('#ex2').toggle();
    });
});

$(function () {
    $('#like3').click(function () {
        $('#ex3').toggle();
    });
});
