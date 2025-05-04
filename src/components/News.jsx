import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  
  static defaultProps={
    country:'us',
    pageSize:6,
    category:'general'
  }

  static propTypes={

  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
  }
  
  constructor(){
    super();
    
      this.state={
     articles : [],
     loading:false,
     page:1
    }
    }

    async updateNews(pageNo){
     const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ec9bb2e194a41879708e2aa3352784b
      &page=${this.state.page}&pageSize=${this.props.pageSize}`;
              this.setState({loading:true});
              let data=await fetch(url);
              let parsedData= await data.json();
              console.log(parsedData);
              this.setState({articles: parsedData.articles, 
                totalResults:parsedData.totalResults,
              loading:false
              })
    }
      async componentDidMount(){

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ec9bb2e194a41879708e2aa3352784b
&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url); 
        let parsedData= await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, 
          totalResults:parsedData.totalResults,
        loading:false
        })
      }

     handleNextClick = async ()=>{
//         console.log("next clicked")
//         if (!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ec9bb2e194a41879708e2aa3352784b
// &page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data=await fetch(url);
//         let parsedData= await data.json();
//         // console.log(parsedData);
//         // this.setState({articles: parsedData.articles})

//         this.setState({
//           page:this.state.page+1,
//           articles: parsedData.articles,
//           loading:false
//         })
//       }
      this.setState({page:this.state.page+1})
      this.updateNews();
    }      

    handlePrevClick = async ()=>{
//         console.log("previous clicked")
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ec9bb2e194a41879708e2aa3352784b
// &page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data=await fetch(url);
//         let parsedData= await data.json();
//         console.log(parsedData);

//         this.setState({
//           page:this.state.page-1,
//           articles: parsedData.articles,
//           loading:false
//         })
          this.setState({page:this.state.page-1})
          this.updateNews();
    }  
    
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"35px 0px",fontWeight:"bold"}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
              <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
               return  <div className="col-md-4" key={element.url}>
                 <Newsitem  title={element.title?element.title:""} description={element.description?element.description.slice(0,91):""} imageUrl={element.urlToImage}
                   newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
          
              })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button'  className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
