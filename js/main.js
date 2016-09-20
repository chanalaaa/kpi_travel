jQuery(document).ready(function($) {

    $('.owl-carousel').owlCarousel({
        navContainer: '#customNav',
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


    $(".dropdown-menu").on('click', 'li', function() {
        $(this).parents('.dropdown').find('.dropdown-toggle').html($(this).text() + '<span class="caret"></span>');
    });

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

        //autoUpdateInput: false,
    });
    $(".ico_datestart").on("click", function() {
        $('input[name="startdate"]').trigger("click");
    })
    $(".ico_dateend").on("click", function() {
        $('input[name="enddate"]').trigger("click");
    })




});




/*
function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
*/












// var itemTable = 1;
// var $table = $(".tablesaw-swipe");
// var lenTable = $(".tablesaw-advance-dots li").length;
// $prevBtn = $(".btn-micro.left");
// $nextBtn = $(".btn-micro.right");

// $prevBtn.on("click", function(e) {
//     if (itemTable === 1 || itemTable < 1) {
//         return;
//     } else {
//         itemTable -= 1;
//         prevTable(itemTable);
//     }
//     e.preventDefault();
// });

// $nextBtn.on("click", function(e) {
//     console.log(itemTable);
//     if (itemTable === lenTable || itemTable > lenTable) {
//         return;
//     } else {
//         itemTable += 1;
//         nextTable(itemTable);
//     }
//     e.preventDefault();
// });

// $table
//     .on("tablesawcolumns.swipetoggle", function() {
//         var canGoPrev = nextTable(itemTable + 1);
//         var canGoNext = prevTable(itemTable);
//     })
//     .on("tablesawnext.swipetoggle", function() {
//         alert("fe");
//         itemTable += 1;
//     })
//     .on("tablesawprev.swipetoggle", function() {
//         itemTable -= 1;
//     });


// function getCoord(event, key) {
//     return (event.touches || event.originalEvent.touches)[0][key];
// }

// function nextTable(itemTable) {
//     document.getElementById("captionTitle").innerHTML = "Paragraph changed!" + itemTable;
// }

// function prevTable(itemTable) {
//     document.getElementById("captionTitle").innerHTML = "Paragraph changed!" + itemTable;
// }
