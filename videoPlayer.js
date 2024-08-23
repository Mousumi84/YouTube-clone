
window.addEventListener("load", () => {
    let videoId=localStorage.getItem('videoId');
    console.log("YT",videoId)
  // let videoId= "M2RE3wg_njY";

   if(YT) {
    new YT.Player("video-player",{
        height: "500",     
        width: "1000",
        videoId,
        events: {
            onReady: function(event) {
                event.target.playVideo();
            }
        },
    });
   }

});
