class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    displayPhoto: window.examplePhotoData[0],
    AlbumList: window.examplePhotoData
    }
  }

  render() {
    return (
      <div>
        <div className='list-left'>
          <Album pics={this.state.AlbumList}/>
        </div>
        <div className='imageDisp'>
          <ImageInfo image={this.state.displayPhoto}/>
          <ImageRating rating={this.state.displayPhoto.rating} />
        </div>
      </div>    
    )
  }
}

window.App = App;