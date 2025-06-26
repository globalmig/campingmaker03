/*main_visual */
"use client";
import $ from "jquery";

$(".intro").addClass("on");
$(".mv_bg").addClass("on");
$(".hold_type").addClass("on");
$(".inner > div").addClass("on");

setInterval(autoSlideL1, 12000);
setInterval(autoSlideL2, 16100);
setInterval(autoSlideL3, 11500);
setInterval(autoSlideL4, 14000);
setInterval(autoSlideL5, 12000);
setInterval(autoSlideL6, 13000);
setInterval(autoSlideL7, 12000);
setInterval(autoSlideL8, 14000);

//left_no01

setTimeout(function () {
  $(".in01 .no01").addClass("animate");
  $(".in01 .no03").css("z-index", "2");
}, 3000);
setTimeout(function () {
  $(".in01 .no03").removeClass("animate");
  $(".in01 .no01").css("z-index", "1");
}, 4000);
setTimeout(function () {
  $(".in01 .no02").addClass("animate");
  $(".in01 .no01").removeClass("animate");
}, 7000);
setTimeout(function () {
  $(".in01 .no02").css("z-index", "3");
}, 8000);
setTimeout(function () {
  $(".in01 .no03").addClass("animate").css("z-index", "5");
}, 11000);
setTimeout(function () {
  $(".in01 .no01").css("z-index", "4");
}, 11500);
setTimeout(function () {
  $(".in01 .no02").removeClass("animate");
}, 12000);

//left_n02
setTimeout(function () {
  $(".in02 .no01").addClass("animate");
  $(".in02 .no04").css("z-index", "2");
}, 4000);
setTimeout(function () {
  $(".in02 .no04").removeClass("animate");
  $(".in02 .no01").css("z-index", "1");
}, 5000);
setTimeout(function () {
  $(".in02 .no02").addClass("animate");
  $(".in02 .no01").removeClass("animate");
}, 8000);
setTimeout(function () {
  $(".in02 .no02").css("z-index", "1");
  $(".in02 .no01").css("z-index", "2");
}, 9000);
setTimeout(function () {
  $(".in02 .no03").addClass("animate");
  $(".in02 .no02").removeClass("animate");
}, 12000);
setTimeout(function () {
  $(".in02 .no04").css("z-index", "6");
  $(".in02 .no01").css("z-index", "5");
  $(".in02 .no02").css("z-index", "4");
}, 13000);
setTimeout(function () {
  $(".in02 .no04").addClass("animate");
  $(".in02 .no03").css("z-index", "3");
}, 16000);
setTimeout(function () {
  $(".in02 .no03").removeClass("animate");
}, 16100);

//left_no03
setTimeout(function () {
  $(".in03 .no01").addClass("animate");
  $(".in03 .no03").css("z-index", "2");
}, 2500);
setTimeout(function () {
  $(".in03 .no03").removeClass("animate");
  $(".in03 .no01").css("z-index", "1");
}, 3500);
setTimeout(function () {
  $(".in03 .no02").addClass("animate");
  $(".in03 .no01").removeClass("animate");
}, 6500);
setTimeout(function () {
  $(".in03 .no02").css("z-index", "3");
}, 7500);
setTimeout(function () {
  $(".in03 .no03").addClass("animate").css("z-index", "5");
}, 10500);
setTimeout(function () {
  $(".in03 .no01").css("z-index", "4");
}, 11000);
setTimeout(function () {
  $(".in03 .no02").removeClass("animate");
}, 11500);

//left_no04
setTimeout(function () {
  $(".in04 .no01").addClass("animate");
  $(".in04 .no03").css("z-index", "2");
}, 5000); //01
setTimeout(function () {
  $(".in04 .no03").removeClass("animate");
  $(".in04 .no01").css("z-index", "1");
}, 6000);
setTimeout(function () {
  $(".in04 .no02").addClass("animate");
  $(".in04 .no01").removeClass("animate");
}, 9000); //02
setTimeout(function () {
  $(".in04 .no02").css("z-index", "3");
}, 1000);
setTimeout(function () {
  $(".in04 .no03").addClass("animate").css("z-index", "5");
}, 13000); //03
setTimeout(function () {
  $(".in04 .no01").css("z-index", "4");
}, 13500);
setTimeout(function () {
  $(".in04 .no02").removeClass("animate");
}, 14000);

//left_no05
setTimeout(function () {
  $(".in05 .no01").addClass("animate");
  $(".in05 .no03").css("z-index", "2");
}, 3000); //01
setTimeout(function () {
  $(".in05 .no03").removeClass("animate");
  $(".in05 .no01").css("z-index", "1");
}, 4000);
setTimeout(function () {
  $(".in05 .no02").addClass("animate");
  $(".in05 .no01").removeClass("animate");
}, 7000); //02
setTimeout(function () {
  $(".in05 .no02").css("z-index", "3");
}, 8000);
setTimeout(function () {
  $(".in05 .no03").addClass("animate").css("z-index", "5");
}, 11000); //03
setTimeout(function () {
  $(".in05 .no01").css("z-index", "4");
}, 11500);
setTimeout(function () {
  $(".in05 .no02").removeClass("animate");
}, 12000);

