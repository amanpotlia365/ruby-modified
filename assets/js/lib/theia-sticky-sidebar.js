!function(i){i.fn.theiaStickySidebar=function(t){function o(t,o){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,o){t.initialized=!0,i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),o.each(function(){var o={};if(o.sidebar=i(this),o.options=t||{},o.container=i(o.options.containerSelector),0==o.container.length&&(o.container=o.sidebar.parent()),o.sidebar.parents().css("-webkit-transform","none"),o.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),o.stickySidebar=o.sidebar.find(".theiaStickySidebar"),0==o.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;o.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),o.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(o.sidebar.children()),o.sidebar.append(o.stickySidebar)}o.marginBottom=parseInt(o.sidebar.css("margin-bottom")),o.paddingTop=parseInt(o.sidebar.css("padding-top")),o.paddingBottom=parseInt(o.sidebar.css("padding-bottom"));var n=o.stickySidebar.offset().top,d=o.stickySidebar.outerHeight();function r(){o.fixedScrollTop=0,o.sidebar.css({"min-height":"1px"}),o.stickySidebar.css({position:"static",width:"",transform:"none"})}o.stickySidebar.css("padding-top",1),o.stickySidebar.css("padding-bottom",1),n-=o.stickySidebar.offset().top,d=o.stickySidebar.outerHeight()-d-n,0==n?(o.stickySidebar.css("padding-top",0),o.stickySidebarPaddingTop=0):o.stickySidebarPaddingTop=1,0==d?(o.stickySidebar.css("padding-bottom",0),o.stickySidebarPaddingBottom=0):o.stickySidebarPaddingBottom=1,o.previousScrollTop=null,o.fixedScrollTop=0,r(),o.onScroll=function(o){if(o.stickySidebar.is(":visible"))if(i("body").width()<o.options.minWidth)r();else{if(o.options.disableOnResponsiveLayouts){var a=o.sidebar.outerWidth("none"==o.sidebar.css("float"));if(a+50>o.container.width())return void r()}var n,d,s=i(document).scrollTop(),c="static";if(s>=o.sidebar.offset().top+(o.paddingTop-o.options.additionalMarginTop)){var p,b=o.paddingTop+t.additionalMarginTop,l=o.paddingBottom+o.marginBottom+t.additionalMarginBottom,f=o.sidebar.offset().top,h=o.sidebar.offset().top+(n=o.container,d=n.height(),n.children().each(function(){d=Math.max(d,i(this).height())}),d),g=0+t.additionalMarginTop,S=o.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+o.stickySidebar.outerHeight():i(window).height()-o.marginBottom-o.paddingBottom-t.additionalMarginBottom;var u=f-s+o.paddingTop,y=h-s-o.paddingBottom-o.marginBottom,m=o.stickySidebar.offset().top-s,k=o.previousScrollTop-s;"fixed"==o.stickySidebar.css("position")&&"modern"==o.options.sidebarBehavior&&(m+=k),"stick-to-top"==o.options.sidebarBehavior&&(m=t.additionalMarginTop),"stick-to-bottom"==o.options.sidebarBehavior&&(m=p-o.stickySidebar.outerHeight()),m=k>0?Math.min(m,g):Math.max(m,p-o.stickySidebar.outerHeight()),m=Math.max(m,u),m=Math.min(m,y-o.stickySidebar.outerHeight());var v=o.container.height()==o.stickySidebar.outerHeight();c=(v||m!=g)&&(v||m!=p-o.stickySidebar.outerHeight())?s+m-o.sidebar.offset().top-o.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();o.stickySidebar.css({position:"fixed",width:e(o.stickySidebar)+"px",transform:"translateY("+m+"px)",left:o.sidebar.offset().left+parseInt(o.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var B={};"absolute"!=o.stickySidebar.css("position")&&(B.position="absolute",B.transform="translateY("+(s+m-o.sidebar.offset().top-o.stickySidebarPaddingTop-o.stickySidebarPaddingBottom)+"px)",B.top="0px"),B.width=e(o.stickySidebar)+"px",B.left="",o.stickySidebar.css(B)}else"static"==c&&r();"static"!=c&&1==o.options.updateSidebarHeight&&o.sidebar.css({"min-height":o.stickySidebar.outerHeight()+o.stickySidebar.offset().top-o.sidebar.offset().top+o.paddingBottom}),o.previousScrollTop=s}},o.onScroll(o),i(document).scroll(function(i){return function(){i.onScroll(i)}}(o)),i(window).resize(function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(o))})}(t,o),!0)}function e(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,e){o(t,e)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).scroll(function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).resize(function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}(t,this)}}(jQuery);