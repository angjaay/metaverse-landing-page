'use client';

import {motion} from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import {fadeIn,staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
      <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Tentang Metaversus" textStyles="text-center"/>
      
        <motion.p
        variants={fadeIn('up','tween', 0.2 , 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
        >
          <span className='font-extrabold text-white'>Metaverse </span>  

          adalah hal baru di masa depan, di mana kamu bisa menikmati dunia maya dengan merasakan sensasi seakan-akan itu benar-benar nyata, kamu bisa merasakan apa yang kamu rasakan di dunia metaverse ini, karena ini benar-benar 
          <span className='font-extrabold text-white'> kegilaan metaverse </span>  
          saat ini, hanya dengan menggunakan perangkat 
          <span className='font-extrabold text-white'> VR </span>
          kamu dapat dengan mudah menjelajahi dunia metaverse yang kamu inginkan, bahkan menjadikan impianmu menjadi kenyataan. Mari kita 
          <span className='font-extrabold text-white'> jelajahi </span>  
           kegilaan metaverse dengan men-scroll ke bawah.
        </motion.p>

        <motion.img 
        variants={fadeIn('up','tween', 0.3 , 1)}
        src='/arrow-down.svg'
        alt='arrow-down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
        />

      </motion.div>
    
    
  </section>
);

export default About;