//left_no06
setTimeout(function () {
  $(".in06 .no01").addClass("animate");
  $(".in06 .no03").css("z-index", "2");
}, 4000); //01
setTimeout(function () {
  $(".in06 .no03").removeClass("animate");
  $(".in06 .no01").css("z-index", "1");
}, 5000);
setTimeout(function () {
  $(".in06 .no02").addClass("animate");
  $(".in06 .no01").removeClass("animate");
}, 8000); //02
setTimeout(function () {
  $(".in06 .no02").css("z-index", "3");
}, 9000);
setTimeout(function () {
  $(".in06 .no03").addClass("animate").css("z-index", "5");
}, 12000); //03
setTimeout(function () {
  $(".in06 .no01").css("z-index", "4");
}, 12500);
setTimeout(function () {
  $(".in06 .no02").removeClass("animate");
}, 13000);

//left_no07
setTimeout(function () {
  $(".in07 .no01").addClass("animate");
  $(".in07 .no03").css("z-index", "2");
}, 2500); //01
setTimeout(function () {
  $(".in07 .no03").removeClass("animate");
  $(".in07 .no01").css("z-index", "1");
}, 3500);
setTimeout(function () {
  $(".in07 .no02").addClass("animate");
  $(".in07 .no01").removeClass("animate");
}, 6500); //02
setTimeout(function () {
  $(".in07 .no02").css("z-index", "3");
}, 7500);
setTimeout(function () {
  $(".in07 .no03").addClass("animate").css("z-index", "5");
}, 10500); //03
setTimeout(function () {
  $(".in07 .no01").css("z-index", "4");
}, 11500);
setTimeout(function () {
  $(".in07 .no02").removeClass("animate");
}, 12000);

//left_no08
setTimeout(function () {
  $(".in08 .no01").addClass("animate");
  $(".in08 .no03").css("z-index", "2");
}, 5000); //01
setTimeout(function () {
  $(".in08 .no03").removeClass("animate");
  $(".in08 .no01").css("z-index", "1");
}, 6000);
setTimeout(function () {
  $(".in08 .no02").addClass("animate");
  $(".in08 .no01").removeClass("animate");
}, 9000); //02
setTimeout(function () {
  $(".in08 .no02").css("z-index", "3");
}, 1000);
setTimeout(function () {
  $(".in08 .no03").addClass("animate").css("z-index", "5");
}, 13000); //03
setTimeout(function () {
  $(".in08 .no01").css("z-index", "4");
}, 13500);
setTimeout(function () {
  $(".in08 .no02").removeClass("animate");
}, 14000);

