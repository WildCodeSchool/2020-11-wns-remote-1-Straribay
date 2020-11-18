import React from 'react';

function EventCard({
  title,
  date,
  hour,
  author,
  description,
  infos,
  image
}) {

  return (
    <div>
      <h3>{title}</h3>
      <span>{date} {hour}</span>
      <span>{author}</span>
      <span>{description}</span>
      <span>{infos}</span>
      <span>{image}</span>
    </div>
  )
}

export default EventCard;