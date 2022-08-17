
$(document).ready(function () {
    let but = $(".navigation .button-dropdown");

    let open = function (index) {
        but.each(function (i, obj) {
            if (i === index) {
                $(obj).addClass("active");
                $(obj)
                    .find(".header-dropdown")
                    .css("height", $(obj).find(".header-dropdown")[0].scrollHeight);
            } else {
                $(obj).removeClass("active");
                $(obj).find(".header-dropdown").css("height", 0);
            }
        });
    };

    let close = function () {
        but.each(function (i, obj) {
            $(obj).removeClass("active");
            $(obj).find(".header-dropdown").css("height", 0);
        });
    };

    if ($(window).width() > 960) {
        but.each(function (i, obj) {
            $(obj).mouseout(function () {
                close();
            });

            $(obj).mouseover(function () {
                open(i);
            });
        });
    } else {
        but.each(function (i, obj) {
            $(obj)
                .find(".item-link__main")
                .click(function () {
                    if ($(obj).hasClass("active")) {
                        close();
                    } else {
                        open(i);
                    }
                });
        });
    }
});
