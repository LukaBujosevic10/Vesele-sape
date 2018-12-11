$(document).ready(function() {

var visina_m;


function post_rot_sl(slika, alt_slike, slika_k, alt_slike_k, slika_m, alt_slike_m, slika_kon, alt_slike_kon) {
  $('.cent').append('<div id="front" >  </div>');

  $('.cent').append('<div id="back" ></div>');



  $('#front').addClass('napred');
  $('#back').addClass('pozadi');

  $('#front').append('<img src='+slika+' alt='+alt_slike+' >');


  $('.napred').on('click', function () {
    var nap = $('.napred');
    var poz = $('.pozadi');

    if (event.offsetX < 380) {
      $('#back').empty();
      $('#back').append('<h2><strong>Sve za vašeg psa</strong></h2>');
      $('#back').append('<div id="slika_pas" ></div>');
      $('#slika_pas').append('<img src='+slika_k+' alt='+alt_slike_k+' >');
      $('#back').append('<div id="tekst_pas" ></div>');
      $('#tekst_pas').append('<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>');
      $('#tekst_pas').append('<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>');
      $('#tekst_pas').append('<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>');
      }else {
        $('#back').empty();
        $('#back').append('<h2><strong>Sve za vašu mačku</strong></h2>');
        $('#back').append('<div id="slika_mace" ></div>');
        $('#slika_mace').append('<img src='+slika_m+' alt='+alt_slike_m+' >');
        $('#back').append('<div id="tekst_maca" ></div>');
        $('#tekst_maca').append('<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>');
        $('#tekst_maca').append('<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>');
        $('#tekst_maca').append('<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>');
    }

    $(nap).removeClass().addClass('pozadi');
    $(poz).removeClass().addClass('napred');

    $('#front').removeClass('istakni_kucu');
    $('#front').removeClass('istakni_macu');
  })

  function na_prvi() {
    $('.prvi').on('click', function () {
      $('.cent').children().removeClass();
      $('#front').addClass('napred');
      $('#back').addClass('pozadi');
      $('.mapa').empty();


    })

  }

na_prvi();

  $('.drugi').on('click', function () {


      $('#back').empty();
      $('.cent').children().removeClass();
      $('#back').append('<div class="adresa"> </div>');
      $('.adresa').append('<h2> Pet Shop </br> Vesele šape Čačak</h2>');
      $('.adresa').append('<h3><strong> sve za pse i mačke </strong> </h3>');
      $('.adresa').append('<h3> Čačak - Kneza Miloša 30</h3>');
      $('.adresa').append('<h3> 064 111 22 33</h3>');
//$('.adresa').append('<img src='+slika_kon+' alt='+alt_slike_kon+' >');

      setTimeout(function () {

        $('#back').append('<div class="mapa">      <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1437.728953226458!2d20.344850099999995!3d43.887782099999995!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1542807231807" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>    </div>');


      },1200)

      $('#front').addClass('pozadi');
      $('#back').addClass('napred');


  })

}






function hov() {

    $('img').on('mousemove', function () {
    //  var širina = $('#front').width();
      var širina = $('img').width();
      if (event.offsetX < (širina/2)-20) {
        $('#front').removeClass('istakni_macu');
        $('#front').addClass('istakni_kucu');
        }
      if (event.offsetX > (širina/2)+20) {
        $('#front').removeClass('istakni_kucu');
        $('#front').addClass('istakni_macu');
        }
        if (event.offsetX >= (širina/2)-20 && event.offsetX <= (širina/2)+20) {
          $('#front').removeClass('istakni_kucu');
          $('#front').removeClass('istakni_macu');
          }
    })

    $('img').on('mouseleave', function () {

        $('#front').removeClass('istakni_kucu');
        $('#front').removeClass('istakni_macu');
    })

}



function pocetna() {
  var slika = "img/1.png";
  var alt_slike = "veselesape";
  var slika_k = "img/2k.png";
  var alt_slike_k = "sve_za_pse_cacak";
  var slika_m = "img/2m.png";
  var alt_slike_m = "sve_za_mace_cacak";
  var slika_kon = "img/k_t.png";
  var alt_slike_kon = "pet_shop_cacak";

  post_rot_sl(slika, alt_slike, slika_k, alt_slike_k, slika_m, alt_slike_m, slika_kon, alt_slike_kon);
  hov();
  visina_as();
  visina_mape();
  tekst_koji_seta();
setInterval(tekst_koji_seta, 5000);
}

function visina_as() {
    var visina = $('.napred').height();
      $('.aside').height(visina);
}

function visina_mape() {
  visina_m = $('.adresa').height();
    $('.mapa').height(visina_m);
}

function tekst_koji_seta() {
  document.getElementById("demo").innerHTML = " ";
  var i = 0;
  var txt = 'Neki tekst koji šeta - radno vreme, telefon, proizvodi na akciji...';
  var speed = 50;
  typeWriter();
function typeWriter() {
  visina_as();
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

}

pocetna();

})
