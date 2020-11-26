import React from 'react'
import {connect} from 'react-redux';

class VideoList2 extends React.Component{
 
    render(){
        return(
            
                this.props.videos.map(x=><div className='bg-dark border row' style={{padding:"10px",width:"70%"}}  >
                     <button className='btn btn-outline-secondary' onClick={this.props.getid(x.id.videoId)} >
                      <div className='col-md-12' >
                         <img  className='img-thumbnail form-control' src={x.snippet.thumbnails.medium.url}/>
                            <p className='text-center text-info'>{x.snippet.channelTitle}</p>
                            
                          </div>
                    </button>
             </div>)
             
              )
    }y
    
}
function mapStateToProps(state){
     return{videos:state.fetcheVideosReducers}
  }

export default connect(mapStateToProps) (VideoList2)