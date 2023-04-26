var box_width = 800;
var box_height = 600;
var wave_height = 50;
var default_angle = 45;
var repeat_count = 2000;
var no_waves = 2;
var curr_angle = document.getElementById("angleRange").value;
var curr_wavelength = document.getElementById("wavRange").value;
var curr_distance = document.getElementById("distRange").value;
var distUnit = document.getElementById("distUnit").value;
var wavUnit = document.getElementById("wavUnit").value;
var atom_per_row = 4;
var atom_spacing = 200;
var normIndex = 1;

var firstVisit = true;

function showSection(sectionId) {

    document.querySelectorAll('section').forEach(function (section) {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    if(sectionId!="quiz")
    {
      $("#resultDiv").hide();
      fillQue();
    }
    if(sectionId=="simulations" && firstVisit)
    {
      firstVisit = false;
      currentIndex = 0;
      $("#slideShow").show();
      $("#simulator").hide();
    }
    

  }
  
  function toggleSlider(type)
  {
    if(type=="enable")
    {
      $("#simulator").fadeOut("slow");
      $("#slideShow").fadeIn("slow");
      
    }
    else if(type=="disable")
    {
      $("#slideShow").fadeOut("slow");
      $("#simulator").fadeIn("slow");
    }
    
  }

  function toggleVideo(type)
  {
    if(type=="enable")
    {
      $("#simulator").fadeOut("slow");
      $("#video").fadeIn("slow");
      
    }
    else if(type=="disable")
    {
      $("#video").fadeOut("slow");
      $("#simulator").fadeIn("slow");
    }
    
  }

var wave_box = document.getElementById("wave_box");
var illustration = document.getElementById("illustration");

function round(val, dig) {
    const fTen = Math.pow(10, dig)
    return Math.round(val * fTen) / fTen
}

function getCalc() {
    var wav_nm = (wavUnit != "nm") ? curr_wavelength * 10 : curr_wavelength;
    var dist_nm = (distUnit != "nm") ? curr_distance * 10 : curr_distance;

    var sinVal = round(Math.sin(curr_angle * (Math.PI) / 180), 4);
    var n = round((2 * dist_nm * sinVal) / wav_nm, 4);

    var parameter_html = "<h3>" +
        "<b>&#955; : " + ((wavUnit != "nm") ? curr_wavelength + " &#8491; = " : "") + wav_nm + " nm</b><br>" +
        "<b>&#920; : " + curr_angle + " °</b><br>" +
        "<b>d : " + ((distUnit != "nm") ? curr_distance + " &#8491; = " : "") + dist_nm + " nm</b>" +
        "</h3>";
    var steps_html = "<p> n * (" + wav_nm + " nm) = 2 * (" + dist_nm + " nm) * sin(" + curr_angle + "°) </p>" +
        "<p> n * (" + wav_nm + " nm) = (2 * " + dist_nm + " * sin(" + curr_angle + "°)) nm </p>" +
        "<p> (n * " + wav_nm + ") nm = (" + (2 * dist_nm) + " * " + sinVal + ") nm </p>" +
        "<p> n * " + wav_nm + " = " + round(2 * dist_nm * sinVal, 4) + " </p>" +
        "<p> n = (" + round(2 * dist_nm * sinVal, 4) + " / " + wav_nm + ") </p>" +
        "<h3><b>n = " + n + "</b></h3>";

    document.getElementById("ansText").innerHTML = "n : " + n;
    return [parameter_html, steps_html];

}

update();
function update() {


    illustration.innerHTML = "<path class='illus_plane' d='M 0,20 l 120,0 M 0,70 l 120,0' />";
    var path = "c " + curr_wavelength / 2 + " -" + curr_wavelength + ", " + curr_wavelength / 2 + " " + curr_wavelength + ", " + curr_wavelength + " 0";
    wave_box.innerHTML = "<defs><linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'><stop offset='11.2%' stop-color='rgb(255, 230, 109)' /><stop offset='100.2%' stop-color='rgb(87, 232, 107)' /></linearGradient></defs>";
    wave_box.innerHTML += "<rect fill='url(#gradient)' class='matter' x='0' y='0' height='" + (curr_distance * (no_waves - 1) + 50) + "'>";
    // wave_box.innerHTML="";
    for (var i = 1; i <= no_waves; i++) {
        var curr_path = "M 0 " + ((curr_distance * (i - 1)) + 20);
        for (var j = 0; j < repeat_count; j++) {
            curr_path += " " + path;
        }
        for (var j = 0; j < atom_per_row; j++) {
            wave_box.innerHTML += "<circle cx='" + j * atom_spacing + "' cy=" + ((curr_distance * (i - 1)) + 20) + " r='15' stroke='black' stroke-width='3' fill='red' />"
        }
        wave_box.innerHTML += "<circle cx='0' cy=" + ((curr_distance * (i - 1)) + 20) + " r='15' stroke='black' stroke-width='3' fill='red' />"

        wave_box.innerHTML += "<path id='wave" + i + "' y=" + (curr_distance * (i - 1)) + 20 + " class='wave_path' d='" + curr_path + "' transform=rotate(" + curr_angle + ",0," + ((curr_distance * (i - 1)) + 20) + ")>" +
            "<animateTransform class='wave_animation' attributeName='transform' attributeType='XML'" +
            "type='translate' from='0 0' to='-1000 0' dur='20s' repeatCount='indefinite' additive='sum' accumulate='sum' />" +
            "</path> ";



    }

    illustration.innerHTML += "<path class='illus_iline1' d='M 0,20 l 400,0' transform=rotate(" + curr_angle + ",0,20) />";
    illustration.innerHTML += "<path class='illus_iline2' d='M 0,70 l 400,0' transform=rotate(" + curr_angle + ",0,70) />";
    epx = 40 * Math.cos(curr_angle * Math.PI / 180);
    epy = 70 + 40 * Math.sin(curr_angle * Math.PI / 180);
    ang_x = 20 + ((40 + epx) / 2);
    ang_y = 10 + ((70 + epy) / 2);
    waveT_x = 150 * Math.cos(curr_angle * Math.PI / 180) - 50 * (90 - curr_angle) / 90;
    waveT_y = 70 + 150 * Math.sin(curr_angle * Math.PI / 180) - 100 * (curr_angle / 90);
    var acc_wavelength = $("#wavRange").val();
    var acc_distance = $("#distRange").val();
    illustration.innerHTML += "<path class='illus_iangle' d='M 40,70 A 40,40 0 0 1 " + epx + "," + epy + "'/>"
    illustration.innerHTML += "<text class='illus_iangle_text' x=" + ang_x + " y=" + ang_y + " transform=rotate(180," + ang_x + "," + ang_y + ") dominant-baseline='middle' text-anchor='middle'>" + curr_angle + "°</text>"
    illustration.innerHTML += "<text class='illus_iwav_text' x=" + waveT_x + " y=" + waveT_y + " transform=rotate(180," + waveT_x + "," + waveT_y + ") dominant-baseline='middle' text-anchor='middle'>" + acc_wavelength + " " + wavUnit + "</text>"
    illustration.innerHTML += "<text class='illus_idist_text' x='140' y='45' transform=rotate(180,140,45) dominant-baseline='middle' text-anchor='middle'>d: " + acc_distance + " " + distUnit + "</text>"
    illustration.innerHTML += "<path class='illus_dist' d='M 140,20 l 5,0 l -10,0 M 140,20 l 0,15 M 140,55 l 0,15 l 5,0 l -10,0'/>"


    var i_waves = document.getElementById("wave_box");
    var o_waves = i_waves.cloneNode(true);
    var o_waves_illus = illustration.cloneNode(true);

    var o_waves_animation = o_waves.querySelectorAll(".wave_animation");

    o_waves_animation.forEach(function (anim) {
        anim.setAttribute("from", "-1000 0");
        anim.setAttribute("to", "0 0");

    });



    document.getElementById("o_waves").innerHTML = "";
    document.getElementById("o_waves").appendChild(o_waves);

    document.getElementById("o_waves_illus").innerHTML = "";
    o_waves_illus.removeChild(o_waves_illus.querySelector(".illus_iangle_text"));
    o_waves_illus.removeChild(o_waves_illus.querySelector(".illus_dist"));
    o_waves_illus.removeChild(o_waves_illus.querySelector(".illus_iwav_text"));
    o_waves_illus.removeChild(o_waves_illus.querySelector(".illus_idist_text"));

    document.getElementById("o_waves_illus").appendChild(o_waves_illus);

    var [parameter_html, steps_html] = getCalc();

    document.getElementById("calcSteps").innerHTML = steps_html;
    document.getElementById("calcParams").innerHTML = parameter_html;


}

var angleSld = document.getElementById("angleRange");
angleSld.oninput = function () {
    curr_angle = this.value;
    var all_waves = document.querySelectorAll(".wave_path");
    all_waves.forEach(wave => wave.setAttribute("transform", "rotate(" + this.value + ",0," + wave.getAttribute("y") + ")"));
    update();
}

var distSld = document.getElementById("distRange");
distSld.oninput = function () {
    var distSVGmin = 50;
    var distSVGmax = 300;
    wave_height = distSVGmin +  (this.value - $(this).attr('min'))*(distSVGmax - distSVGmin)/($(this).attr('max') - $(this).attr('min'));
    curr_distance = wave_height;
    update();
}

var wavSld = document.getElementById("wavRange");
wavSld.oninput = function () {
    var wavSVGmin = 10;
    var wavSVGmax = 100;
    curr_wavelength = wavSVGmin + (this.value - $(this).attr('min'))*(wavSVGmax - wavSVGmin)/($(this).attr('max') - $(this).attr('min'));
    update();
}

document.getElementById("wavUnit").oninput = function () {
    wavUnit = this.value;
    update();
}
document.getElementById("distUnit").oninput = function () {
    distUnit = this.value;
    update();
}

$('input[type=number]').change(function() {
    var min = $(this).attr("min") * 1;
    var max = $(this).attr("max") * 1;
    var val = $(this).val().length ? $(this).val() * 1 : NaN;
    var ele = $(this).attr('id');
    var [type,ent] = [ele.slice(0,3), ele.slice(3)]

    if( (type=="max" && val<$("#min"+ent).val()) || (type=="min" && val>$("#max"+ent).val()) || val<min || val>max)
    {
        $("#"+ent+"Range").attr(type,this.defaultValue);
        $(this).val(this.defaultValue);
    }
    else 
    {
        $("#"+ent+"Range").attr(type,val);
    }
});


function slideTo(eleID){
    $("#"+eleID)[0].scrollIntoView({
        behavior: "smooth", 
        block: "start"
    });
}

var currentIndex = 0;
//For Slider 
$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 50000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      $(this).css("background-image", "url('Image/t" + (index+1) + ".jpg')");
      if(index==0)$(this).css("display", "block");
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    advance();
    
  });