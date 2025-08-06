function ReviewCard(props) {
  //   const [{ avatar, name, rating, review }] = props
  let reviews = [];
  props.props.forEach((element) => {
    console.log(element);
    reviews.push(element);
  });

  return (
    <div className="align-middle inline-block bg-cyan-400 ">
      <div className="p-5 shadow-red-300">
        <div className="inline-block p-6">
          <img
            src={reviews[0].avatar}
            alt="sime"
            className="h-8 rounded-full"
          />
          <span>
            <h3 className="inline-block">Bhavesh Gadling</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
