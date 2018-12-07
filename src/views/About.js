import React, {Component} from 'react';
import { Header } from '../components/headers/Headers';


class About extends Component {
  render() {
    return(
      <div>
          <Header title={this.props.title} subtitle={this.props.subtitle}/>
          <div className="container">
            <div className="lead title">
              The 'Muse n News' is a web app for browsing through movies, audiobooks and songs. 
              After signing up/signing in, you can look through the three different types of entertainment
              options provided.
              <br />

              <br />
              Features:
              <br />

              <br />
              The landing page will show you a carousel of all the top trending movies
              <br />
              Every movie, song and audiobook card has an option to add the card to favorites.
              Favorites can be found in the drop down menu under your username.
              

              <br />
              Every card also has a see related news option which, on clicking, will show you news articles related to the card.
              <br />
              
              A search option is also available on each tab (movies, music, books) for you to search for the thing you're looking for.
              <br />
              <br />
            </div>
          </div>
          <footer>
            © 2018 - Yulong Tan,  Katie Clark , Elias Mendel,  Anushka Raheja| Powered by:   
            <a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html"> iTunes Search API</a> and  
            <a href="https://developers.themoviedb.org/3/getting-started/introduction"> The Movie Database API</a>.
          </footer>
      </div>
    );
  }
}

export {About};