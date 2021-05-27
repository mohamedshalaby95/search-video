import React from 'react';
import './videolist.css'
function VideoItem({video,handelSelectedVideo}){
   

    return(
        <React.Fragment>
         
<div onClick={()=>{
  handelSelectedVideo(video)
}} className="card mb-3 videoitem" style={{maxwidth: 540+'px'}}>
  <div className="row no-gutters">
    <div className="col-md-6 ">
      <img className="img-fluid h-100 w-100 " src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
    </div>
    <div className="col-md-6">
      <div className="card-body d-flex">
       
        <p className="card-text  title">{video.snippet.title}</p>
      
      </div>
    </div>
  </div>
</div>
        </React.Fragment>
    )

}

export default VideoItem;