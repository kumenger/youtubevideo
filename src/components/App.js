import React from 'react'
import SerachBar from '../components/SerachBar'
import VideoList from '../components/VideoList'
import VedioPlayer from '../components/VedioPlay'
import {connect} from 'react-redux'
import {fetchDefultNews} from '../action'

class App extends React.Component{
    state={vidid:""}
    componentDidMount(){
       this.props.fetchDefultNews("news")
    }
   
     getDefultNews=() =>{
         if(!this.props.newsVideo){return <div className='text-center'>loading...</div>}
         return(
             
         <div>
             {this.props.newsVideo.map(x=>
                      <VideoList src={x.snippet.thumbnails.medium.url} title={x.snippet.description} videioid={x.id.videoId} chanalid={x.snippet.channelTitle} publishedat={x.snippet.publishedAt} />
                        
                        )}
         </div>

         )}
         getSearchResults=()=>{
             return(
                 <div className='row'>
                     <div className='col-md-12 text-center' ><h4 className=' text-info'>{this.props.videos.length===0?"":"Video Search Result"}</h4></div>  
                    {this.props.videos.map(x=>
                      <VideoList src={x.snippet.thumbnails.medium.url} title={x.snippet.description} videioid={x.id.videoId} chanalid={x.snippet.channelTitle} publishedat={x.snippet.publishedAt} />
                        
                        )}
                    
                 </div>
             )
         }
        
    
     render(){
       
        return(
            <div className='container-fluid' style={{paddingTop:"50px"}}  >
                <div className='row'>
                    <div className='col-md-12 ' >
                    <SerachBar/>
                    </div>
        

                </div>
                <br/>
                <div className='row'  >
                    <div className='col-md-8'  >
                    <VedioPlayer /> 
                    </div> 
                    <div  className=' col-md-4 bg-white'  style={{height:"80vh",overflow:"scroll",paddingLeft:"50px"}}  >
                    {this.props.videos.length===0?this.getDefultNews():this.getSearchResults()}
                    </div>

                </div>
               
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{videos:state.fetcheVideosReducers,newsVideo:state.getNewsReducer}
}
export default connect(mapStateToProps,{fetchDefultNews}) (App)