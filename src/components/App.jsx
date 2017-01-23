class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    displayPhoto: window.examplePhotoData[0],
    AlbumList: window.examplePhotoData
    }
  }

  changePicture (photo) {
    this.setState({displayPhoto: photo});
  }

  render() {
    return (
      <div>
        <div className='col-md-7'>
          <Album pics={this.state.AlbumList}/>
        </div>
        <div className='col-md-5'>
          <ImageInfo image={this.state.displayPhoto}/>
          <ImageRating rating={this.state.displayPhoto.rating} />
        </div>
      </div>    
    )
  }
}

window.App = App;