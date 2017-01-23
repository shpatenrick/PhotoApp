var AlbumEntry = (props) => (
  <div className="album-list-entry-title">{props.pic.title}</div>
);

AlbumEntry.propTypes = {
  pic: React.PropTypes.object.isRequired
};

window.AlbumEntry = AlbumEntry;