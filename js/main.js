jQuery(document).ready(function($) {
    /* table carousel */
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
    /* dropdown */
    $('.selectpicker').selectpicker({
        size: 4
    });

    /* datepicker */
    $('input[name="startdate"],input[name="enddate"],input[name="startdate_in"]').daterangepicker({
            locale: {
                format: 'DD/MM/YYYY'
            },
            singleDatePicker: true,
            showDropdowns: false,
            opens: 'left',

        });

    $(".ico_datestart").on("click", function() {
        $(this).parent().find('input').trigger("click");
    })
    $(".ico_dateend").on("click", function() {
        $(this).parent().find('input').trigger("click");
    })


    $('input[name="startdate"],input[name="startdate_in"]').on('apply.daterangepicker', function(ev, picker) {
        console.log("startdate: " + picker.startDate.format('YYYY-MM-DD'));
        var y = parseInt(picker.startDate.format('YYYY'));
        var m = parseInt(picker.startDate.format('MM'));
        var d = parseInt(picker.startDate.format('DD'));
        $(this).parents(".tab-pane").find("#resultYear").text((d-1)+"/"+m+"/"+(y+1));
    });

    $("input#radioYear,input#radioYear_in").click(function(){
       $(this).parents(".tab-pane").addClass('year');   
    });
      $("input#radioRound,input#radioRound_in").click(function(){
       $(this).parents(".tab-pane").removeClass('year');   
    });

    /* table hover */
    if (screen.width < 500) {
        $("body").addClass("nohover");
        $("td, th")
            .attr("tabindex", "1")
            .on("touchstart", function() {
                $(this).focus();
            });
    }


    /* custom style td */
    var tableHeight = $(".tablelist").height();
    $(".tablelist table td:nth-child(" + (3) + ")").addClass('hover');
    $(".tablelist table td:nth-child(" + (3) + ")").addClass('blueHover');
    $('table').hover(function() {
        $(".tablelist table td:nth-child(" + (3) + ")").removeClass('hover');
    });
    $('td').hover(function() {
        $(".tablelist table td:nth-child(" + (3) + ")").removeClass('hover');
        $(".tablelist table td:nth-child(" + (3) + ")").removeClass('blueHover');
        var col = $(this).parent().children().index($(this));
        //var row = $(this).parent().parent().children().index($(this).parent());
        $(".tablelist table td:nth-child(" + (col + 1) + ")").toggleClass('hover');
    });


});
