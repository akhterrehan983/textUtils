import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navitems extends Component {
  // static propTypes = {};
 


  render() {
    let {title,desc,imageUrl,url,source,author,publishedAt} = this.props;
    return (
      <>
     
      
      <div className="card" style={{ height: "" }}>
 
  <span className="position-absolute   translate-middle badge rounded-pill bg-danger" style={{left: "90%"}}>
    {source}
 
  </span>

      <img
        src={imageUrl}
        className="card-img-top" style={{height: "200px"}}
        alt="..."
      />
      
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {desc}
        </p>
        <p className="container"><b>On</b> <small style={{color: 'red'}}>{publishedAt}</small> <b>By</b> <small style={{color: 'green'}}>{author?author:"Unknown"}</small></p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  
    </>
    
    );
  }
}

export default Navitems;
