import React from 'react'
import {connect} from 'react-redux'
import {fetchVideos} from '../action'
class SerachBar extends React.Component{
  state={inputedSerch:""}
 
  btnclick=()=>{
   this.props.fetchVideos(this.state.inputedSerch)
  }
  render()
    
  {
   
    return(
      <div className='row '>
        <div className='col-md-12'>
        <div class="input-group ">
        <div className='input-group-prepend'>
        <lable class="input-group-text" id="basic-addon1" style={{color:"red"}}><i class="fab fa-youtube fa-2x " style={{color:"red"}}></i></lable>
          </div> 
          
            
 <input  className='form-control' type="text" value={this.state.inputedSerch} onChange={(e)=>this.setState({inputedSerch:e.target.value})}/>
<div className='input-group-append rounded-left rounded-right ' style={{padding:"10px",border:"1px solid darkred"}}>
 <button className='btn btn-danger' onClick={this.btnclick}> Youtube Search</button>
          </div>
              
        

        </div>
        
      </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  
  return{videos:state.fetcheVideosReducers}
}
export default connect(mapStateToProps,{fetchVideos}) (SerachBar)