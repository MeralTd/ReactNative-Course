const GOOGLE_API_KEY = 'AIzaSyA-QjSv9JudZ6lZYPahKYXskS3EKafkGUY';
const API_URL = 'https://maps.googleapis.com/maps/api';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `${API_URL}/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}


export async function getAddress(lat, lng) {
  const url = `${API_URL}/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}