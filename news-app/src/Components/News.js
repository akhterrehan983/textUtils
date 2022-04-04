import React, { Component } from "react";
import PropTypes from "prop-types";
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroller';

// import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    pageSize: 8
  }
    static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
    }

    
  constructor(){  
  super();  
  this.state = {
    articles : [],
    loading : false,
    page :1,
    totalResults:0,
    hasMore:false
  }
  console.log("Newsitems constructor")
  // console.log(this.state.articles)

}
  async updateNews(pageNo){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed4271204d244b948393355e0162403f&page=${pageNo}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    console.log(this.state.articles)
  }
  async componentDidMount(){
    console.log("componentDidMount");
    this.updateNews(1);
    // console.log(this.state.page);

  }
  handlePrevClick = async() => {
    let page = this.state.page-1
    this.setState({page:page});
    // console.log(page);
    if(page>=3){
      this.setState({hasMore:false});
    }
    else{
    this.updateNews(page);
    }
  }

  handleNextClick = async() => {
    let page = this.state.page+1
    this.setState({page:page});
    // console.log(page);
    this.updateNews(page);

  }

  
  render() { 
  
   
    return (
      
      <> {console.log("render")}
      <div className="container">
        <div className="row my-4">
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.handleNextClick()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        ></InfiniteScroll>
        {!this.state.loading && this.state.articles.map((element)=>{
        // console.log(element);
        {if(element.urlToImage!==null){
         return <div className="col-md-4 my-4" key={element.urlToImage}>
              <Newsitems title= {element.title.length<35?element.title:element.title.substr(0,35)+"..."} desc={element.description.length<45?element.description:element.description.substr(0,45)+"..."} imageUrl={element.urlToImage} url={element.url} source={element.source.name} author={element.author} publishedAt={element.publishedAt}/>
          </div>
        }}
        })}

        </div>
      </div>
      <div className="container">
      <div className="d-flex justify-content-between my-3">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr;Previous</button>
        <button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
      </div>
      </div>
      </>
    );
  }
}

export default News;
