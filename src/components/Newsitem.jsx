import React, { Component } from 'react'

export class Newsitem extends Component {



  render() {
   let {title, description, newsUrl,imageUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
  <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CVWZLTCAYU3FF6CUSOJDF367AQ.jpg&w=1440":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span class="badge text-bg-secondary">{source}</span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
