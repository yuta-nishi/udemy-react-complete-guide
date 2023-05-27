import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('eventDetail');

  return <EventForm method="patch" event={data.event} />;
};

export default EditEventPage;
