"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({children}: {children: React.ReactNode}) => {
    const pathname =usePathname();
    return (
        <AnimatePresence>
            <div key={pathname} className='px-5 xl:px-10'>
                <motion.div 
                
                initial ={{
                    opacity: 0,
                    x: '-100%',
                }}

                animate ={{
                    opacity: 1,
                    x: '0',
                    transition: {
                        duration: .5,
                        type: 'tween'
                    }
                }}
                
                exit={{
                    x: '100%',
                    opacity: 0,
                    transition: {
                        duration: .5,
                        type: 'tween'
                    }
                }}
                >
                    {children}
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default PageTransition;
