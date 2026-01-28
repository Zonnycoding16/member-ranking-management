import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    title: '𝗛𝗔𝗣𝗣𝗬 𝗡𝗘𝗪 𝗬𝗘𝗔𝗥 𝟮𝟬𝟮𝟲',
    description:
      "DevFest GDGoC FPT University HCMC on December 28th and Road to Google Developers Certification is one of the main goals that FPT University student community will achieve to start the journey to become Google Developer Experts.",
    dateLabel: 'Nov 27, 8:00 AM - Dec 28, 6:00 PM (GMT+7)',
    img: '/events/Happy New Year 2026.jpg',
    linkUrl: 'https://www.facebook.com/share/p/14R5CdHwxbg/',
    linkText: 'Open on Facebook',
    imgClass: 'w-full object-contain',
    imgStyle: { aspectRatio: '1 / 1', objectFit: 'contain', objectPosition: 'center' },
  },
  {
    id: 2,
    title: '𝗤&𝗔 cùng 𝗚𝗗𝗚𝗼𝗖 𝗙𝗣𝗧𝗨',
    description:
      'Nếu bạn cũng đang phân vân như vậy, tụi mình sẽ giải đáp ngay bên dưới. Biết đâu, câu trả lời bạn cần tìm lại nằm ở đây thì sao 👀',
    img: '/events/Q&A.png',
    linkUrl: 'https://www.facebook.com/share/p/1X1tphFLBv/',
    linkText: 'Open on Facebook',
    imgClass: 'w-full object-contain',
    imgStyle: { aspectRatio: '1 / 1', objectFit: 'contain', objectPosition: 'center' },
  },
  {
    id: 3,
    title: "SỰ KIỆN TỔNG KẾT HỌC KỲ SUMMER 2025 - GDG ON CAMPUS FPTU HCM",
    description: "Một kỳ học Summer đầy năng lượng đã dần khép lại, và giờ là lúc chúng ta cùng nhìn lại những hành trình tuyệt vời đã cùng nhau đi qua!",
    dateLabel: 'Nov 1, 7:00 AM - 6:00 PM (GMT+7)',
    img: '/events/tongket.png',
    linkUrl: 'https://www.facebook.com/share/p/1BsMhQUA6L/',
    linkText: 'Open on Facebook',
    imgClass: 'w-full h-[420px] md:h-[560px] object-cover',
    imgStyle: { objectPosition: 'center' },
  },
  {
    id: 4,
    title: '𝗖𝗢𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡',
    description: 'New Chapter',
    imgClass: 'w-full object-contain',
    imgStyle: { aspectRatio: '1 / 1', objectFit: 'contain', objectPosition: 'center' },
    img: '/events/comming_soon.jpg',
    linkUrl: 'https://www.facebook.com/share/16nN3LXwnK/',
    linkText: 'Open on Facebook',
  },
  
];

const EventLanding = () => {
  return (
    <section className="py-10 bg-white" id="section-events">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-8 text-blue-600">Our Events</h2>

      <div className="space-y-8">
        {events.map((ev, idx) => (
          <EventCard
            key={ev.id}
            title={ev.title}
            description={ev.description}
            dateLabel={ev.dateLabel}
            img={ev.img}
            reverse={idx % 2 === 1}
            linkUrl={ev.linkUrl}
            linkText={ev.linkText}
            imgClass={ev.imgClass}
            imgStyle={ev.imgStyle}
          />
        ))}
      </div>
    </section>
  );
};

export default EventLanding;