function autoSlideL1() {
  setTimeout(function () {
    $(".in01 .no01").addClass("animate");
    $(".in01 .no03").css("z-index", "2");
  }, 3000);
  setTimeout(function () {
    $(".in01 .no03").removeClass("animate");
    $(".in01 .no01").css("z-index", "1");
  }, 4000);
  setTimeout(function () {
    $(".in01 .no02").addClass("animate");
    $(".in01 .no01").removeClass("animate");
  }, 7000);
  setTimeout(function () {
    $(".in01 .no02").css("z-index", "3");
  }, 8000);
  setTimeout(function () {
    $(".in01 .no03").addClass("animate").css("z-index", "5");
  }, 11000);
  setTimeout(function () {
    $(".in01 .no01").css("z-index", "4");
  }, 11500);
  setTimeout(function () {
    $(".in01 .no02").removeClass("animate");
  }, 12000);
}
function autoSlideL2() {
  setTimeout(function () {
    $(".in02 .no01").addClass("animate");
    $(".in02 .no04").css("z-index", "2");
  }, 4000);
  setTimeout(function () {
    $(".in02 .no04").removeClass("animate");
    $(".in02 .no01").css("z-index", "1");
  }, 5000);
  setTimeout(function () {
    $(".in02 .no02").addClass("animate");
    $(".in02 .no01").removeClass("animate");
  }, 8000);
  setTimeout(function () {
    $(".in02 .no02").css("z-index", "1");
    $(".in02 .no01").css("z-index", "2");
  }, 9000);
  setTimeout(function () {
    $(".in02 .no03").addClass("animate");
    $(".in02 .no02").removeClass("animate");
  }, 12000);
  setTimeout(function () {
    $(".in02 .no04").css("z-index", "6");
    $(".in02 .no01").css("z-index", "5");
    $(".in02 .no02").css("z-index", "4");
  }, 13000);
  setTimeout(function () {
    $(".in02 .no04").addClass("animate");
    $(".in02 .no03").css("z-index", "3");
  }, 16000);
  setTimeout(function () {
    $(".in02 .no03").removeClass("animate");
  }, 16100);
}
function autoSlideL3() {
  setTimeout(function () {
    $(".in03 .no01").addClass("animate");
    $(".in03 .no03").css("z-index", "2");
  }, 2500);
  setTimeout(function () {
    $(".in03 .no03").removeClass("animate");
    $(".in03 .no01").css("z-index", "1");
  }, 3500);
  setTimeout(function () {
    $(".in03 .no02").addClass("animate");
    $(".in03 .no01").removeClass("animate");
  }, 6500);
  setTimeout(function () {
    $(".in03 .no02").css("z-index", "3");
  }, 7500);
  setTimeout(function () {
    $(".in03 .no03").addClass("animate").css("z-index", "5");
  }, 10500);
  setTimeout(function () {
    $(".in03 .no01").css("z-index", "4");
  }, 11000);
  setTimeout(function () {
    $(".in03 .no02").removeClass("animate");
  }, 11500);
}
function autoSlideL4() {
  setTimeout(function () {
    $(".in04 .no01").addClass("animate");
    $(".in04 .no03").css("z-index", "2");
  }, 5000); //01
  setTimeout(function () {
    $(".in04 .no03").removeClass("animate");
    $(".in04 .no01").css("z-index", "1");
  }, 6000);
  setTimeout(function () {
    $(".in04 .no02").addClass("animate");
    $(".in04 .no01").removeClass("animate");
  }, 9000); //02
  setTimeout(function () {
    $(".in04 .no02").css("z-index", "3");
  }, 1000);
  setTimeout(function () {
    $(".in04 .no03").addClass("animate").css("z-index", "5");
  }, 13000); //03
  setTimeout(function () {
    $(".in04 .no01").css("z-index", "4");
  }, 13500);
  setTimeout(function () {
    $(".in04 .no02").removeClass("animate");
  }, 14000);
}
function autoSlideL5() {
  setTimeout(function () {
    $(".in05 .no01").addClass("animate");
    $(".in05 .no03").css("z-index", "2");
  }, 3000); //01
  setTimeout(function () {
    $(".in05 .no03").removeClass("animate");
    $(".in05 .no01").css("z-index", "1");
  }, 4000);
  setTimeout(function () {
    $(".in05 .no02").addClass("animate");
    $(".in05 .no01").removeClass("animate");
  }, 7000); //02
  setTimeout(function () {
    $(".in05 .no02").css("z-index", "3");
  }, 8000);
  setTimeout(function () {
    $(".in05 .no03").addClass("animate").css("z-index", "5");
  }, 11000); //03
  setTimeout(function () {
    $(".in05 .no01").css("z-index", "4");
  }, 11500);
  setTimeout(function () {
    $(".in05 .no02").removeClass("animate");
  }, 12000);
}
function autoSlideL6() {
  setTimeout(function () {
    $(".in06 .no01").addClass("animate");
    $(".in06 .no03").css("z-index", "2");
  }, 4000); //01
  setTimeout(function () {
    $(".in06 .no03").removeClass("animate");
    $(".in06 .no01").css("z-index", "1");
  }, 5000);
  setTimeout(function () {
    $(".in06 .no02").addClass("animate");
    $(".in06 .no01").removeClass("animate");
  }, 8000); //02
  setTimeout(function () {
    $(".in06 .no02").css("z-index", "3");
  }, 9000);
  setTimeout(function () {
    $(".in06 .no03").addClass("animate").css("z-index", "5");
  }, 12000); //03
  setTimeout(function () {
    $(".in06 .no01").css("z-index", "4");
  }, 12500);
  setTimeout(function () {
    $(".in06 .no02").removeClass("animate");
  }, 13000);
}
function autoSlideL7() {
  setTimeout(function () {
    $(".in07 .no01").addClass("animate");
    $(".in07 .no03").css("z-index", "2");
  }, 2500); //01
  setTimeout(function () {
    $(".in07 .no03").removeClass("animate");
    $(".in07 .no01").css("z-index", "1");
  }, 3500);
  setTimeout(function () {
    $(".in07 .no02").addClass("animate");
    $(".in07 .no01").removeClass("animate");
  }, 6500); //02
  setTimeout(function () {
    $(".in07 .no02").css("z-index", "3");
  }, 7500);
  setTimeout(function () {
    $(".in07 .no03").addClass("animate").css("z-index", "5");
  }, 10500); //03
  setTimeout(function () {
    $(".in07 .no01").css("z-index", "4");
  }, 11500);
  setTimeout(function () {
    $(".in07 .no02").removeClass("animate");
  }, 12000);
}
function autoSlideL8() {
  setTimeout(function () {
    $(".in08 .no01").addClass("animate");
    $(".in08 .no03").css("z-index", "2");
  }, 5000); //01
  setTimeout(function () {
    $(".in08 .no03").removeClass("animate");
    $(".in08 .no01").css("z-index", "1");
  }, 6000);
  setTimeout(function () {
    $(".in08 .no02").addClass("animate");
    $(".in08 .no01").removeClass("animate");
  }, 9000); //02
  setTimeout(function () {
    $(".in08 .no02").css("z-index", "3");
  }, 1000);
  setTimeout(function () {
    $(".in08 .no03").addClass("animate").css("z-index", "5");
  }, 13000); //03
  setTimeout(function () {
    $(".in08 .no01").css("z-index", "4");
  }, 13500);
  setTimeout(function () {
    $(".in08 .no02").removeClass("animate");
  }, 14000);
}

