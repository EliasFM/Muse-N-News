import React, { Component } from 'react';
import { Header } from '../components/headers/Headers';
import { NewspaperObject } from '../models/NewspaperObject';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

class NewsView extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], title: '', isLoading: false };
  }

  componentDidMount() {
    let media = this.props.match.params.media;
    this.setState({ title: this.props.match.params.title });
    let tempTitle = this.props.match.params.title; //
    let url = `https://newsapi.org/v2/everything?q=+${tempTitle}+${media}&apiKey=63a831797dfe4bb1a78236b43eac06de`;
    this.setState({ isLoading: true });
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({ articles: data.articles });
    }).catch((err) => {
      console.log(`Error: ${err}`);
    }).then(() => {
      this.setState({ isLoading: false });
    });
  }
  render() {
    return (
      <div>
        <Header title='News' subtitle={"Read articles related to " + this.state.title} />
        <div id='main-content'>
          <div id='content'>
            <NewsList objs={this.state.articles} />
          </div>
        </div>
      </div>
    )
  }
}

class NewsList extends Component {
  render() {
    let objs = this.props.objs.map((obj) => {
      let entity = NewspaperObject(obj);
      return <NewsCard key={entity.id} obj={entity} />
    });
    return (
      <div className='row'>
        {objs}
      </div>
    )
  }
}

class NewsCard extends Component {
  render() {
    let obj = this.props.obj;
    return (
      <Card className='mb-4'>
        <CardBody>
          <div className='col-sm-auto'>
            <img className='pb-3 img-fluid' src={obj.urlToImage} alt={obj.title} />
          </div>
          <div className='col-sm'>
            <CardTitle className='card-title'>
              <p> {obj.title} </p>
            </CardTitle>
            <CardText>Author: {obj.author}</CardText>
            <CardText>Published On: {obj.datePublished} </CardText>
            <CardText>Description: {obj.descript}</CardText>
            <CardText><a href={obj.url}>Link to read</a></CardText>
          </div>
        </CardBody>
      </Card>
    )
  }
}


export { NewsView };