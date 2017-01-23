var ImageInfo = (props) => (
  <div>
    <h2>{props.image.title}</h2>
    <img src={props.image.url} />
  </div>
);

ImageInfo.propTypes = {
  image: React.PropTypes.object.isRequired
};

window.ImageInfo = ImageInfo;