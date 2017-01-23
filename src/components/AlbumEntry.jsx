var AlbumEntry = (props) => (
  <div>{props.pic.title}</div>
);

AlbumEntry.propTypes = {
  pic: React.PropTypes.object.isRequired
};

window.AlbumEntry = AlbumEntry;