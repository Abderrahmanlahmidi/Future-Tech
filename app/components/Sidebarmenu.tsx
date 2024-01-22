'use client'
import React , {useState, useEffect} from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';


type Props = {
  isOpen: boolean;
  onClose: () => void;
  
}

function Sidebarmenu({isOpen, onClose}: Props) {
  
  const controls = useAnimation();
  const [isOverlayVisible, setOverlayVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setOverlayVisible(true);
      controls.start('open');
    } else {
      setTimeout(() => {
        setOverlayVisible(false);
      }, 200);
      controls.start('closed');
    }
  }, [isOpen, controls]);

  const overlayVariants: Variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const sidebarVariants: Variants = {
    open: { x: 0, transition: { ease: 'easeInOut', duration: 0.2 } },
    closed: { x: '100%', transition: { ease: 'easeInOut', duration: 0.2 } },
  };

  const bounceTransition = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  };

   
  return (
    <motion.div
      className={`fixed  top-0 left-0 h-full inset-0 bg-Dark-Primary bg-opacity-50 w-full bg-overlay z-50 ${isOverlayVisible ? 'block' : 'hidden'}`}
      initial="closed"
      animate={controls}
      variants={overlayVariants}
      onClick={onClose}
    >
      <motion.div
        className="flex fixed  top-0 right-0 w-[343px] bg-white h-full flex-col bg-[#262626] justify-between  p-[24px]"
        initial="closed"
        animate={controls}
        variants={sidebarVariants}
        transition={bounceTransition}
        onClick={(e) => e.stopPropagation()}
      >

      </motion.div>
   </motion.div>
   
  )
}
    
export default Sidebarmenu;