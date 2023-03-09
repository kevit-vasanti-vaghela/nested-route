import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail');
    // const params = useParams();
  return (
    <EventItem event={data.event} />
  ) 
}

export default EventDetailPage

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if(!response.ok) {
    throw json(
      {message: 'Could not fetch details for selected events'},
      {status: 500}
    )
  } else {
    return response;
  }
}

export async function action({ params, request}) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      {message: 'Could not delete event.'},
      {status: 500}
    )
  }
  return redirect('/events')
}
