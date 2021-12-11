import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-20 lg:py-10">
        <span className="text-sm sm:text-base md:text-4xl uppercase block text-center mb-3">
          За нас
        </span>
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Get to knows us
        </h1> */}
        <p className="text-base text-center mt-6 lg:mt-10 mb-12 w-3/4 mx-auto">
          Како успешен тим, компанијата SmartBuy се води според филозофијата и
          слоганот “НИЕ СМЕ ЕКИПА”. SmartBuy е модерна компанија која се
          карактеризира со флексибилност, професионалност, динамична стратегија
          за развој, како и ориентираност кон пазарот со препознатливи брендови.
        </p>
      </div>

      <div className="w-full my-16 sm:my-20 lg:my-16 bg-yellow-600">
        <div className="w-5/6 sm:w-3/4 md:w-5/6 mx-auto flex flex-col md:flex-row  justify-between py-16 md:py-20 text-center sm:text-left">
          <div className="md:w-1/2">
            <div className="px4">
              <h3 className="font-medium text-white text-3xl">НАШАТА МИСИЈА</h3>
              <p className="text-white text-base pt-6 md:pt-8">
                Целиме кон тоа да станеме најдобриот малопродажен ланец за
                спортска опрема на Балканот. Настојуваме да оствариме активна
                врска со партнерите, клиентите и купувачите, како и активно да
                чекориме напред.
                <br />
              </p>
            </div>
          </div>

          <div className="md:w-1/2 pt-12 md:pt-0">
            <div className="px-4">
              <h3 className="font-medium text-white text-3xl">НАШАТА ВИЗИЈА</h3>
              <p className="text-white text-base pt-6 md:pt-8">
                Веруваме во напредок, следиме и применуваме новитети, не се
                плашиме од непровереното и веруваме дека она што е добро, можеме
                да го оствариме.
                <br />
                <br />
                SmartBuy е синоним за “СÈ НА ЕДНО МЕСТО”.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
        <div className="w-full sm:w-3/4 mx-auto">
          <h3 className="mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:leading-tight mb-4">
            SmartBuy е компанија за мода и креативност
          </h3>
          {/* <p className="mx-auto md:text-lg mt-8 sm:mt-10 mb-12 lg:pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <div
            className="relative bg-no-repeat bg-cover bg-center h-64 sm:h-80 md:h-96 mx-auto flex items-center justify-center cursor-pointer"
            style={{ backgroundImage: 'url(/assets/images/creativity.jpg)' }}
          >
            <FaPlayCircle className="text-white opacity-75 text-9xl z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
