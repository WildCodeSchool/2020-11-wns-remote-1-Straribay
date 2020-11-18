import React from 'react';
import EventCard from './EventCard';

export const eventList = [
  {
    id: 1,
    title: "Gaming",
    date: "11/12/20",
    hour: "15h30",
    author: "Robin",
    description: "PES 2021 tournaments",
    infos: "Google meet lien : lalalalala",
    image: "une image à trouver",
  },
  {
    id: 2,
    title: "Cooking",
    date: "10/12/20",
    hour: "19h",
    author: "Maxime",
    description: "make Welsh ",
    infos: "Chez moi 2 rue de la Hess 75018",
    image: "cook",
  },
  {
    id: 3,
    title: "Dev",
    date: "09/11/20",
    hour: "10h15",
    author: "Vincent",
    description: "Introduction of Go",
    info: "youhou youhou youhou",
    image: "une image à trouver",
  },
  {
    id: 4,
    title: "Politics",
    date: "27/11/20",
    hour: "17h00",
    author: "David",
    description: "lorem ipsum *30",
    infos: "discord serveur Naniarritz",
    image: "afa LA ROCHE MA GUEULE",
  },
  {
    id:5,
    title: "witchcraft",
    date: "30/11/20",
    hour: "18h00",
    author: "Justine",
    description: "potion",
    info :" loloS",
    image: "wizard",
  },
];

function EventList() {
  return (
    eventList.map(event => {
      return (
        <EventCard key={event.id}
          title={event.title}
          date={event.date}
          hour={event.hour}
          author={event.author}
          description={event.description}
          infos={event.infos}
          image={event.image}
        />
      )
    })
  )
}

export default EventList;