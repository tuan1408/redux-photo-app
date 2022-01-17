import React from "react";
// import PropTypes from "prop-types";
import Banner from "components/Banner";
import Images from "constants/images";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/PhotoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  console.log("list of photo", photos);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleEditClick = (photo) => {
    console.log("edit", photo);
    const editPhotoUrl = `/photos/${photo.id}`;

    history(editPhotoUrl);
  };

  const handleRemoveClick = (photo) => {
    console.log("remove", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="your awesome photos" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handleEditClick}
          onPhotoRemoveClick={handleRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
