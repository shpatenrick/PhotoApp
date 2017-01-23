var ImageRating = (props) => (
  <div>
    <div>{props.rating} out of 5</div>
  </div>
);

ImageRating.propTypes = {
  rating: React.PropTypes.number.isRequired
}

window.ImageRating = ImageRating;