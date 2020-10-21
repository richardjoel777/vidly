export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action", img : 'https://github.com/richardjoel777/vidly_2.0/images/action.png'},
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy", img : 'https://github.com/richardjoel777/vidly_2.0/images/comedy.png'},
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller", img : 'https://github.com/richardjoel777/vidly_2.0/images/thriller.png' }
];

export function getGenres() {
  return genres.filter(g => g);
}
