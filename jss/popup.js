//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

var a = new Array(),
  n = "";
a[1] = "Đ";
a[2] = "ơ";
a[3] = "n";
a[4] = " ";
a[5] = "g";
a[6] = "i";
a[7] = "ả";
a[8] = "n";
a[9] = "!";
a[10] = " ";
a[11] = "V";
a[12] = "ì";
a[13] = " ";
a[14] = "T";
a[15] = "ớ";
a[16] = " ";
a[17] = "C";
a[18] = "ũ";
a[19] = "n";
a[20] = "g";
a[21] = " ";
a[22] = "Y";
a[23] = "Ê";
a[24] = "U";
a[25] = " ";
a[26] = "C";
a[27] = "ậ";
a[28] = "u";
a[29] = " ";
a[30] = "♥";
a[31] = " ";
a[32] = "Đ";
a[33] = "ư";
a[34] = "ợ";
a[35] = "c";
a[36] = " ";
a[37] = "k";
a[38] = "h";
a[39] = "u";
a[40] = "m";
a[41] = "?";

function one() {
  t = document.f.txt.value;
  j = t.length;
  if (j > 0) {
    for (var i = 1; i <= j; i++) {
      n = n + a[i];
      if (i == 42) {
        document.f.txt.value = "";
        n = "";
      }
    }
  }
  document.f.txt.value = n;
  n = "";
  setTimeout("one()", 1);
}
function s() {}
function on() {
  one();
}

function showModal(){
  $('.reveal-modal').css({visibility: 'visible'})
}

$(document).ready(function () {
  $("#k").hide();
  $("h1").click(function () {
    $(".active").removeClass("active");
    $("#k").slideUp("fast");
    if ($(this).next("#k").is(":hidden") == true) {
      $(this).addClass("active");
      $(this).next("#k").slideDown("fast");
    }
  });
});
function Yeu() {
  document.f.txt.value = "Đơn giản! Vì Tớ Cũng YÊU Cậu ♥ Được khum?"
  $("#divResult").fadeOut(0);
  //PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
  $("#divResult").html(
    "</br><h2>Tớ biết kiểu gì bạn cũng nói thế mà <img src='http://website1gia.com/files/assets/3.png'</img></h2>"
  );
  $("#divResult").fadeIn(2000, function () {
    $("#divResult2").fadeOut(0);
    $("#divResult2").html(
      "<p>♥ Tớ cũng yêu bạn rất nhiều .<img src='http://website1gia.com/files/assets/4.png'/></p></br>"
    );
    $("#divResult2").fadeIn(2000, function () {
      $("#divResult3").fadeOut(0);
      $("#divResult3").html(
        "<p>Tối bạn cho tớ st nhé. Hi hi hi  <img src='http://website1gia.com/files/assets/5.png'/> Yêu bạn hâm thế nhờ <3 </p></br><a href='traitim2.html' target='_blank'>Tim tim tim 💗</a></br><a href='traitim5.html' target='_blank'>Trái tim khổng lồ 💗</a><br><a href='traitim3.html' target='_blank'>Năng lượng tình yêu 💖💖</a><br><a href='traitim4.html' target='_blank'>Dòng chảy tình yêu 💘💘💘</a><br><a href='traitim1.html' target='_blank'>Và cuối cùng tớ muốn nói với cậu 💝💝💝💝</a>",
      );
      $("#divResult3").fadeIn(2000);
    });
  });
}
