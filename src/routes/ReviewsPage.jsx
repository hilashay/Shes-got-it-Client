import { Link } from "react-router-dom";
import "../Reviews.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review";
import useComments from "./CustomHooks/useComments";
import ReviewModal from "./Components/ReviewModal";
import { useState, useRef } from "react";

function ReviewsPage() {
  const [showModal, setShowModal] = useState(false);
  const users = useComments();
  const [selectedReview, setSelectedReview] = useState();

  const modalContainerRef = useRef(null);

  const handleContainerClick = (e) => {
    if (!showModal) return;

    const modalContentContainer = modalContainerRef.current;
    console.log("modalContentContainer ", modalContentContainer.getBoundingClientRect());
    console.log("a small change");
    const { left, right, bottom, top } = modalContentContainer.getBoundingClientRect();

    console.log("e", e);
    if (
      showModal &&
      !(e.clientX > left && e.clientX < right && e.clientY > top && e.clientY < bottom)
    ) {
      setShowModal(false);
      console.log("showModal", showModal);
    }
  };

  return (
    <div onClick={handleContainerClick}>
      <h1>Reviews</h1>
      <Reviews
        users={users}
        onSelectReview={(review) => {
          setSelectedReview(review);
          setShowModal(true);
        }}
        showModal={() => setShowModal(false)}
      />

      <ReviewModal
        ref={modalContainerRef}
        onClose={() => setShowModal(false)}
        showModal={showModal}
        review={selectedReview}
      />

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default ReviewsPage;
