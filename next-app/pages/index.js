import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Lightbox from "../components/Lightbox/Lightbox";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

  const slides = [
    {
      src: "/images/photos/photo5226469694922403931.jpg",
      alt: "Перший слайд"
    },
    {
      src: "/images/photos/photo5303084412470145765.jpg", 
      alt: "Другий слайд"
    },
    {
      src: "/images/photos/photo5303084412470145779.jpg",
      alt: "Третій слайд"
    }
  ];

  const openLightbox = (src, alt) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage({ src: "", alt: "" });
  };

  return (
    <Layout currentPage="home">
      <section className="section">
        <div className="container">
          <h1 className="section__title">Головна</h1>
          <div className="about__content">
            <p className="about__text about__text--side">
              <b>Випробувальна лабораторія "Відділ агроекології і біобезпеки"</b> Інституту агроекології і природокористування НААН – це провідна
              сучасна лабораторія, яка спрямована на визначення якості та
              безпечності сільськогосподарської продукції.
              <br />
              Співробітники ВЛ "ВАБ" займаються науково-практичними розробками в
              галузях екології, мікробіології, вірусології, біотехнології,
              агрономії.
            </p>
            <Image 
              className="logo__bg" 
              src="/images/logo-9-2.jpg" 
              alt="лого ВЛ ВАБ"
              width={300}
              height={120}
            />
          </div>
          <div className="atestat__content">
            <p className="about__text about__text--side">
              Випробувальну лабораторію Відділу агроекології і біобезпеки
              Інституту агроекології і природокористування НААН акредитовано
              Національним агентством з акредитації України <b>№202158 від 15.04.2021 відповідно до вимог ДСТУ EN ISO/IEC
              17025:2019</b> у сфері фізико-хімічних, мікробіологічних випробувань грунту,
              біопрепаратів, рослинницької продукції; випробувань біологічних
              об'єктів та довкілля; відбору проб.
            </p>
            <Image
              className="atestat lightbox__min-image"
              src="/images/atestat.jpg"
              alt="Атестат про акредитацію"
              width={400}
              height={300}
              onClick={() => openLightbox("/images/atestat.jpg", "Атестат про акредитацію")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <p className="about__text">
            <a
              className="nakaz__link"
              href="https://mepr.gov.ua/files/docs/nakazy/2021/295%20%D0%BD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              ><b>Наказом №295 від 30.04.2021</b></a
            >
            Міністерство захисту довкілля та природних ресурсів України внесено
            до переліку науково-дослідних установ, підприємств та організацій
            уповноважених на проведення державних випробувань пестицидів та
            агрохімікатів
            <b
              >відділ агроекології і
              біобезпеки Інституту агроекології і
              природокористування.</b
            >
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="about-us">
        <div className="container">
          <h2 className="section__title">Про нас</h2>
          <ol className="about__text">
            На сьогодні у ВЛ «ВАБ» існує три напрями випробувань:
            <li className="about__text__item">Мікробіологічні випробування</li>
            <li className="about__text__item">
              Біологічні та екологічні випробування
            </li>
            <li className="about__text__item">Фізико-хімічні випробування</li>
          </ol>
          <br />
          <br />
          <br />
          <i className="what-we-have__title"
            >Особливості випробувальної лабораторії «Відділ агроекології і
            біобезпеки»:</i
          >
          <br />
          <br />
        </div>
        </div>
        <ul className="what-we-have__list about__text">
          <li className="what-we-have__item">
            <p className="info">сучасне лабораторне обладнання</p>
            <div className="overlay"></div>
            <div className="bg-img">
              <Image 
                src="/images/photos/modern_equipment/1.jpg"
                alt="Сучасне обладнання"
                width={400}
                height={300}
              />
            </div>
          </li>
          <li className="what-we-have__item">
            <p className="info">
              «акваріумна кімната», де вирощують рибок гупі (<i
                >Poecilia reticulata</i
              >), найменші водні ракоподібні дафнії (<i>Daphnia magna</i>),
              мікроскопічні одноклітинні зелені водорості хлорела (<i
                >Chlorella vulgaris</i
              >)
            </p>
            <div className="overlay"></div>
            <div className="bg-img">
              <Image 
                src="/images/photos/aquarium/2.jpg"
                alt="Акваріум"
                width={400}
                height={300}
              />
            </div>
          </li>
          <li className="what-we-have__item">
            <p className="info">
                власний «міні-віварій», де для потреб досліджень розводять
                перепелів (<i>Coturnix coturnix japonica</i>) та бджіл (<i
                  >Apis mellifera</i
                >)
              </p>
            <div className="overlay"></div>
            <div className="bg-img">
              <Image 
                src="/images/photos/vivarium/1.jpg"
                alt="Віварій"
                width={400}
                height={300}
              />
            </div>
          </li>
          <li className="what-we-have__item">
            <p className="info">дослідні поля в Київській, Одеській, Вінницькій областях</p>
            <div className="overlay"></div>
            <div className="bg-img">
              <Image 
                src="/images/photos/fields/1.jpg"
                alt="Дослідні поля"
                width={400}
                height={300}
              />
            </div>
          </li>
          <li className="what-we-have__item">
            <p className="info">
                теплиця, світлова кімната – рослини вирощують впродовж всього
                року
              </p>
            <div className="overlay"></div>
            <div className="bg-img">
              <Image 
                src="/images/photos/greenhouse/1.jpg"
                alt="Теплиця"
                width={400}
                height={300}
              />
            </div>
          </li>
        </ul>
        
        <div className="about-us">
        <div className="container">
          <br />
          <br />
          <i className="what-we-have__title"
            >Основними напрямками досліджень ВЛ «ВАБ» є:</i
          >
          <br />
          <br />
          <ul className="about__text">
            <li className="research__item">
              <b
                ><i
                  >Комплексні дослідження природних, напівприродних, заповідних,
                  фітоценозів та агроландшафтів</i
                ></b
              >
              – за показниками фіто- та зоорізноманіття, мікробіоценозом,
              агрохімічними показниками ґрунту, якістю продукції.
            </li>
            <li className="research__item">
              <b><i>Державні випробовування пестицидів та агрохімікатів</i></b>
              – визначення їх біологічної ефективності та екологічна оцінка
              (оцінка екологічної небезпечності) на на нецільові об'єкти водної
              (риби, дафнії), ґрунтової (мікроорганізми, земляні червʼяки) та
              наземної екосистеми.
            </li>
            <li className="research__item">
              <b><i>Молекулярно-генетичні дослідження</i></b> - визначення
              видового складу мікробіоти, оцінка біорізноманіття та виявлення
              міжвидових і видових взаємозв'язків у екосистемах на
              філогенетичному рівні.
            </li>
            <li className="research__item">
              <b><i>Створення біопрепаратів</i></b> – технологічні розробки
              виробництва і застосування мікробіологічних препаратів на основі
              високо конкурентних мікроорганізмів із агрономічно-корисними
              властивостями, що дозволять вирішити питання формування сталих
              агроекосистем з позиції екології та підвищити врожайність
              сільськогосподарських культур і якість одержаної продукції.
            </li>
            <li className="research__item">
              <b><i>Консалтингові послуги</i></b> з питань екології, біобезпеки,
              агрохімії, мікробіології та вірусології, у агропромисловому
              виробництві. Проведення виставок, конференцій, круглих столів,
              семінарів, вебінарів, навчань, лекцій, стажувань.
            </li>
          </ul>
          <div className="details">
            <Link href="/lab">Докладніше...</Link>
          </div>
        </div>
        </div>

        {/* Swiper Slider */}
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            className="swiper-slider"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slide-item">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={800}
                    height={600}
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox isOpen={lightboxOpen} onClose={closeLightbox}>
        <Image
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          fill={true}
          className="lightbox__image"
        />
      </Lightbox>
    </Layout>
  );
} 