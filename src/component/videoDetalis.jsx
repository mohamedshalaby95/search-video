import React from 'react';
function VideoDetalis({videoDetails}){
     if(!videoDetails){
         return(
             <React.Fragment>
                 <p>loading...</p>
             </React.Fragment>
         )
     }
 
    const srcVideo=`https://www.youtube.com/embed/${videoDetails.id.videoId}`
  return(
      <React.Fragment>
          <div className="card w-100 h-100" style={{width: 25+'rem'}}>
  <iframe title={videoDetails.snippet.description} className="h-75" src={srcVideo} className="card-img-top"  embedded='true'height='80%' ></iframe>
  <div className="card-body">
    <p className="card-text">{videoDetails.snippet.description}</p>
  </div>
</div>
      </React.Fragment>
  )
}
export default VideoDetalis;