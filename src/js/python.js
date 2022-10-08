function merchfiyIt(){
  var conceptName = $(".selected").find('.figure img');
  // $('.art-image').find(":selected").text()
  const arrImg = []
  $.each( conceptName, function( key, value ) {
    arrImg.push(value.src);
});
  localStorage.setItem('mergify',JSON.stringify(arrImg))
  window.location.href = 'compare-art.html'
}



function createIt(){

  var createItImageObj = $(".selected").find('.art-img-wrapper img');
  //check length of object if greater than 1 then return false
  if(createItImageObj.length > 1){
    alert('Cannot select More than one Image')
    return false
  }else{
    $('.new_gif').css('display','flex');
    imgUrl = createItImageObj.attr('src')
    // let base64image = getBase64Image(imgUrl);
    this.getBase64ImageFromUrl(imgUrl, function(getBase64ImageFromUrl){
      // console.log(result)
      var settings = {
        "url": "http://52.207.235.77/api/crop",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "image": getBase64ImageFromUrl

        }),
      };
      data_key = ''
      $.ajax(settings).done(function (response) {

        if (response && response.status) {
          const { result } = response.que
          console.log(result.task_key)

          data_key = result.task_key
          //ajax call for printful
          // document.getElementById('').style.display = "none";
          // document.getElementById('').style.display = "none";
          // document.getElementById('').style.display = "block";
          // $('#image_file_input').css('display','block');
          // $('#my_image').css('display','none');
          
          // $('.new_gif').css('display','block');
          // $('body').css('background','black');
          $('#createItBtn').remove()
          
          // document.getElementById('body').style.backgroundColor = "black";

          setTimeout(
            function () {

              ajaxphpV2(data_key)
            }, 10000);

        } else {
          return data_key
        }

      });
    });
  //   const arrImgArt = []
  //   $.each( createItImageObj, function( key, value ) {
  //     console.log(value)
  //     arrImgArt.push(value.src);
  // });
  }


}
function getBase64ImageFromUrl(imgUrl, callback) {

  var img = new Image();

  // onload fires when the image is fully loadded, and has width and height

  img.onload = function(){

    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png"),
        dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
   
    callback(dataURL); // the base64 string

  };
  console.log(img)
  // set attributes and src 
  img.setAttribute('crossOrigin', 'anonymous'); //
  img.src = imgUrl;

}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#my_image').attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
    getBase64(input.files[0]).then(function (result) {
      $('.new_gif').css('display','flex');

      splitDataString = result.replace(/^data:image\/[a-z]+;base64,/, "");
      return splitDataString;

    }).then(function (result) {
      let data;
      // console.log(result)
      var settings = {
        "url": "http://52.207.235.77/api/crop",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "image": result

        }),
      };
      data_key = ''
      $.ajax(settings).done(function (response) {

        if (response && response.status) {
          const { result } = response.que
          console.log(result.task_key)

          data_key = result.task_key
          //ajax call for printful
          // document.getElementById('').style.display = "none";
          // document.getElementById('').style.display = "none";
          // document.getElementById('').style.display = "block";
          $('#image_file_input').css('display','block');
          // $('#my_image').css('display','none');
          $('.new_gif').css('display','flex');
          // $('body').css('background','black');
          
          // document.getElementById('body').style.backgroundColor = "black";

          setTimeout(
            function () {

              ajaxphp(data_key)
            }, 10000);

        } else {
          return data_key
        }

      });

    });

  }
}



function ajaxphpV2(str) {

  var settings = {
    "url": "action.php?task_key=" + str,
    "method": "GET",
    "timeout": 0,
    "crossDomain": true,
    "headers": {
      "Authorization": "Basic aG96ZnJ1eWQtMWRrZC1jZjMxOnhxMjktcW41bnNpdmJhcXp3",
      'Access-Control-Allow-Origin': "https://api.printful.com"
    },
  };

  $.ajax(settings).done(function (response) {
    const obj = JSON.parse(response)
   
    if (obj && obj.status) {
      // document.getElementById('').style.display = "block";
      // document.getElementById('new_gif').style.display = "none";
      // document.getElementById('').style.display = "block";


      $('.new_gif').css('display','none');
      $('#response_resultsV2').css('display','block');
      $('#compareContainer').remove()
      $('.carousel-container').remove()
      $('.magnifying-result-container').remove()
      $('#fullScreenModal').remove()
      
      $('body').css('background','white');

      const result = obj.data

      front_url_fetched = result.front_url
      top_url_fetched = result.top_url
      bottom_url_fetched = result.bottom_url
      document.getElementById('front_bagpack').src = front_url_fetched
      document.getElementById('top_bagpack').src = top_url_fetched
      document.getElementById('bottom_bagpack').src = bottom_url_fetched
      // document.getElementById('queue_id').textContent =  result.task_key && result.task_key
      // document.getElementById('queue_id').textContent =  result.task_key && result.task_key


    }
  });


}





function ajaxphp(str) {

  var settings = {
    "url": "action.php?task_key=" + str,
    "method": "GET",
    "timeout": 0,
    "crossDomain": true,
    "headers": {
      "Authorization": "Basic aG96ZnJ1eWQtMWRrZC1jZjMxOnhxMjktcW41bnNpdmJhcXp3",
      'Access-Control-Allow-Origin': "https://api.printful.com"
    },
  };

  $.ajax(settings).done(function (response) {
    const obj = JSON.parse(response)
    alert(response)
    if (obj && obj.status) {
      // document.getElementById('').style.display = "block";
      // document.getElementById('new_gif').style.display = "none";
      // document.getElementById('').style.display = "block";

      $('#heading').css('display','block');
      $('.new_gif').css('display','none');
      $('#response_results').css('display','block');
      $('body').css('background','white');

      const result = obj.data

      front_url_fetched = result.front_url
      top_url_fetched = result.top_url
      bottom_url_fetched = result.bottom_url
      document.getElementById('front_bagpack').src = front_url_fetched
      document.getElementById('top_bagpack').src = top_url_fetched
      document.getElementById('bottom_bagpack').src = bottom_url_fetched
      // document.getElementById('queue_id').textContent =  result.task_key && result.task_key
      // document.getElementById('queue_id').textContent =  result.task_key && result.task_key


    }
  });


}


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


function generateArtImage(){
  str =  document.getElementById('commentsart2').value; 
  if(str ==''){
    $("#error_create_art").text("Please descibe your thought!");
     return false
  }else{
    // $.redirect('choose-art.html', {'prompt': str});
    localStorage.setItem('prompt', str)

    window.location.href = 'choose-art.html'
  }
}
