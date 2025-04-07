// Моковые данные для проектов
const mockProjects = [
  {
    title: "Проект 1",
    description: "Описание проекта 1",
    link: "https://github.com/yourname/project1"
  },
  {
    title: "Проект 2",
    description: "Описание проекта 2",
    link: "https://github.com/yourname/project2"
  }
];

export async function getProjects() {
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProjects;
}

export async function sendMessage(data) {
  // Имитация отправки сообщения
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("Отправлено сообщение:", data);
  return { status: "ok", message: "Сообщение отправлено!" };
} 