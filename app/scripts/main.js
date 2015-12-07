/*global $*/
'use strict';

$(function (){
  // image stretches to fill container
  $('.imageContainer, .thumbnail, .videoThumb').imagefill();

  // breadcrumbs plugin
  $('#breadcrumbs').rcrumbs();

  // crude rollover functions as proof of concept

  /*$('#computer').mouseenter(function(){
    $('#computer').hide();
    $('#computerOver').removeClass('under');
  });

  $('#people').mouseenter(function(){
    $('#people').hide();
    $('#peopleOver').removeClass('under');
  });

  $('#pod').mouseenter(function(){
    $('#pod').hide();
    $('#podOver').removeClass('under');
  });

  $('#digitalLibrary').mouseenter(function(){
    $('#digitalLibrary').hide();
    $('#digitalLibraryOver').removeClass('under');
  });

  //hide the rollover states
  //$('#computerOver').hide();

  //jQuery Socialist Plugin for social media feed
  $('.socialFeed').socialist({
        networks: [
            {name:'facebook',id:'HighPlainsLibraryDistrict'},
            {name:'twitter',id:'MyHPLD'},
            {name:'pinterest',id:'hpldstuff'}
        ]
    });*/
});
