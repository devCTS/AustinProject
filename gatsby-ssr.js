/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from "react"
import Provider from "./provider"

export const wrapRootElement = Provider
export function onRenderBody(
  { setHtmlAttributes, setHeadComponents, setPostBodyComponents },
  pluginOptions
) {
  setHtmlAttributes({ lang: `en` })
  setPostBodyComponents([
    <script
      key="sjjjjdfjdfjfj"
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossOrigin="anonymous"
    ></script>,
    <script key="sdsdfsfdfdsd" src="/assets/js/python.js"></script>,
    <script key="sdsllflldfdfsfdfdsd" src="/assets/js/jquery.min.js"></script>,
    <script key="sjfdfks" src="/assets/js/popper.min.js"></script>,
    <script key="msmddsd" src="/assets/js/bootstrap.min.js"></script>,
    // <script key="dfdffdsd" src="/assets/js/custom.js"></script>,
    // <script key="dfdffdsd" src="/assets/js/mockup.js"></script>,
    // <script key="dfdffdsfewd" src="/assets/js/compare-art.js"></script>,
    <script key="sdjsewdjsj" src="/assets/js/choose-art.js"></script>,
    <script key="sdjsdjsj" src="/assets/js/auth.js"></script>, 
    <script key="sdsdsd" src="/assets/js/python.js"></script>,
    <script key="wwwfewwww" src="/assets/js/progress-bar.js"></script>,
    <script key="vewefs" src="/assets/plugins/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>,
    <script key="wwwwwww" src="/assets/plugins/before-after-image-viewer/dist/beforeafter.jquery-1.0.0.js"></script>,
    <script key="ddddddd" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"> </script>,
    <script key="ffffff" src="assets/plugins/resize-drag-rotate-box-modeling/box-modeling-custom.js"> </script>,
    <script key="vcseees" src="assets/js/owl.carousel.js"> </script>,

    <script key="zzzxc" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"> </script>,
    <script key="asveww" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"> </script>
    ])
}
