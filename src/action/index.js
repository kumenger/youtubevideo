
import Youtube from '../Api/Youtube'
const KEY="AIzaSyBDTFoFTjVl88QETHFTRmUx1ftx_WING-Q"
export const fetchVideos=(videoToBeSerached)=>async dispatch=>{
        const response=await Youtube.get("/search",{
         params:{
              q:videoToBeSerached,
              part: "snippet",
              maxResults: 10,
              key:KEY
              
               
             }

        })
        dispatch({type:"FETCH_VIDEOS",payload:response.data.items})
    }
  export const getVideoId=(videoid)=>{
      return {type:"GET_VIDEOID",payload:videoid}
  }
  export const fetchDefultNews=(videoToBeSerached)=>async dispatch=>{
    const response=await Youtube.get("/search",{
     params:{
          q:videoToBeSerached,
          part: "snippet",
          maxResults: 10,
          key:KEY
          
           
         }

    })
    dispatch({type:"FETCH_NEWS",payload:response.data.items})
}

export const gettitle=(title)=>{
return {type:"GET_TITLE",payload:title}
}


