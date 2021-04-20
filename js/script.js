$(function(){

  // inserisco le immagini e i circle in delle variabili
  var imgCarousel = $('.img-box img');
  var circleCarousel = $('.circle-nav i');

  // aggiungo la funzione click alle due frecce(chevron)
  $('i.fa-chevron-right').click(nextImg);
  $('i.fa-chevron-left').click(prevImg);
  
  /* FUNCTIONS */

  function nextImg() {
    // creo una ref che attiva img e i, e gli rimuovo la classe active
    var activeImg = $('.img-box img.active');
    var activeCircle = $('.circle-nav i.active');
    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    // nel caso in cui length dell'img successiva(next) è uguale a 0 vorrà dire che dopo della stessa non è presente un'altra img, quindi rimetto la classe active alla prima img e al primo cerchio
    if (activeImg.next('img').length === 0) {
      $('.img-box img').first().addClass('active');
      $('.img-box i.fa-circle').first().addClass('active');
    } 

    // se invece dopo l'ultimo elemento non c'è la classe active, la aggiungo a quelli successivi(next)
    else {
      activeImg.next().addClass('active');
      activeCircle.next().addClass('active');
    }
  }

  function prevImg() {
    // creo una ref che attiva img e i, e gli rimuovo la classe active
    var activeImg = $('.img-box img.active');
    var activeCircle = $('.circle-nav i.active');
    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    // nel caso in cui length dell'img precedente(prev) è uguale a 0 vorrà dire che prima della stessa non è presente un'altra img, quindi rimetto la classe active all'ultima img e all'ultimo cerchio
    if (activeImg.prev('img').length === 0) {
      $('.img-box img').last().addClass('active');
      $('.img-box i.fa-circle').last().addClass('active');
    }

    // se invece prima dell'ultimo elemento non c'è la classe active, la aggiungo a quelli precedenti(prev)
    else {
      activeImg.prev().addClass('active');
      activeCircle.prev().addClass('active');
    }
  }

})
