import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';

export default function Contacts() {
  return (
    <Layout 
      title="Контакти - Відділ агроекології і біобезпеки"
      currentPage="contacts"
    >
      <section className="contacts section">
        <div className="container">
          <div className="contacts__wrapper">
            <h1 className="section__title">Контакти</h1>
            <ul className="contacts__list">
              <li>
                <p>м. Київ, вул. Метрологічна, 12</p>
              </li>
              <li>
                <a className="contacts__item" href="mailto:info@devstudio.com">
                  info@devstudio.com
                </a>
              </li>
              <li>
                <a className="contacts__item" href="tel:+380961111111">
                  +38 096 111 11 11
                </a>
              </li>
              <li>
                <a
                  className="contacts__item"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="contacts__item">
                <ul>
                  <b>Графік роботи:</b>
                  <li className="contacts__schedule">ПН-ПТ: 9:00-18:00</li>
                  <li className="contacts__schedule">СБ-НД: вихідні</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="team__wrapper">
            <ul className="team">
              <li className="team__item">
                <Image
                  src="/images/avatar.jpg"
                  alt="Боцула Олександр Іванович"
                  width={200}
                  height={200}
                />
                <div className="team__text">
                  <p className="team__place">Уповноважений з якості</p>
                  <p className="team__name">Боцула Олександр Іванович</p>
                  <a className="team__contacts" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                  <a className="team__contacts" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </div>
              </li>
              
              <li className="team__item">
                <Image
                  src="/images/avatar.jpg"
                  alt="Ткач Євгенія Дмитрівна"
                  width={200}
                  height={200}
                />
                <div className="team__text">
                  <p className="team__place">Керівник ВЛ "ВАБ"</p>
                  <p className="team__name">Ткач Євгенія Дмитрівна</p>
                  <a className="team__contacts" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                  <a className="team__contacts" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </div>
              </li>
              
              <li className="team__item">
                <Image
                  src="/images/avatar.jpg"
                  alt="Дворецький Володимир Володимирович"
                  width={200}
                  height={200}
                />
                <div className="team__text">
                  <p className="team__place">Менеджер обслуговування ЗВТ та ВУ</p>
                  <p className="team__name">Дворецький Володимир Володимирович</p>
                  <a className="team__contacts" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                  <a className="team__contacts" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </div>
              </li>
              
              <li className="team__item">
                <Image
                  src="/images/avatar.jpg"
                  alt="Пилипчук Тетяна Василівна"
                  width={200}
                  height={200}
                />
                <div className="team__text">
                  <p className="team__place">Керівник групи ведення НД</p>
                  <p className="team__name">Пилипчук Тетяна Василівна</p>
                  <a className="team__contacts" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                  <a className="team__contacts" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </div>
              </li>
              
              <li className="team__item">
                <Image
                  src="/images/avatar.jpg"
                  alt="Гуменюк Ірина Ігорівна"
                  width={200}
                  height={200}
                />
                <div className="team__text">
                  <p className="team__place">
                    Керівник групи мікробіологічних випробувань
                  </p>
                  <p className="team__name">Гуменюк Ірина Ігорівна</p>
                  <a className="team__contacts" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                  <a className="team__contacts" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </div>
              </li>
              
              <li className="team__item">
                <Image
                  src="/images/avatar.jpg"
                  alt="Шавріна Віра Ігорівна"
                  width={200}
                  height={200}
                />
                <div className="team__text">
                  <p className="team__place">
                    Керівник групи біологічних та екологічних випробувань
                  </p>
                  <p className="team__name">Шавріна Віра Ігорівна</p>
                  <a className="team__contacts" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                  <a className="team__contacts" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </div>
              </li>
              
              <li className="team__item">
                <Image
                  src="/images/avatar.jpg"
                  alt="Цвігун Вікторія Олександрівна"
                  width={200}
                  height={200}
                />
                <div className="team__text">
                  <p className="team__place">
                    Керівник групи фізико-хімічних випробувань
                  </p>
                  <p className="team__name">Цвігун Вікторія Олександрівна</p>
                  <a className="team__contacts" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                  <a className="team__contacts" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d636.4525928970456!2d30.476352491995268!3d50.35144216338408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c86fb95b87a9%3A0x358516b440edb4c9!2z0IbQvdGB0YLQuNGC0YPRgiDQsNCz0YDQvtC10LrQvtC70L7Qs9GW0Zcg0ZYg0L_RgNC40YDQvtC00L7QutC-0YDQuNGB0YLRg9Cy0LDQvdC90Y8g0J3QkNCQ0J0!5e0!3m2!1suk!2sua!4v1755709604141!5m2!1suk!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps - Відділ агроекології і біобезпеки"
          />
        </div>
      </section>
    </Layout>
  );
}
