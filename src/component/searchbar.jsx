import React, { Component } from 'react';
class SearchBar  extends Component {
    state = { term:""}
    handelsubmit=(e) =>{
        e.preventDefault()
        this.props.handelInpute(this.state.term)
    }

    handelInput=(e) =>{
       
        this.setState({term:e.target.value})
       
        
    }
    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={this.handelsubmit}>
              < div className="form-group ">
                

<input placeholder="search video  "  type="text"  className=" mt-5 text-black text-center form-control w-50 m-auto mt-2" id="exampleInpute"value={this.state.term} id="text" aria-describedby="emailHelp" 
onChange={this.handelInput} />
</div>
</form>
            </React.Fragment>
         );
    }
}
 
export default SearchBar ;