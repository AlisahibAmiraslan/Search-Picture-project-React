import React from "react";
import axios from "axios";
import Searchinput from "./Searchinput";
import İmageList from "./İmageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=27104198-d761ddaad04ac2b7028e06384&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
    console.log(response);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <Searchinput onSearchSubmit={this.onSearchSubmit} />
        <p className="image-list">
          There are {this.state.images.length} images
        </p>
        <İmageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
