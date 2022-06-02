import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "kfljtga0",
  dataset: "production",
  apiVersion: "2022-03-30", 
  useCdn: false, //false for localhost, true for netlify
  withCredentials: true //false for
});