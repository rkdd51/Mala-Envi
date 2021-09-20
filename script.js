function copyImageToCanvas() {
   var image = document.querySelector("img");
   var canvas = document.querySelector("canvas");
   
   var ctx = canvas.getContext("2d");
   
   //3 arg verison
//    ctx.drawImage( image, 0, 0, );
   
   
    //remove this line to see other versions
   
   
   ctx.drawImage( image, 0, 0, 50, 50 );
   
   
   ctx.drawImage( 
      image, 
      0, 0, //Where to start the grab (x,y of source image)
      100, 100, //How much to grab (width, height)
      50, 50, //Where to plop the grab on the canvas (x,y of canvas)
      1000, 500 //How large to plop the grab (width, height of incoming stamp)
   );
   
   
   
}


//
 setTimeout(() => {
    copyImageToCanvas();
 }, 300)
