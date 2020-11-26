import React from "react";
import { connect } from "react-redux";
import { getVideoId ,gettitle} from "../action";
import { fetchDefultNews } from "../action";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class VideoList extends React.Component {
  state = { defaultNews: {} };
  componentDidMount() {
    this.props.fetchDefultNews("news");
   
  }

  clicked = () => {
   // this.props.gettitle(this.props.title)
    this.props.getVideoId(this.props.videioid);
    this.props.gettitle(this.props.title)

  };
  gettime = (time) => {
    let a = new Date(time);
    return a.toString().replace("(Central Daylight Time)", "");
  };
  render() {
    console.log(this.props.newsVideo.length);
    return (
     
        <div  onClick={()=>this.clicked()}>
    

          <div className=" row btn btn-outline-info bg-dark" >
            <div
              className="col-md-12"
             
            >
              <div className="row">
                <div className="col-md-4 text-left">
                  <i
                    style={{ color: "violet" }}
                    class="fas fa-user-circle fa-2x"
                  ></i>
                  <p className="text-white">{this.props.chanalid}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <img
                    className="img-circle img-responsive"
                    src={this.props.src}
                  />
                  <br></br>
                  <p className="text-white text-truncate">
                    {this.gettime(this.props.publishedat)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {" "}
            <div className="col-md-12" >
              <a className="text-info text-left" href='' onClick={()=>this.clicked()} >{this.props.title}</a>
            </div>
          </div>
          <br></br>
        </div>
      
     
    );
  }
}
function mapStateToProps(state) {
  return {
    videos: state.fetcheVideosReducers,
    currentVideoId: state.getVideoIdReducer,
    newsVideo: state.getNewsReducer,
    gettitlereducer:state.gettitlereducer
  };
}

export default connect(mapStateToProps, { getVideoId, fetchDefultNews ,gettitle})(
  VideoList
);