//center

setInterval(autoSlideC1, 12600);
setInterval(autoSlideC2, 12400);
setInterval(autoSlideC3, 12200);
setInterval(autoSlideC4, 12000);
//c1
setTimeout(function () {
  $(".ic01 .no01").addClass("animate");
  $(".ic01 .no03").css("z-index", "2");
}, 3600); //01
setTimeout(function () {
  $(".ic01 .no03").removeClass("animate");
  $(".ic01 .no01").css("z-index", "1");
}, 4600);
setTimeout(function () {
  $(".ic01 .no02").addClass("animate");
  $(".ic01 .no01").removeClass("animate");
}, 7600); //02
setTimeout(function () {
  $(".ic01 .no02").css("z-index", "3");
}, 8600);
setTimeout(function () {
  $(".ic01 .no03").addClass("animate").css("z-index", "5");
}, 11600); //03
setTimeout(function () {
  $(".ic01 .no01").css("z-index", "4");
}, 12100);
setTimeout(function () {
  $(".ic01 .no02").removeClass("animate");
}, 12600);

//c2
setTimeout(function () {
  $(".ic02 .no01").addClass("animate");
  $(".ic02 .no03").css("z-index", "2");
}, 3400); //01
setTimeout(function () {
  $(".ic02 .no03").removeClass("animate");
  $(".ic02 .no01").css("z-index", "1");
}, 4400);
setTimeout(function () {
  $(".ic02 .no02").addClass("animate");
  $(".ic02 .no01").removeClass("animate");
}, 7400); //02
setTimeout(function () {
  $(".ic02 .no02").css("z-index", "3");
}, 8400);
setTimeout(function () {
  $(".ic02 .no03").addClass("animate").css("z-index", "5");
}, 11400); //03
setTimeout(function () {
  $(".ic02 .no01").css("z-index", "4");
}, 11900);
setTimeout(function () {
  $(".ic02 .no02").removeClass("animate");
}, 12400);

//c3
setTimeout(function () {
  $(".ic03 .no01").addClass("animate");
  $(".ic03 .no03").css("z-index", "2");
}, 3200); //01
setTimeout(function () {
  $(".ic03 .no03").removeClass("animate");
  $(".ic03 .no01").css("z-index", "1");
}, 4200);
setTimeout(function () {
  $(".ic03 .no02").addClass("animate");
  $(".ic03 .no01").removeClass("animate");
}, 7200); //02
setTimeout(function () {
  $(".ic03 .no02").css("z-index", "3");
}, 8200);
setTimeout(function () {
  $(".ic03 .no03").addClass("animate").css("z-index", "5");
}, 11200); //03
setTimeout(function () {
  $(".ic03 .no01").css("z-index", "4");
}, 11700);
setTimeout(function () {
  $(".ic03 .no02").removeClass("animate");
}, 12200);

//c4
setTimeout(function () {
  $(".ic04 .no01").addClass("animate");
  $(".ic04 .no03").css("z-index", "2");
}, 3000); //01
setTimeout(function () {
  $(".ic04 .no03").removeClass("animate");
  $(".ic04 .no01").css("z-index", "1");
}, 4000);
setTimeout(function () {
  $(".ic04 .no02").addClass("animate");
  $(".ic04 .no01").removeClass("animate");
}, 7000); //02
setTimeout(function () {
  $(".ic04 .no02").css("z-index", "3");
}, 8000);
setTimeout(function () {
  $(".ic04 .no03").addClass("animate").css("z-index", "5");
}, 11000); //03
setTimeout(function () {
  $(".ic04 .no01").css("z-index", "4");
}, 11500);
setTimeout(function () {
  $(".ic04 .no02").removeClass("animate");
}, 12000);

