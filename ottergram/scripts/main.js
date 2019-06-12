var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var newImageArray = new Array("http://img0.imgtn.bdimg.com/it/u=3687815651,1256324375&fm=26&gp=0.jpg",
                              "http://img5.imgtn.bdimg.com/it/u=2136334401,2710011534&fm=26&gp=0.jpg",
                              "http://img2.imgtn.bdimg.com/it/u=1322788842,2026175996&fm=26&gp=0.jpg",
                              "http://img5.imgtn.bdimg.com/it/u=2265350464,691165327&fm=26&gp=0.jpg",
                              "http://img3.imgtn.bdimg.com/it/u=3761845596,1539981607&fm=26&gp=0.jpg");
//把当前被点击的水獭对象放到主框中。
function setDetails(imageUrl,titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);
  detailTitle.textContent = titleText;
}

//获取图像
function imageFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

//获取标题
function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

//调用了上面三个函数，其中包括获取图片和获取标题的方法
function setDetailFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}

//为每个水獭对象添加点击事件
function addThumbnailClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click', function(event){
    event.preventDefault();
    setDetailFromThumb(thumb);
  });
}

//获取所有水獭的元素对象，存到一个数组
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initialEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i]);
  }
}
initialEvents();
//随机修改大图，使得小图大图不匹配
/*
function initialEventsSecond(){
  var thumbnails = getThumbnailsArray();
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(event){
      event.preventDefault();
      var j = Math.floor(Math.random()*5);
      setDetails(newImageArray[j],'Hijack!');
    });
  }
}
initialEventsSecond();
*/


//把所有的链接都失效
/*
var DATA_BLANK='[target="_blank"]';
function setBaidu(){
  var all = document.querySelectorAll(DATA_BLANK);
  var allBeArray = [].slice.call(all);
  for (var i = 0; i < allBeArray.length; i++) {
    allBeArray[i].addEventListener('click', function(event){
      event.preventDefault();
    });
  }
}
*/
