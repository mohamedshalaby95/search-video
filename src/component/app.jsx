import React, { Component } from 'react';
import SearchBar from './searchbar';
import  axiosDataVideo from'../api/youtube';
import Videodetails from'./videoDetalis';
import Videolist from'./videolist'

class App extends Component {
    state = { videos:[],videoselected:null }

    componentDidMount(){
        this.handelTermSearch('building')
    }
    handelTermSearch=   async (term) =>{
       this.setState({term:term})
      const response= await axiosDataVideo.get('/search',
           {params:{
               q:term
           }}
     
      )

     
      this.setState({videos:response.data.items})
      this.setState({videoselected:response.data.items[0]})
    
    }

    handelSelectedVideo=(video) =>{
        
        this.setState({videoselected:video})
    }

    render() { 
        return ( 

            <React.Fragment>
                 <div ><SearchBar  handelInpute={this.handelTermSearch}/> </div>  
                 <div className="container ">
                     <div className="row mt-5">
                     <div className="col-md-6">
                         <Videodetails videoDetails={this.state.videoselected}/>
                     </div>
                         <div className="col-md-4">
                         <Videolist  handelSelectedVideo={this.handelSelectedVideo} videolist={this.state.videos}/>
                         </div>
                         
                     </div>
                 </div>
            
          </React.Fragment>
         );
    }
}
 
export default App;