function autoSlideC1() {
  setTimeout(function () {
    $(".ic01 .no01").addClass("animate");
    $(".ic01 .no03").css("z-index", "2");
  }, 3600); //01
  setTimeout(function () {
    $(".ic01 .no03").removeClass("animate");
    $(".ic01 .no01").css("z-index", "1");
  }, 4600);
  setTimeout(function () {
    $(".ic01 .no02").addClass("animate");
    $(".ic01 .no01").removeClass("animate");
  }, 7600); //02
  setTimeout(function () {
    $(".ic01 .no02").css("z-index", "3");
  }, 8600);
  setTimeout(function () {
    $(".ic01 .no03").addClass("animate").css("z-index", "5");
  }, 11600); //03
  setTimeout(function () {
    $(".ic01 .no01").css("z-index", "4");
  }, 12100);
  setTimeout(function () {
    $(".ic01 .no02").removeClass("animate");
  }, 12600);
}
function autoSlideC2() {
  setTimeout(function () {
    $(".ic02 .no01").addClass("animate");
    $(".ic02 .no03").css("z-index", "2");
  }, 3400); //01
  setTimeout(function () {
    $(".ic02 .no03").removeClass("animate");
    $(".ic02 .no01").css("z-index", "1");
  }, 4400);
  setTimeout(function () {
    $(".ic02 .no02").addClass("animate");
    $(".ic02 .no01").removeClass("animate");
  }, 7400); //02
  setTimeout(function () {
    $(".ic02 .no02").css("z-index", "3");
  }, 8400);
  setTimeout(function () {
    $(".ic02 .no03").addClass("animate").css("z-index", "5");
  }, 11400); //03
  setTimeout(function () {
    $(".ic02 .no01").css("z-index", "4");
  }, 11900);
  setTimeout(function () {
    $(".ic02 .no02").removeClass("animate");
  }, 12400);
}
function autoSlideC3() {
  setTimeout(function () {
    $(".ic03 .no01").addClass("animate");
    $(".ic03 .no03").css("z-index", "2");
  }, 3200); //01
  setTimeout(function () {
    $(".ic03 .no03").removeClass("animate");
    $(".ic03 .no01").css("z-index", "1");
  }, 4200);
  setTimeout(function () {
    $(".ic03 .no02").addClass("animate");
    $(".ic03 .no01").removeClass("animate");
  }, 7200); //02
  setTimeout(function () {
    $(".ic03 .no02").css("z-index", "3");
  }, 8200);
  setTimeout(function () {
    $(".ic03 .no03").addClass("animate").css("z-index", "5");
  }, 11200); //03
  setTimeout(function () {
    $(".ic03 .no01").css("z-index", "4");
  }, 11700);
  setTimeout(function () {
    $(".ic03 .no02").removeClass("animate");
  }, 12200);
}
function autoSlideC4() {
  setTimeout(function () {
    $(".ic04 .no01").addClass("animate");
    $(".ic04 .no03").css("z-index", "2");
  }, 3000); //01
  setTimeout(function () {
    $(".ic04 .no03").removeClass("animate");
    $(".ic04 .no01").css("z-index", "1");
  }, 4000);
  setTimeout(function () {
    $(".ic04 .no02").addClass("animate");
    $(".ic04 .no01").removeClass("animate");
  }, 7000); //02
  setTimeout(function () {
    $(".ic04 .no02").css("z-index", "3");
  }, 8000);
  setTimeout(function () {
    $(".ic04 .no03").addClass("animate").css("z-index", "5");
  }, 11000); //03
  setTimeout(function () {
    $(".ic04 .no01").css("z-index", "4");
  }, 11500);
  setTimeout(function () {
    $(".ic04 .no02").removeClass("animate");
  }, 12000);
}

//right

setInterval(autoSlideR1, 12000);
setInterval(autoSlideR2, 12000);
setInterval(autoSlideR3, 15000);
setInterval(autoSlideR4, 15000);
setInterval(autoSlideR5, 13000);
setInterval(autoSlideR6, 12100);
setInterval(autoSlideR7, 12500);
setInterval(autoSlideR8, 14000);

//r1
setTimeout(function () {
  $(".ir01 .no01").addClass("animate");
  $(".ir01 .no03").css("z-index", "2");
}, 3000); //01
setTimeout(function () {
  $(".ir01 .no03").removeClass("animate");
  $(".ir01 .no01").css("z-index", "1");
}, 4000);
setTimeout(function () {
  $(".ir01 .no02").addClass("animate");
  $(".ir01 .no01").removeClass("animate");
}, 7000); //02
setTimeout(function () {
  $(".ir01 .no02").css("z-index", "3");
}, 8000);
setTimeout(function () {
  $(".ir01 .no03").addClass("animate").css("z-index", "5");
}, 11000); //03
setTimeout(function () {
  $(".ir01 .no01").css("z-index", "4");
}, 11500);
setTimeout(function () {
  $(".ir01 .no02").removeClass("animate");
}, 12000);

