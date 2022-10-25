// import React from "react"
// import Header from "../components/header";
// import Footer1 from "../components/footer-1";
// import { isLoggedIn } from "../services/auth";
// import { useEffect } from 'react';
// import { navigate } from "gatsby";
// import Helmet from "react-helmet";
// import $ from "jquery";
// import { withPrefix } from "gatsby";

// export default function Layout() {

//   useEffect(() => {
//     if (!isLoggedIn()) { navigate('/signin'); }
//     renderFrontMockup();
//     initScaleSlider();
//     $('.menu-bar').click(function() {
//       $('.menu-bar').removeClass('active');
//       $('.nav-bar').slideUp(10);
//       $('.overlay').removeClass('show');
//       $('body').removeClass('hidden-body');
//       if($(this).next().is(':hidden') == true) {
//         $(this).addClass('active');
//         $(this).next().slideDown(10);
//         $('.overlay').addClass('show');
//         $('body').addClass('hidden-body');
//       }
//     });
//   }, []);
//   var generatorMockup = $('.generator-mockup');
//   var mockupParams;

//   const renderFrontMockup = () => {
//     var mockupContent = `
//       <div class="backpack-mockup front">
//         <img src="assets/mockup/backpack/front.png" alt="" />
//         <span class="safe-print-area-top">Safe Print Area</span>
//         <span class="safe-print-area-bottom">Safe Print Area</span>
//         <span class="front-top">Front top</span>
//         <span class="fold-line">Fold line</span>
//         <span class="front-pocket">Front Pocket</span>
//         <span class="placement-on-product">Placement on product</span>
//       </div>
//     `;
//     $('.backpack-mockup').remove();
//     generatorMockup.append(mockupContent);
//   }
//   // const saveMockupDesign = () => {
//   //   var orgPart = $('.mockup-tab.active');
//   //   // save mockup
//   //   if(!$('.mockup-handler').length) {
//   //     return;
//   //   }
//   //   var width = $('.mockup-handler')[0].style.width;
//   //   var height = $('.mockup-handler')[0].style.height;
//   //   var left = $('.mockup-handler')[0].style.left;
//   //   var top = $('.mockup-handler')[0].style.top;
//   //   var transform = $('.mockup-handler')[0].style.transform;
//   //   var param = {
//   //     ...mockupParams[orgPart.data('id')],
//   //     width: width,
//   //     height: height,
//   //     left: left,
//   //     top: top,
//   //     transform: transform
//   //   };
//   //   mockupParams = {...mockupParams, [orgPart.data('id')]: param};
//   // }

//   // const initScaleSlider = () => {
//   //   if($('.mockup-img')[0]) {
//   //     $('.designer-toolbar').show();
//   //   } else {
//   //     $('.designer-toolbar').hide();
//   //   }
//   // }

//   // const createIt = (e) => {
//   //   e.preventDefault();
//   //   console.log("I have been pressed!!!");
//   //   $('.new_gif').css('display', 'flex');
//   //   let imgUrl = localStorage.getItem('image_resize')
//   //   this.getBase64ImageFromUrl(imgUrl, function () {
//   //     var settings = {
//   //       "url": "http://54.173.169.111/api/printful/create_task",
//   //       "method": "POST",
//   //       "timeout": 0,
//   //       "headers": {
//   //         "Content-Type": "application/json"
//   //       },
//   //       "data": JSON.stringify({
//   //         "image": imgUrl,
//   //         "id": localStorage.getItem('job_id')
  
//   //       }),
//   //     };
//   //     let data_key = ''
//   //     $.ajax(settings).done(function (response) {
  
//   //       if (response && response.status) {
//   //         const { result } = response.que
//   //         console.log(result.task_key)
  
//   //         data_key = result.task_key
//   //         setTimeout(
//   //           function () {
//   //             redirectToBagPack(data_key)
//   //           }, 10000);
  
//   //       } else {
//   //         return data_key
//   //       }
//   //     });
//   //   });
//   // }

//   // const redirectToBagPack = (str) => {

//   //   var settings = {
//   //     "url": "http://54.173.169.111/api/printful/status?task_key=" + str + "&id=" + localStorage.getItem('job_id'),
//   //     "method": "GET",
//   //     "timeout": 0,
//   //     "crossDomain": true,
//   //     // "headers": {
//   //     //   "Authorization": "Basic aG96ZnJ1eWQtMWRrZC1jZjMxOnhxMjktcW41bnNpdmJhcXp3",
//   //     //   'Access-Control-Allow-Origin': "https://api.printful.com"
//   //     // },
//   //   };
  
