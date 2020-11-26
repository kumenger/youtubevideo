import React from "react";
import { connect } from "react-redux";
import { wait } from "@testing-library/react";
import { fetchDefultNews } from "../action";
class VedioPlayer extends React.Component {
  componentDidMount() {
    this.props.fetchDefultNews("news");
    
  }
  source = () => {
    let str = "";
    /*if(!this.props.currentVideoId){
            str= `https://www.youtube.com/embed/${this.props.videos[0].id.VideoId}`
        }
        else */
    if (!this.props.currentVideoId) {
      //https://www.youtube.com/embed/qmFTwnTTJQ4
      //https://www.youtube.com/embed/xj6mI0HNmbc

      str = "https://www.youtube.com/embed/qmFTwnTTJQ4";
    } else str = `https://www.youtube.com/embed/${this.props.currentVideoId}`;

    return str;
  };

  render() {
    return (
      <div style={{paddingLeft:"10px"}}>
        <div className="row " style={{ backgroundColor: "#c4b9bd" }}>
          <div className="col-md-12  embed-responsive embed-responsive-16by9">
            <iframe
              
              allowFullScreen
              class="embed-responsive-item border"
              src={this.source()}
              style={{ border: "1px solid brown;" }}
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className=" text-center" style={{color:"darkblue",fontSize:"16px"}}>
              {this.props.gettitlereducer.title?this.props.gettitlereducer.title:"Welocme to my simple youtube video Search app! Thanks for Visiting"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentVideoId: state.getVideoIdReducer,
    videos: state.fetcheVideosReducers,
    newsVideo: state.getNewsReducer,
    gettitlereducer:state.gettitlereducer
    
  };
}

export default connect(mapStateToProps, { fetchDefultNews })(VedioPlayer);
