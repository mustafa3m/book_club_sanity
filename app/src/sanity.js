import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "kfljtga0",
  dataset: "production",
  apiVersion: "2022-03-30", //dagen prosjektet ble først opprettet/sist oppdatert
  useCdn: true, //false for localhost, true for netlify
  withCredentials: true //false for
});