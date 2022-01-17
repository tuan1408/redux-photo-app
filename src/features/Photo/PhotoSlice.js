import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
  {
    id: 91176,
    categoryId: 5,
    photo: "https://picsum.photos/id/1/200/300",
    title: "ảnh đẹp số 1",
  },
  {
    id: 91177,
    categoryId: 1,
    photo: "https://picsum.photos/id/43/200/300",
    title: "ảnh đẹp số 2",
  },
  {
    id: 91178,
    categoryId: 6,
    photo: "https://picsum.photos/id/44/200/300",
    title: "ảnh đẹp số 3",
  },
  {
    id: 91171,
    categoryId: 2,
    photo: "https://picsum.photos/id/41/200/300",
    title: "ảnh đẹp số 4",
  },
  {
    id: 91176,
    categoryId: 7,
    photo: "https://picsum.photos/id/42/200/300",
    title: "ảnh đẹp số 5",
  },
  {
    id: 39588,
    categoryId: 10,
    photo: "https://picsum.photos/id/294/200/300",
    title: "ảnh đẹp số 6",
  },
  {
    id: 91176,
    categoryId: 4,
    photo: "https://picsum.photos/id/229/200/300",
    title: "ảnh đẹp số 7",
  },
  {
    id: 91111,
    categoryId: 11,
    photo: "https://picsum.photos/id/722/200/300",
    title: "ảnh đẹp số 8",
  },
];

const photo = createSlice({
  name: "photo",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      // const newPhoto = action.payload
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      state = state.filter((photo) => photo.id !== removePhotoId);
      return state;
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