//r2
setTimeout(function () {
  $(".ir02 .no01").addClass("animate");
  $(".ir02 .no03").css("z-index", "2");
}, 3000); //01
setTimeout(function () {
  $(".ir02 .no03").removeClass("animate");
  $(".ir02 .no01").css("z-index", "1");
}, 4000);
setTimeout(function () {
  $(".ir02 .no02").addClass("animate");
  $(".ir02 .no01").removeClass("animate");
}, 7000); //02
setTimeout(function () {
  $(".ir02 .no02").css("z-index", "3");
}, 8000);
setTimeout(function () {
  $(".ir02 .no03").addClass("animate").css("z-index", "5");
}, 11000); //03
setTimeout(function () {
  $(".ir02 .no01").css("z-index", "4");
}, 11500);
setTimeout(function () {
  $(".ir02 .no02").removeClass("animate");
}, 12000);

//r3
setTimeout(function () {
  $(".ir03 .no01").addClass("animate");
  $(".ir03 .no03").css("z-index", "2");
}, 4000); //01
setTimeout(function () {
  $(".ir03 .no03").removeClass("animate");
  $(".ir03 .no01").css("z-index", "1");
}, 5000);
setTimeout(function () {
  $(".ir03 .no02").addClass("animate");
  $(".ir03 .no01").removeClass("animate");
}, 9000); //02
setTimeout(function () {
  $(".ir03 .no02").css("z-index", "3");
}, 1000);
setTimeout(function () {
  $(".ir03 .no03").addClass("animate").css("z-index", "5");
}, 14000); //03
setTimeout(function () {
  $(".ir03 .no01").css("z-index", "4");
}, 14500);
setTimeout(function () {
  $(".ir03 .no02").removeClass("animate");
}, 15000);

//r4
setTimeout(function () {
  $(".ir04 .no01").addClass("animate");
  $(".ir04 .no03").css("z-index", "2");
}, 4000); //01
setTimeout(function () {
  $(".ir04 .no03").removeClass("animate");
  $(".ir04 .no01").css("z-index", "1");
}, 5000);
setTimeout(function () {
  $(".ir04 .no02").addClass("animate");
  $(".ir04 .no01").removeClass("animate");
}, 9000); //02
setTimeout(function () {
  $(".ir04 .no02").css("z-index", "3");
}, 1000);
setTimeout(function () {
  $(".ir04 .no03").addClass("animate").css("z-index", "5");
}, 14000); //03
setTimeout(function () {
  $(".ir04 .no01").css("z-index", "4");
}, 14500);
setTimeout(function () {
  $(".ir04 .no02").removeClass("animate");
}, 15000);

//r5
setTimeout(function () {
  $(".ir05 .no01").addClass("animate");
  $(".ir05 .no03").css("z-index", "2");
}, 2000); //01
setTimeout(function () {
  $(".ir05 .no03").removeClass("animate");
  $(".ir05 .no01").css("z-index", "1");
}, 3000);
setTimeout(function () {
  $(".ir05 .no02").addClass("animate");
  $(".ir05 .no01").removeClass("animate");
}, 7000); //02
setTimeout(function () {
  $(".ir05 .no02").css("z-index", "3");
}, 8000);
setTimeout(function () {
  $(".ir05 .no03").addClass("animate").css("z-index", "5");
}, 12000); //03
setTimeout(function () {
  $(".ir05 .no01").css("z-index", "4");
}, 12500);
setTimeout(function () {
  $(".ir05 .no02").removeClass("animate");
}, 13000);

//r6
setTimeout(function () {
  $(".ir06 .no01").addClass("animate");
  $(".ir06 .no04").css("z-index", "2");
}, 3000);
setTimeout(function () {
  $(".ir06 .no04").removeClass("animate");
  $(".ir06 .no01").css("z-index", "1");
}, 4000);
setTimeout(function () {
  $(".ir06 .no02").addClass("animate");
  $(".ir06 .no01").removeClass("animate");
}, 6000); //2
setTimeout(function () {
  $(".ir06 .no02").css("z-index", "1");
  $(".ir06 .no01").css("z-index", "2");
}, 7000);
setTimeout(function () {
  $(".ir06 .no03").addClass("animate");
  $(".ir06 .no02").removeClass("animate");
}, 9000); //3
setTimeout(function () {
  $(".ir06 .no04").css("z-index", "6");
  $(".ir06 .no01").css("z-index", "5");
  $(".ir06 .no02").css("z-index", "4");
}, 10000);
setTimeout(function () {
  $(".ir06 .no04").addClass("animate");
  $(".ir06 .no03").css("z-index", "3");
}, 12000); //4
setTimeout(function () {
  $(".ir06 .no03").removeClass("animate");
}, 12100);

