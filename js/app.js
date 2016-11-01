// console.log('wired up!')
// console.log($)
// console.log(_)
// console.log(Backbone)

var forEach = function(arr, cb){
   for(var i = 0 ; i < 9; i+=1){
      cb(arr[i], i, arr)
   }
}

// $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=ba0dd7a23259418a8759fa068598c309').then(dataRender)

var congressSelector = document.querySelector('.congress-container')
var dataRender = function(dataRes){
   console.log(dataRes.results)
   forEach(dataRes.results, function(obj){
      var bigHTMLStr =     '<div class="col-sm-4 col-md-4">'
          bigHTMLStr +=       '<div class="thumbnail first-thumbs">'
          bigHTMLStr +=             '<h1>' + obj.first_name + ' ' + obj.last_name + '</h1>'
          bigHTMLStr +=             '<hr>'
          bigHTMLStr +=             '<h3>' + obj.title + ' <br><hr> ' + obj.party + '<br><hr>' + obj.state_name + '</h3>'
          bigHTMLStr +=              '<ul>'
          bigHTMLStr +=                 '<li>' + 'email: ' + obj.oc_email + '</li>'
          bigHTMLStr +=                 '<li>' + 'website: ' + obj.website + '</li>'
          bigHTMLStr +=                 '<li>' + '<i class="fa fa-facebook fa-2x" aria-hidden="true"></i>: ' + obj.facebook_id + '</li>'
          bigHTMLStr +=                 '<li>' + '<i class="fa fa-twitter fa-2x" aria-hidden="true"></i>: ' + obj.twitter_id + '</li>'
          bigHTMLStr +=              '</ul>'
          bigHTMLStr +=           '<p>' + 'End of term:' + ' ' + obj.term_end + '</p>'
          bigHTMLStr +=        '</div>'
          bigHTMLStr +=     '</div>'

          congressSelector.innerHTML += bigHTMLStr

   })
}

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=ba0dd7a23259418a8759fa068598c309').then(dataRender)
