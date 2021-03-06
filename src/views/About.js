import React, {Component} from 'react';
import { Header } from '../components/headers/Headers';


class About extends Component {
  //Provides an explanation of what we do, and the resources we used
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

              <ul>
                <li>
                  The landing page will show you a carousel of all the top trending movies
                </li>
                <li>
                  Every movie, song and audiobook card has an option to add the card to favorites.
                  Favorites can be found in the drop down menu under your username.
                </li>

              
                <li>
                  Every card also has a see related news option which, on clicking, will show you news articles related to the card.
                </li>
              
                <li>
                 A search option is also available on each tab (movies, music, books) for you to search for the thing you're looking for.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <footer>
            © 2018 - Yulong Tan,  Katie Clark , Elias Mendel,  Anushka Raheja | Powered by:   
            <a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html"> iTunes Search API</a>,  
            <a href="https://developers.themoviedb.org/3/getting-started/introduction"> The Movie Database API</a>, and
            <a href="https://newsapi.org/"> The News API</a>
          </footer>
      </div>
    );
  }
}

export {About};