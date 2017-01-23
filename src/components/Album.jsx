var Album = (props) => (
  <div>
  <h2>Album</h2>
    {props.pics.map(pic => 
      <AlbumEntry pic={pic}/>
    )}
  </div>
);

Album.propTypes = {
  pics: React.PropTypes.array.isRequired
};

window.Album = Album;