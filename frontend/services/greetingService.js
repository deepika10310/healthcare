// frontend/services/greetingService.js
export async function getGreeting() {
  const res = await fetch('/api/greeting');
  const data = await res.json();
  // If the API returns { message: '…' } on success
  if (!res.ok) {
    // Forward the whole error object for the component to handle
    throw data;
  }
  return data.message;
}
