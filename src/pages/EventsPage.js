import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{ data.message }</p>
  }
  const events = data.events;
  return (
       <EventsList events={events} />
  );
}



export default EventsPage;

// separate loader funciton then added as value to loader property of route definition of page.
export async function loader () {
  const response = await fetch('http://localhost:8080/eventsd');

              if (!response.ok) {
                return { isError: true, message: 'Could not fetch data.' }
              } else {
                
                return response;
              }
}