//r7
setTimeout(function () {
  $(".ir07 .no01").addClass("animate");
  $(".ir07 .no03").css("z-index", "2");
}, 3500); //01
setTimeout(function () {
  $(".ir07 .no03").removeClass("animate");
  $(".ir07 .no01").css("z-index", "1");
}, 4500);
setTimeout(function () {
  $(".ir07 .no02").addClass("animate");
  $(".ir07 .no01").removeClass("animate");
}, 7500); //02
setTimeout(function () {
  $(".ir07 .no02").css("z-index", "3");
}, 8500);
setTimeout(function () {
  $(".ir07 .no03").addClass("animate").css("z-index", "5");
}, 11500); //03
setTimeout(function () {
  $(".ir07 .no01").css("z-index", "4");
}, 12000);
setTimeout(function () {
  $(".ir07 .no02").removeClass("animate");
}, 12500);

//r8
setTimeout(function () {
  $(".ir08 .no01").addClass("animate");
  $(".ir08 .no03").css("z-index", "2");
}, 5000); //01
setTimeout(function () {
  $(".ir08 .no03").removeClass("animate");
  $(".ir08 .no01").css("z-index", "1");
}, 6000);
setTimeout(function () {
  $(".ir08 .no02").addClass("animate");
  $(".ir08 .no01").removeClass("animate");
}, 9000); //02
setTimeout(function () {
  $(".ir08 .no02").css("z-index", "3");
}, 1000);
setTimeout(function () {
  $(".ir08 .no03").addClass("animate").css("z-index", "5");
}, 13000); //03
setTimeout(function () {
  $(".ir08 .no01").css("z-index", "4");
}, 13500);
setTimeout(function () {
  $(".ir08 .no02").removeClass("animate");
}, 14000);

