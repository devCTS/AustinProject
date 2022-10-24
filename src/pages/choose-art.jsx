import React, { useEffect } from 'react'
import { useApplicationContext } from '../../provider'
import { withPrefix } from "gatsby"
import { isLoggedIn } from '../services/auth';
import { navigate } from "gatsby";
import { Helmet } from 'react-helmet';
import Footer from "../components/footer-1";
import Header from "../components/header";
import $ from "jquery";


export default function Layout() {

  useEffect(() => {
    if(!isLoggedIn()){navigate('/signin');}    

    if (applicationState.detailedDescription) {
      generateArt(applicationState.detailedDescription)
    }
  }, [])

  const appContext = useApplicationContext()
  const { applicationState } = appContext


  const generateArt = async (phrase) => {
    const el = document.querySelectorAll('.image_art');
    console.log("elelel",el.length);
      let str = phrase || "cyber punk"
      fetch("http://54.173.169.111/api/diffusion/generate?prompt="+ str).then(response => response.json())
        .then((data) => {
					localStorage.setItem('job_id',data.id)
          console.log("Showing the responsed data",data);
          for(let i = 0; i < el.length; i++){
            let image = document.querySelector('#image_art'+i);
						image.src = data.images[i];
            console.log("Images", image.src);
          }
      });
  }
  

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const onMerchifyClick = (e) => {
    e.preventDefault();
    console.log("MERCHIFY BUTTON IS PRESSED");
    var conceptName = $(".selected").find('.figure img');
    // $('.art-image').find(":selected").text()
    console.log("THis is it", conceptName);
    const arrImg = []
    $.each( conceptName, function( key, value ) {
      arrImg.push(value.src);
  });
    localStorage.setItem('selectmercharr',JSON.stringify(arrImg));
    console.log("!!!!!!!!!!!!!!!!!", arrImg);
    // navigate('/select-merch');
  }

  //for advanced version for compare-art pages.
  // const onMerchifyClick = (e) => {
  //   e.preventDefault();
  //   console.log("MERCHIFY BUTTON IS PRESSED");
  //   var conceptName = $(".selected").find('.figure img');
  //   // $('.art-image').find(":selected").text()
  //   console.log("THis is it", conceptName);
  //   const arrImg = []
  //   $.each( conceptName, function( key, value ) {
  //     arrImg.push(value.src);
  // });
    
  // $('.new_gif').css('display','flex');
  //   let dataPostRequest = {
  //     "id": localStorage.getItem('job_id'),
  //     "images": arrImg
  //   }
  //   console.log(dataPostRequest);
  //   const merchifyArr = []
  //   postData('http://54.173.169.111/api/rudalle/upscale2x', dataPostRequest)
  //   .then((data) => {
  //     if (data && data.status){
  //       $.map( data.images, function( val, i ) {
  //         if (val.status == 'succeeded'){
  //           merchifyArr.push({
  //             "id_val":i ,
  //             "original":val.original,
  //             "upscaled":val.upscaled
  //           })
  //         }
  //       });
  //       localStorage.setItem('mergify',JSON.stringify(merchifyArr))
  //     }
  //     navigate('/compare-art');
  //   });
  // }

  return (
    <>
      <Helmet>
        <link href={withPrefix("assets/css/bootstrap.min.css")} rel="stylesheet"/>
      </Helmet>
      <Header></Header>
        <main className="content-main">
          <div className="feature-list">  
            <div className="container">
              <div className="heading-top">
                <h2>Choose Art</h2>
              </div>
              <div className="row" id="artContainer">
                <div className="col-md-4">
                  <a href="#" className="box art-image">
                    <div className="figure">
                      <img className="image_art" id="image_art0" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-1.png" />
                    </div>
                    <div className="aside">
                    </div>
                  </a>
                </div>
                <div className="col-md-4 ">
                  <a href="#" className="box art-image">
                    <div className="figure">
                      <img className="image_art" id="image_art1" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-2.png" />
                    </div>
                    <div className="aside">
                    </div>
                  </a>
                </div>
                <div className="col-md-4 "><a href="#" className="box art-image">
                  <div className="figure"><img className="image_art" id="image_art2" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-3.png" /></div>
                  <div className="aside">
                  </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box art-image">
                  <div className="figure"><img className="image_art" id="image_art3" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-4.png" /></div>
                  <div className="aside">
                  </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box art-image">
                  <div className="figure"><img className="image_art" id="image_art4" src={withPrefix("assets/img/green-little-balls.gif")} alt="art-5" /></div>
                  <div className="aside">
                  </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box art-image">
                  <div className="figure"><img className="image_art" id="image_art5" src={withPrefix("assets/img/green-little-balls.gif")} alt="art-6" /></div>
                  <div className="aside">
                  </div>
                </a></div>
              </div>
              <div className="btn-out">
                <div className="btn btn-blue" onClick={onMerchifyClick}>Merchify It</div>
              </div>
            </div>
          </div>
        </main>
      <Footer></Footer>
    </>
  )
}