import React, { Component } from "react";

const Newsitem =(props)=> {
     

    let { title, description,imageUrl ,url,author,publishedAt} = props;
    return (
      <div className="card" >
        <img src={!imageUrl?"https://cdn.mos.cms.futurecdn.net/LJEEamkcj2uMFs27XyxPU7-1200-80.jpeg":imageUrl} className="card-img-top" alt="text" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text"><small className="text-muted">by {!author?"unknown":author} at {new Date (publishedAt).toGMTString()} </small></p>
          <a href={url} target="blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  
}

export default Newsitem;
