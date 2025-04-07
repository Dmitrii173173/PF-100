import React, { useState } from 'react';
import { sendMessage } from '../api';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendMessage(form);
      setStatus(response.message);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Произошла ошибка при отправке сообщения');
    }
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Связаться со мной</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Ваш email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Ваше сообщение"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Отправить
        </button>
        {status && (
          <p className={`mt-4 text-center ${status.includes('ошибка') ? 'text-red-500' : 'text-green-500'}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm; 