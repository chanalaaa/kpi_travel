jQuery(document).ready(function($) {

    /* random bg *******************************************************/
    var url = window.location.pathname;
    var urlsplit = url.split("/").slice(-1)[0];
    var num;
    //if (urlsplit == "" || urlsplit == "index.html") {
        var min = 1;
        var max = 4;
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        var src_desk = ("./images/bg0"+num+".jpg");
        var src_res = ("./images/bgxs0"+num+".jpg");
        $(".bgPage").children('img.desk').attr("src", src_desk);
        $(".bgPage").children('img.mobile').attr("src", src_res);
     //}   
    /* table carousel *******************************************************/
    $('.owl-carousel').owlCarousel({
        navContainer: '#customNav',
        mouseDrag: false,
        touchDrag: false,
        //animateOut: 'fadeOut',
        //smartSpeed:150,
        responsive: {
            0: {
                items: 1
            }
        }
    })


    $(".owl-carousel").each(function() {
        var $this = $(this);
        // Custom Navigation Events
        $this.parent().find(".next").click(function() {
            $this.trigger('next.owl.carousel');
        });
        $this.parent().find(".prev").click(function() {
            $this.trigger('prev.owl.carousel');
        });
    });
    /* dropdown *******************************************************/
    $('.selectpicker').selectpicker({
        size: 4
    });
    /* set Year trip *******************************************************/
    $("input#radioYear,input#radioYear_in").click(function() {
        $(this).parents(".tab-pane").addClass('year');
    });
    $("input#radioRound,input#radioRound_in").click(function() {
        $(this).parents(".tab-pane").removeClass('year');
    });

    /* datepicker *******************************************************/
    /* and calculate datepicker (Year trip) */
    var start = moment();

    function setDefaultYearTrip(start) {
        var y = parseInt(start.format('YYYY'));
        var m = parseInt(start.format('MM'));
        var d = parseInt(start.format('DD'));
        var dayOflastMonth = (start.subtract(1, 'month').endOf('month')).format('DD');
        if ((d - 1) >= 1) {
            $(".tab-pane").find("p#resultYear").text((d - 1) + "/" + m + "/" + (y + 1));
        } else {
            $(".tab-pane").find("p#resultYear").text((dayOflastMonth) + "/" + (m < 10 ? 0 : '') + (m - 1) + "/" + (y + 1));
        }
    }


    $('input[name="startdate"],input[name="enddate"],input[name="startdate_in"]').daterangepicker({
        locale: {
            format: 'DD/MM/YYYY'
        },
        singleDatePicker: true,
        showDropdowns: false,
        opens: 'left'

    });
    setDefaultYearTrip(start);
    $(".ico_datestart").on("click", function() {
        $(this).parent().find('input').trigger("click");
    })
    $(".ico_dateend").on("click", function() {
        $(this).parent().find('input').trigger("click");
    })


    $('input[name="startdate"],input[name="startdate_in"]').on('apply.daterangepicker', function(ev, picker) {
        //console.log("startdate: " + picker.startDate.format('YYYY-MM-DD'));
        var y = parseInt(picker.startDate.format('YYYY'));
        var m = parseInt(picker.startDate.format('MM'));
        var d = parseInt(picker.startDate.format('DD'));
        var dayOflastMonth = (picker.startDate.subtract(1, 'month').endOf('month')).format('DD');
        if ((d - 1) >= 1) {
            $(this).parents(".tab-pane").find("p#resultYear").text((d - 1) + "/" + m + "/" + (y + 1));
        } else {
            $(this).parents(".tab-pane").find("p#resultYear").text((dayOflastMonth) + "/" + (m < 10 ? 0 : '') + (m - 1) + "/" + (y + 1));
        }

    });


    /* table hover *******************************************************/
    if (screen.width < 500) {
        $("body").addClass("nohover");
        $("td, th")
            .attr("tabindex", "1")
            .on("touchstart", function() {
                $(this).focus();
            });
    }


    /* custom style td *******************************************************/
    var tableHeight = $(".tablelist").height();
    $(".tablelist table td:nth-child(" + (3) + ")").addClass('hover');
    $(".tablelist table td:nth-child(" + (3) + ")").addClass('blueHover');
    $('.forHighligthHide').hover(function() {
        $(".tablelist table td:nth-child(" + (3) + ")").removeClass('hover');
    });
    $('td:not(:first-child)').hover(function() {
        $(".tablelist table td:nth-child(" + (3) + ")").removeClass('hover');
        $(".tablelist table td:nth-child(" + (3) + ")").removeClass('blueHover');
        var col = $(this).parent().children().index($(this));
        //var row = $(this).parent().parent().children().index($(this).parent());
        $(".tablelist table td:nth-child(" + (col + 1) + ")").toggleClass('hover');
    });

    if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function() {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
});
