import React from "react";

const ListGroup = ({
  items,
  nameProperty,
  idProperty,
  onGenreSelect,
  selectedGenre,
}) => {
  return (
    <div>
    <div role="list" className="ui selection middle aligned list">
    {items.map((genre) => (
      <div role="listitem" className={
        genre === selectedGenre
          ? "item active"
          : "item"
      } onClick={() => onGenreSelect(genre)} key={genre[idProperty]}>
      { genre.img && <img src={genre.img} className="ui avatar image"/> }
        <div className="content">
          <div className="header">
          {genre[nameProperty]}
            </div>
            </div>
            </div>
            ))}
            </div>
    </div> 
  );
};

ListGroup.defaultProps = {
  idProperty: "_id",
  nameProperty: "name",
};

export default ListGroup;
