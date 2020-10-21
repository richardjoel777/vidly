export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action", img : 'images/action.png'},
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy", img : 'images/comedy.png'},
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller", img : 'images/thriller.png' }
];

export function getGenres() {
  return genres.filter(g => g);
}
