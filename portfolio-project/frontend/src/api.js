const API_URL = 'http://localhost:8000';

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Ошибка при загрузке проектов');
  }
  return response.json();
}

export async function sendMessage(data) {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Ошибка при отправке сообщения');
  }
  return response.json();
} 