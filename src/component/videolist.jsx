import React from 'react';
import VideoItem from './videoitem'


function VideoList({videolist ,handelSelectedVideo}){
  
   
    
   const renderlist= videolist.map((video) =>{
       return(  
            <VideoItem key={video.id.videoId} handelSelectedVideo={handelSelectedVideo} video={video}/>)
        
        })

if(videolist &&videolist.length>0){


    return(
        <React.Fragment >
            <div className="mt-3">{renderlist}</div>
            
        </React.Fragment>
     )
}
return(<div className="text-center font-bold mt-5">NO data please search</div>)

    
    

   
}
export default VideoList