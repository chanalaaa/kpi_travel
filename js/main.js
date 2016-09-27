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
    $('input[name="startdate"],input[name="enddate"]').daterangepicker({
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


    $('input[name="startdate"]').on('apply.daterangepicker', function(ev, picker) {
        console.log("startdate: " + picker.startDate.format('YYYY-MM-DD'));
    });

    $('input[name="enddate"]').on('apply.daterangepicker', function(ev, picker) {
        console.log("enddate: " + picker.startDate.format('YYYY-MM-DD'));

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
    $('td').hover(function() {
        var col = $(this).parent().children().index($(this));
        //var row = $(this).parent().parent().children().index($(this).parent());
        $(".tablelist table td:nth-child(" + (col + 1) + ")").toggleClass('hover');
    });


});
