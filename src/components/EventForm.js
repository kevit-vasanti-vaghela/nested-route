import { useEffect, useState} from 'react';
import { 
  useNavigate, 
  Form, 
  useNavigation, 
  useActionData, 
  json, 
  redirect 
} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const [title,setTitle] = useState('')
  const [image,setImage] = useState('')
  const [date,setDate] = useState('')
  const [des,setDes] = useState('')
  const data = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  useEffect(() => {
    let t = localStorage.getItem('title')
    let i = localStorage.getItem('image')
    let da = localStorage.getItem('date')
    let de = localStorage.getItem('description')
    setTitle(t)
    setImage(i)
    setDate(da)
    setDes(de)
  },[title,image,date,des])

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
    localStorage.setItem('title', e.target.value)
  }

  const imageChangeHandler = (e) => {
    setImage(e.target.value)
    localStorage.setItem('image', e.target.value)
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
    localStorage.setItem('date', e.target.value)
  }

  const desChangeHandler = (e) => {
    setDes(e.target.value)
    localStorage.setItem('description', e.target.value)
  }
  
  
  const isSubmitting = navigation.state === 'submitting';
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form} >
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input 
          id="title" 
          type="text" 
          name="title" 
          required 
          onChange={titleChangeHandler}
          defaultValue={event ? event.title : title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input 
          id="image" 
          type="url" 
          name="image" 
          required
          onChange={imageChangeHandler}
          defaultValue={event ? event.image : image} 
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input 
          id="date" 
          type="date" 
          name="date" 
          required 
          onChange={dateChangeHandler}
          defaultValue={event ? event.date : date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea 
          id="description" 
          name="description" 
          rows="5" 
          required 
          onChange={desChangeHandler}
          defaultValue={event ? event.description :des}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}) {
  localStorage.clear();
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  let url = 'http://localhost:8080/events';

  if (method === 'PATCH') {
    const eventId = params.eventId;
    url = 'http://localhost:8080/events/' + eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 })
  }
  
  return redirect('/events') ;
}
