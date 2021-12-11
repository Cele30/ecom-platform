import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useScrollTop from '../hooks/useScrollToTop';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useScrollTop();

  return (
    <div className="container mx-auto px-4">
      <div className="pt-8 pb-16 md:pb-20 lg:pb-24 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-3/8 xl:w-1/3 mx-auto px-8 xl:px-8 border border-gray-200 shadow text-center lg:text-left py-10 mb-8 lg:mb-0">
          <h2 className="text-2xl md:text-4xl">Контакт</h2>

          <h4 className="font-semibold text-lg sm-text-xl uppercase pt-8">
            Email
          </h4>
          <p className="text-gray-500">test@test.com</p>

          <h4 className="font-semibold text-lg sm-text-xl uppercase pt-8">
            Phone
          </h4>
          <p className="text-gray-500">0123 456 789</p>

          <div className="pt-8">
            <h4 className="uppercase text-lg sm:text-xl">
              Следете не на социјалните мрежи
            </h4>
            <div className="flex justify-center items-center lg:justify-start pt-3 gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-yellow-500 block text-white flex items-center"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-yellow-500 block text-white flex items-center"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-yellow-500 block text-white flex items-center"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=41.03008463259647,21.328416343070714&z=15&output=embed"
            width="360"
            height="270"
            frameborder="0"
            title="map"
            className="w-full mt-8"
          ></iframe>
        </div>

        <div className="lg:w-3/5 border border-gray-300 shadow-md px-8 py-10">
          <form
            onSubmit={event => {
              event.preventDefault();
              if (name === '' || email === '') {
                alert('Ве молиме пополнете ги полињата');
              } else {
                alert('Вашата порака е успешно испратена');
                setEmail('');
                setName('');
                setSubject('');
                setMessage('');
                navigate('/');
              }
            }}
          >
            <p className="text-lg pb-8">
              {/* Any questions? Contact us through Whatsapp or on our contact form
              below. */}
              Имате прашања? Контактирајте не преку формата
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between mb-5">
              <div>
                <label className="block mb-2">Име</label>
                <input
                  value={name}
                  onChange={event => setName(event.target.value)}
                  type="text"
                  placeholder="Внесете го вашето име"
                  className="w-full border border-gray-300 px-4 py-2"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  type="email"
                  placeholder="Внесете ја вашата email адреаса"
                  className="w-full border border-gray-300 px-4 py-2"
                />
              </div>
            </div>

            <div className="w-full mb-8">
              <label className="block mb-2">Наслов</label>
              <input
                value={subject}
                onChange={event => setSubject(event.target.value)}
                type="text"
                placeholder="Внесете го насловот на пораката"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>

            <div className="w-full mb-8">
              <label className="block mb-2">Порака</label>
              <textarea
                value={message}
                onChange={event => setMessage(event.target.value)}
                rows={5}
                placeholder="Внесете го вашето прашање или порака"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 uppercase inline-block px-7 py-3 rounded text-white"
            >
              Испрати
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