function autoSlideR1() {
  setTimeout(function () {
    $(".ir01 .no01").addClass("animate");
    $(".ir01 .no03").css("z-index", "2");
  }, 3000); //01
  setTimeout(function () {
    $(".ir01 .no03").removeClass("animate");
    $(".ir01 .no01").css("z-index", "1");
  }, 4000);
  setTimeout(function () {
    $(".ir01 .no02").addClass("animate");
    $(".ir01 .no01").removeClass("animate");
  }, 7000); //02
  setTimeout(function () {
    $(".ir01 .no02").css("z-index", "3");
  }, 8000);
  setTimeout(function () {
    $(".ir01 .no03").addClass("animate").css("z-index", "5");
  }, 11000); //03
  setTimeout(function () {
    $(".ir01 .no01").css("z-index", "4");
  }, 11500);
  setTimeout(function () {
    $(".ir01 .no02").removeClass("animate");
  }, 12000);
}
function autoSlideR2() {
  setTimeout(function () {
    $(".ir02 .no01").addClass("animate");
    $(".ir02 .no03").css("z-index", "2");
  }, 3000); //01
  setTimeout(function () {
    $(".ir02 .no03").removeClass("animate");
    $(".ir02 .no01").css("z-index", "1");
  }, 4000);
  setTimeout(function () {
    $(".ir02 .no02").addClass("animate");
    $(".ir02 .no01").removeClass("animate");
  }, 7000); //02
  setTimeout(function () {
    $(".ir02 .no02").css("z-index", "3");
  }, 8000);
  setTimeout(function () {
    $(".ir02 .no03").addClass("animate").css("z-index", "5");
  }, 11000); //03
  setTimeout(function () {
    $(".ir02 .no01").css("z-index", "4");
  }, 11500);
  setTimeout(function () {
    $(".ir02 .no02").removeClass("animate");
  }, 12000);
}
function autoSlideR3() {
  setTimeout(function () {
    $(".ir03 .no01").addClass("animate");
    $(".ir03 .no03").css("z-index", "2");
  }, 4000); //01
  setTimeout(function () {
    $(".ir03 .no03").removeClass("animate");
    $(".ir03 .no01").css("z-index", "1");
  }, 5000);
  setTimeout(function () {
    $(".ir03 .no02").addClass("animate");
    $(".ir03 .no01").removeClass("animate");
  }, 9000); //02
  setTimeout(function () {
    $(".ir03 .no02").css("z-index", "3");
  }, 1000);
  setTimeout(function () {
    $(".ir03 .no03").addClass("animate").css("z-index", "5");
  }, 14000); //03
  setTimeout(function () {
    $(".ir03 .no01").css("z-index", "4");
  }, 14500);
  setTimeout(function () {
    $(".ir03 .no02").removeClass("animate");
  }, 15000);
}
function autoSlideR4() {
  setTimeout(function () {
    $(".ir04 .no01").addClass("animate");
    $(".ir04 .no03").css("z-index", "2");
  }, 4000); //01
  setTimeout(function () {
    $(".ir04 .no03").removeClass("animate");
    $(".ir04 .no01").css("z-index", "1");
  }, 5000);
  setTimeout(function () {
    $(".ir04 .no02").addClass("animate");
    $(".ir04 .no01").removeClass("animate");
  }, 9000); //02
  setTimeout(function () {
    $(".ir04 .no02").css("z-index", "3");
  }, 1000);
  setTimeout(function () {
    $(".ir04 .no03").addClass("animate").css("z-index", "5");
  }, 14000); //03
  setTimeout(function () {
    $(".ir04 .no01").css("z-index", "4");
  }, 14500);
  setTimeout(function () {
    $(".ir04 .no02").removeClass("animate");
  }, 15000);
}
function autoSlideR5() {
  setTimeout(function () {
    $(".ir05 .no01").addClass("animate");
    $(".ir05 .no03").css("z-index", "2");
  }, 2000); //01
  setTimeout(function () {
    $(".ir05 .no03").removeClass("animate");
    $(".ir05 .no01").css("z-index", "1");
  }, 3000);
  setTimeout(function () {
    $(".ir05 .no02").addClass("animate");
    $(".ir05 .no01").removeClass("animate");
  }, 7000); //02
  setTimeout(function () {
    $(".ir05 .no02").css("z-index", "3");
  }, 8000);
  setTimeout(function () {
    $(".ir05 .no03").addClass("animate").css("z-index", "5");
  }, 12000); //03
  setTimeout(function () {
    $(".ir05 .no01").css("z-index", "4");
  }, 12500);
  setTimeout(function () {
    $(".ir05 .no02").removeClass("animate");
  }, 13000);
}
function autoSlideR6() {
  setTimeout(function () {
    $(".ir06 .no01").addClass("animate");
    $(".ir06 .no04").css("z-index", "2");
  }, 3000);
  setTimeout(function () {
    $(".ir06 .no04").removeClass("animate");
    $(".ir06 .no01").css("z-index", "1");
  }, 4000);
  setTimeout(function () {
    $(".ir06 .no02").addClass("animate");
    $(".ir06 .no01").removeClass("animate");
  }, 6000); //2
  setTimeout(function () {
    $(".ir06 .no02").css("z-index", "1");
    $(".ir06 .no01").css("z-index", "2");
  }, 7000);
  setTimeout(function () {
    $(".ir06 .no03").addClass("animate");
    $(".ir06 .no02").removeClass("animate");
  }, 9000); //3
  setTimeout(function () {
    $(".ir06 .no04").css("z-index", "6");
    $(".ir06 .no01").css("z-index", "5");
    $(".ir06 .no02").css("z-index", "4");
  }, 10000);
  setTimeout(function () {
    $(".ir06 .no04").addClass("animate");
    $(".ir06 .no03").css("z-index", "3");
  }, 12000); //4
  setTimeout(function () {
    $(".ir06 .no03").removeClass("animate");
  }, 12100);
}
function autoSlideR7() {
  setTimeout(function () {
    $(".ir07 .no01").addClass("animate");
    $(".ir07 .no03").css("z-index", "2");
  }, 3500); //01
  setTimeout(function () {
    $(".ir07 .no03").removeClass("animate");
    $(".ir07 .no01").css("z-index", "1");
  }, 4500);
  setTimeout(function () {
    $(".ir07 .no02").addClass("animate");
    $(".ir07 .no01").removeClass("animate");
  }, 7500); //02
  setTimeout(function () {
    $(".ir07 .no02").css("z-index", "3");
  }, 8500);
  setTimeout(function () {
    $(".ir07 .no03").addClass("animate").css("z-index", "5");
  }, 11500); //03
  setTimeout(function () {
    $(".ir07 .no01").css("z-index", "4");
  }, 12000);
  setTimeout(function () {
    $(".ir07 .no02").removeClass("animate");
  }, 12500);
}
function autoSlideR8() {
  setTimeout(function () {
    $(".ir08 .no01").addClass("animate");
    $(".ir08 .no03").css("z-index", "2");
  }, 5000); //01
  setTimeout(function () {
    $(".ir08 .no03").removeClass("animate");
    $(".ir08 .no01").css("z-index", "1");
  }, 6000);
  setTimeout(function () {
    $(".ir08 .no02").addClass("animate");
    $(".ir08 .no01").removeClass("animate");
  }, 9000); //02
  setTimeout(function () {
    $(".ir08 .no02").css("z-index", "3");
  }, 1000);
  setTimeout(function () {
    $(".ir08 .no03").addClass("animate").css("z-index", "5");
  }, 13000); //03
  setTimeout(function () {
    $(".ir08 .no01").css("z-index", "4");
  }, 13500);
  setTimeout(function () {
    $(".ir08 .no02").removeClass("animate");
  }, 14000);
}
