const app = document.getElementById("app");
const album = [
  {
    id: 1,
    name: "Surfer1",
    image: "./img/picture1.png"
  },
  {
    id: 2,
    name: "Surfer2",
    image: "./img/picture2.png"
  },
  {
    id: 3,
    name: "Sup",
    image: "./img/picture3.png"
  },
  {
    id: 4,
    name: "Surfer3",
    image: "./img/picture4.png"
  },
  {
    id: 5,
    name: "Surfer4",
    image: "./img/picture5.png"
  },
  {
    id: 6,
    name: "Kiter1",
    image: "./img/picture6.png"
  },
  {
    id: 7,
    name: "Lady",
    image: "./img/picture7.png"
  },
  {
    id: 8,
    name: "Kite2",
    image: "./img/picture8.png"
  },
  {
    id: 9,
    name: "Windsurfer1",
    image: "./img/picture9.png"
  },
  {
    id: 10,
    name: "Kite3",
    image: "./img/picture10.png"
  },
  {
    id: 11,
    name: "Kite4",
    image: "./img/picture11.png"
  },
  {
    id: 12,
    name: "Surfer5",
    image: "./img/picture12.png"
  }
];

class App extends React.Component {
  render() {
    return <Gallery album={this.props.album} />;
  }
}

class Gallery extends React.Component {
  render() {
    // Create area for each item in album array
    // Pass album to each picture and assign a key
    return (
      <div className="gallery">
        {this.props.album.map(album => {
          return <Pictures album={album} key={album.id} />;
        })}
      </div>
    );
  }
}

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false
    };
    // Bind properties to class instance
    this.clickHandler = this.clickHandler.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  // Event handlers to modify state values
  mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.album.name);
      this.setState({
        mouseOver: true
      });
    }
  }
  mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false
      });
    }
  }
  clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  render() {
    // Modify styles based on state values
    let pictureStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When picture clicked
    if (this.state.open) {
      pictureStyle = {
        width: "70vw",
        height: "70vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "0",
        marginTop: "-35vw",
        marginLeft: "-35vw",
        boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
        transform: "none"
      };
    } else {
      pictureStyle = {
        width: "15vw",
        height: "15vw"
      };
    }

    return (
      <div>
        <div className="picture">
          <img
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
            onClick={this.clickHandler}
            src={this.props.album.image}
            alt={this.props.album.name}
            style={pictureStyle}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App album={album} />, app);
