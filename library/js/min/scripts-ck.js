window.getComputedStyle||(window.getComputedStyle=function(t,e){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),jQuery(document).ready(function(t){var e=t(window).width();769>e&&t("#menu-main-nav").find("a").on("click",function(){t(this).parents(".nav-container").removeClass("open")}),t("#menu-main-nav").find("a").add("#beam-me-up").click(function(e){e.preventDefault(),t("html, body").animate({scrollTop:t(t(this).attr("href")).offset().top-50},800)}),t(window).on("scroll",function(){t("#menu-main-nav").offset().top>100?t("#beam-me-up").addClass("in"):t("#beam-me-up").removeClass("in")}),t("#mobile-nav-toggle").on("click",function(){var e=t(this);return e.parents(".nav-container").toggleClass("open"),!1}),t(".flexslider").flexslider()}),function(t){function e(){o.setAttribute("content",l),c=!0}function n(){o.setAttribute("content",u),c=!1}function a(a){f=a.accelerationIncludingGravity,s=Math.abs(f.x),m=Math.abs(f.y),d=Math.abs(f.z),!t.orientation&&(s>7||(d>6&&8>m||8>d&&m>6)&&s>5)?c&&n():c||e()}if(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1){var i=t.document;if(i.querySelector){var o=i.querySelector("meta[name=viewport]"),r=o&&o.getAttribute("content"),u=r+",maximum-scale=1",l=r+",maximum-scale=10",c=!0,s,m,d,f;o&&(t.addEventListener("orientationchange",e,!1),t.addEventListener("devicemotion",a,!1))}}}(this);