import Controller from '@ember/controller';
import WithRootMixin from '../../mixins/withRoot';
import Ember from 'ember';

export default Controller.extend(WithRootMixin, {
  selectSize: 0,
  originalPrice: 0,
  salePrice: 0,
  testCompute: function() {
    let sizes = this.get('model.sizes');
    alert("sizess" + sizes);
    /*
    if (this.get('model.sizes')) {
      alert('size' + this.get('model.sizes')[0]);
      return this.get('model.sizes')[0];
    } */
    return 0;
  }.property('model.sizes'),

  init() {
    let myImages = document.getElementsByClassName("myImages");
    Ember.Logger.info('init controller', myImages.length);
    for (let i = 0; i < myImages.length; i++) {
       if (i == 0) {
           myImages[i].style.display = "block";
       } else {
          myImages[i].style.display = "none";
       }
    }
  },
  actions: {
    showSlide(index) {
          let i = 0, indexNum = this.get('slideIndex') + direction
          let myImages = document.getElementsByClassName("myImages")
          var dots = document.getElementsByClassName("dot")
          for (i = 0; i < myImages.length; i++) {
              myImages[i].style.display = "none"
              if (i == index) {
                myImages[i].style.display = "block"
              }
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "")
              if (i == indexNum ) {
                 dots[i].className += " active"
               }
          }

     },
     onSelectSize(size) {
      this.selectSize = size
      alert("size" + size)
     },
     submit() {
     
     }
  }
});
