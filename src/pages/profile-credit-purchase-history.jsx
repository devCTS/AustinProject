import React from "react"
import { withPrefix } from "gatsby"
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import { isLoggedIn } from "../services/auth";
import { useEffect } from 'react';
import { navigate } from "gatsby";
import { Helmet } from "react-helmet"
export default function Layout() {

   useEffect(() => {
      if (!isLoggedIn()) { navigate('/signin'); }
   }, []);
   return (
      <>
         <Helmet>
            <script src={withPrefix("assets/js/select-merch.js")} type="text/javascript" />
         </Helmet>
         <div className="container-main" id="page">
            <Header></Header>
            <main className="content-main">
               <div className="profile-tabs">
                  <div className="container">
                     <h1>Profile</h1>
                     <div className="profile-tab-links">
                        <ul className="nav">
                           <li><a className="active" href="#credits" data-bs-toggle="tab">Credits</a></li>
                           <li><a href="#merch" data-bs-toggle="tab">Merch</a></li>
                        </ul>
                     </div>
                     <div className="tab-content">
                        <div className="tab-pane active" id="credits">
                           <div className="profile-info">
                              <div className="row">
                                 <div className="col-lg-4 col-md-5">
                                    <div className="profile-box">
                                       <div className="icon-user"><img src="assets/img/icon-user.svg" alt="icon-user" /></div>
                                       <div className="aside">
                                          <div className="name">Firstname Lastname</div>
                                          <p><a href="mailto:firsnamelastname@gmail.com">firsnamelastname@gmail.com</a><br /> <em className="fa fa-map-marker-alt" /> San Francisco, California <br /> Joined: 2/20/2022</p>
                                       </div>
                                       <div className="icon-edit"><a href="#"><img src="assets/img/icon-edit.svg" alt="icon-edit" /></a></div>
                                    </div>
                                 </div>
                                 <div className="col-lg-8 col-md-7">
                                    <div className="purchase-history">
                                       <div className="title-bar">
                                          <div className="credits-heading">
                                             <h2>Credits&nbsp;&nbsp;:&nbsp;&nbsp;30</h2>
                                             <div className="btn-out"><a href="#" className="btn btn-blue">Buy credits</a></div>
                                          </div>
                                          <h3>(10) Purchase History</h3>
                                       </div>
                                       <div className="product-table">
                                          <table>
                                             <thead>
                                                <tr>
                                                   <th>Credits</th>
                                                   <th>Order Date</th>
                                                   <th>Price</th>
                                                   <th>Status</th>
                                                </tr>
                                             </thead>
                                             <tbody>
                                                <tr>
                                                   <td data-label="Credits">
                                                      <h4>30</h4>
                                                   </td>
                                                   <td data-label="Order Date">1/1/2022</td>
                                                   <td data-label="Price">$0 (Intro deal)</td>
                                                   <td data-label="Status">Shipped</td>
                                                </tr>
                                                <tr>
                                                   <td data-label="Credits">
                                                      <h4>30</h4>
                                                   </td>
                                                   <td data-label="Order Date">1/18/2022</td>
                                                   <td data-label="Price">$1.00</td>
                                                   <td data-label="Status">Shipped</td>
                                                </tr>
                                                <tr>
                                                   <td data-label="Credits">
                                                      <h4>30</h4>
                                                   </td>
                                                   <td data-label="Order Date">2/30/2022</td>
                                                   <td data-label="Price">$5.00</td>
                                                   <td data-label="Status">Shipped</td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane" id="merch">
                           <div className="profile-info">
                              <div className="row">
                                 <div className="col-lg-4 col-md-5">
                                    <div className="profile-box">
                                       <div className="icon-user"><img src="assets/img/icon-user.svg" alt="icon-user" /></div>
                                       <div className="aside">
                                          <div className="name">Firstname Lastname</div>
                                          <p><a href="mailto:firsnamelastname@gmail.com">firsnamelastname@gmail.com</a><br /> <em className="fa fa-map-marker-alt" /> San Francisco, California <br /> Joined: 2/20/2022</p>
                                       </div>
                                       <div className="icon-edit"><a href="#"><img src="assets/img/icon-edit.svg" alt="icon-edit" /></a></div>
                                    </div>
                                 </div>
                                 <div className="col-lg-8 col-md-7">
                                    <div className="purchase-history">
                                       <div className="title-bar">
                                          <h3>(10) Purchase History</h3>
                                       </div>
                                       <div className="product-table">
                                          <table>
                                             <thead>
                                                <tr>
                                                   <th>Items</th>
                                                   <th>Order Date</th>
                                                   <th>Price</th>
                                                   <th>Status</th>
                                                </tr>
                                             </thead>
                                             <tbody>
                                                <tr>
                                                   <td data-label="Items">
                                                      <h4>Title of Object</h4>
                                                      <p>Print Description</p>
                                                   </td>
                                                   <td data-label="Order Date">1/1/2022</td>
                                                   <td data-label="Price">$0 (Intro deal)</td>
                                                   <td data-label="Status">Shipped</td>
                                                </tr>
                                                <tr>
                                                   <td data-label="Items">
                                                      <h4>Title of Object</h4>
                                                      <p>Print Description</p>
                                                   </td>
                                                   <td data-label="Order Date">1/18/2022</td>
                                                   <td data-label="Price">$1.00</td>
                                                   <td data-label="Status">Shipped</td>
                                                </tr>
                                                <tr>
                                                   <td data-label="Items">
                                                      <h4>Title of Object</h4>
                                                      <p>Print Description</p>
                                                   </td>
                                                   <td data-label="Order Date">2/30/2022</td>
                                                   <td data-label="Price">$5.00</td>
                                                   <td data-label="Status">Shipped</td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
            <Footer1></Footer1>
         </div>
      </>
   )
}