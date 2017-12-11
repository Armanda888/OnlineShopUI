import Controller from '@ember/controller';
import Ember from 'ember'

export default Controller.extend({
  slideIndex : 0,

  _init () {
    this.send('showSlide', 0)
  },

  actions: {
    showSlide(direction) {
          let i = 0, indexNum = this.get('slideIndex') + direction
          let slides = document.getElementsByClassName("mySlides")
          this.set('slideIndex', indexNum%2)
          indexNum = indexNum%2
          var dots = document.getElementsByClassName("dot")
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none"
              if (i == indexNum) {
                slides[i].style.display = "block"
              }
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "")
              if (i == indexNum ) {
                 dots[i].className += " active"
               }
          }

     }
  }
});