//   //   $.ajax(settings).done(function (response) {
//   //     // const obj = JSON.parse(response)
//   //     // alert(response)
//   //     if (response && response.code == 200) {
//   //       console.log(response.result)
  
//   //       if (response.result && response.result.status == 'completed') {
//   //         const result = response.result.mockups
//   //         const images = []
//   //         $.map(result, function (val, i) {
//   //           // console.log(val.placement)
//   //           images.push(val.mockup_url)
//   //         });
//   //         localStorage.setItem('back_pack', JSON.stringify(images))
//   //         localStorage.removeItem("job_id");
//   //         localStorage.removeItem("mergify");
//   //         localStorage.removeItem("image_resize");
//   //         navigate("/all-over-print-backpack");
//   //         // window.location.href = 'all-over-print-backpack.html'
//   //       } else {
//   //         alert("somthing went wrong!")
//   //         localStorage.clear();
//   //         window.location.href = 'staging.html'
//   //       }
//   //     }
//   //   });
//   // }


//   // const getBase64ImageFromUrl = (imgUrl, callback)  {

//   //   var img = new Image();
  
//   //   // onload fires when the image is fully loadded, and has width and height
  
//   //   img.onload = function () {
  
//   //     var canvas = document.createElement("canvas");
//   //     canvas.width = img.width;
//   //     canvas.height = img.height;
//   //     var ctx = canvas.getContext("2d");
//   //     ctx.drawImage(img, 0, 0);
//   //     var dataURL = canvas.toDataURL("image/png"),
//   //       dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  
//   //     callback(dataURL); // the base64 string
  
//   //   };
//   //   console.log(img)
//   //   // set attributes and src 
//   //   img.setAttribute('crossOrigin', 'anonymous'); //
//   //   img.src = imgUrl;
  
//   // }

//   return (
//     <>
//       <div className="container-main" id="page">
//         <Helmet>
//           <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css" />
//           <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/flick/jquery-ui.css" />

//           <script src={withPrefix("assets/js/jquery.min.js")} type="text/javascript" />
//           <script src={withPrefix("assets/js/popper.min.js")} type="text/javascript" />
//           <script src={withPrefix("assets/js/bootstrap.min.js")} type="text/javascript" />
//           <script src={withPrefix("assets/js/custom.js")} type="text/javascript" />
//           <script src={withPrefix("assets/js/python.js")} type="text/javascript" />
//           <script src={withPrefix("assets/js/mockup.js")} type="text/javascript" />

//           <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" />
//           <script src={withPrefix("assets/plugins/resize-drag-rotate-box-modeling/box-modeling-custom.js")} type="text/javascript" />
//         </Helmet>
//         <Header></Header>
//         <main className="content-main">
//           <div className="feature-list">
//             <div className="container">
//               <div className="heading-top">
//                 <h2>Design Mockup</h2>
//                 <div className="see-more"><a href="#">Add product</a></div>
//               </div>
//               {/* Page */}
//               <div className="design-mockup">
//                 <ul className="mockup-tabs">
//                   <li className="mockup-tab active" data-id="front">Front &amp; Pocket</li>
//                   <li className="mockup-tab" data-id="top">Top panel</li>
//                   <li className="mockup-tab" data-id="bottom">Bottom panel</li>
//                   <li className="mockup-tab" data-id="inside">Inside pocket</li>
//                 </ul>
//                 <div className="designer-toolbar" />
//                 <div className="main-mockup-area">
//                   <div className="generator-mockup">
//                     <div className="upload-design">
//                       <img className="btn-upload" src="assets/mockup/tap-your-design-here.svg" alt="" />
//                       <input type="file" className="upload-file" />
//                     </div>
//                     <div className="mockup-design">
//                       {/* <img class="mockup-img" src="assets/mockup/backpack-img-b.jpg" alt="" /> */}
//                     </div>
//                     <div className="backpack-mockup inside">
//                       <img src="assets/mockup/backpack/inside.png" alt="" />
//                       <span className="safe-print-area-bottom">Safe Print Area</span>
//                       <span className="placement-on-product">Placement on product</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="designer-toolbar">
//                   <span className="scale-button minus">-</span>
//                   <input type="range" className="scale-slider" min="0.1" max={2} defaultValue={1} step="0.01" />
//                   <span className="scale-button plus">+</span>
//                 </div>
//               </div>
//               {/* ./Page */}
//               {/* <div className="btn-out"><button onClick={createIt} className="btn btn-blue">Setup Store</button></div> */}
//             </div>
//           </div>
//         </main>
//         <Footer1></Footer1>
//       </div>
//     </>
//   )
// }