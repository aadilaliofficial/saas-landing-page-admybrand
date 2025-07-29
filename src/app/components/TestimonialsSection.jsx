// app/components/TestimonialsSection.jsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Sophie Patel',
    image: 'https://i.pravatar.cc/150?img=3',
    quote: 'ADmyBRAND’s AI Suite boosted our ROI by 45% in just 3 months!',
    stars: 5,
  },
  {
    name: 'Daniel Kim',
    image: 'https://i.pravatar.cc/150?img=2',
    quote: 'The automation features saved us hours every week. Brilliant!',
    stars: 4,
  },
  {
    name: 'Ayesha Rahman',
    image: 'https://i.pravatar.cc/150?img=1',
    quote: 'The dashboard is intuitive and the analytics are spot-on.',
    stars: 5,
  },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-24 px-6 md:px-20 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-neon-purple mb-4">What Our Users Say</h2>
        <p className="text-gray-400">Real feedback from teams using ADmyBRAND AI Suite</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-xl text-center h-full hover:scale-[1.02] transition-transform duration-300 shadow-neon-blue">
              <div className="mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="mx-auto w-16 h-16 rounded-full border-2 border-neon-purple shadow-neon-purple object-cover"
                />
              </div>
              <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-yellow-400 text-sm mt-1">
                {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TestimonialsSection
