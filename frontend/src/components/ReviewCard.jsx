function ReviewCard(props) {
//   const [{ avatar, name, rating, review }] = props
  let reviews = []  
  props.props.forEach(element => {
    console.log(element)
    reviews.push(element)
  });
  
  return (
    <div className="align-middle">
        <div className="p-5 shadow-red-300">
            <div className="flex p-6">
                <img src={reviews[0].avatar} alt="sime" className="h-8 rounded-full"/>
               <span><h3 className="inline-block">Bhavesh Gadling</h3> </span> 
            </div>
            <div className="ml-6">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab id ipsa commodi iure voluptatem assumenda quos ad reprehenderit quae modi tempora, facere doloremque laboriosam ullam sint placeat quam debitis accusamus.</p>
            </div>
        </div>
    </div>
  );
}

export default ReviewCard;
