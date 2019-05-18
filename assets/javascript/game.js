$(document).ready(function(){
    $('.first-heading').mousemove(function(e){
        var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
        var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
        $('.first-heading').css('text-shadow',+rYP/10+'px '+rXP/80+'px #4d163d, '+rYP/8 +'px '+rXP/60+'px #840037, '+rXP/70+'px '+rYP/12+'px #bd0034');
    });
});