$(document).ready(function() {


    var itemTable = 1;
    var $table = $(".tablesaw-swipe");
    var lenTable = $(".tablesaw-advance-dots li").length;
    $prevBtn = $(".btn-micro.left");
    $nextBtn = $(".btn-micro.right");

    $prevBtn.on("click", function(e) {
        if (itemTable === 1 || itemTable < 1) {
            return;
        } else {
            itemTable -= 1;
            prevTable(itemTable);
        }
        e.preventDefault();
    });

    $nextBtn.on("click", function(e) {
        console.log(itemTable);
        if (itemTable === lenTable || itemTable > lenTable) {
            return;
        } else {
            itemTable += 1;
            nextTable(itemTable);
        }
        e.preventDefault();
    });

    $table
        .on("tablesawcolumns.swipetoggle", function() {
            var canGoPrev = nextTable(itemTable + 1);
            var canGoNext = prevTable(itemTable);
        })
        .on("tablesawnext.swipetoggle", function() {
        	alert("fe");
            itemTable += 1;
        })
        .on("tablesawprev.swipetoggle", function() {
            itemTable -= 1;
        });


    function getCoord(event, key) {
        return (event.touches || event.originalEvent.touches)[0][key];
    }

    function nextTable(itemTable) {
        document.getElementById("captionTitle").innerHTML = "Paragraph changed!" + itemTable;
    }

    function prevTable(itemTable) {
        document.getElementById("captionTitle").innerHTML = "Paragraph changed!" + itemTable;
    }


});

/*
function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
*/
