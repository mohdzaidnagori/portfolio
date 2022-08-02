import React from 'react'
import './Home.css'
import { motion } from "framer-motion"

const Home = () => {
    const text1 = "Hi,"
    const text3 = "web.developer"
    const text2 = "I'm.Zaid "
    const spanVariants = {
        hidden:{
            opacity:0,
            translateX:-50,
            rotate: 360
        },
        visible:{
            opacity:1,
            translateX:0,
            rotate: 0,
            scaleY:1
            // scaleY:[1,1.3,0.8,0.6,0.8,1.3,1],
        },
        hover:{
            scaleY:[1,1.3,0.8,0.6,0.8,1],
            transition: { type: "spring",duration:0.8  },
        }
    }
   
   
   
  return (
    <div className='home'>

        <div className="text-zone">
            <h1>
                {text1.split("").map((letter,id)=>{
                   
                       return (
                          <motion.span
                          variants={spanVariants}
                          initial='hidden'
                          animate='visible'
                          transition={{duration:0.5,delay:id * 0.5}}  
                          whileHover='hover'
                          key={id}>
                          {letter}
                          </motion.span>
                       )
                    
                
                  
                
            }
                
            )}</h1>
            <h1>{text2.split("").map((letter,id)=>{
                 
                    if(letter === '.'){
                        return (
                            <motion.span
                            style={{opacity:0}}
                              key={id}>
                            {letter}
                             </motion.span>
                        )
                       
                    }
                    else{
                       return (
                         <motion.span
                         variants={spanVariants}
                         initial='hidden'
                          animate='visible'
                          transition={{duration:0.2,delay:id * 0.2}}  
                          whileHover='hover'
                         key={id}>
                         {letter}
                         </motion.span>
                       )
                    
                   }
            }
              
            )}</h1>
            <h1>{text3.split("").map((letter,id)=>{
                 
                    if(letter === '.'){
                        return (
                            <motion.span
                            style={{opacity:0}}
                              key={id}>
                            {letter}
                             </motion.span>
                        )
                       
                    }
                    else{
                       return (
                         <motion.span
                         variants={spanVariants}
                         initial='hidden'
                          animate='visible'
                          transition={{duration:0.2,delay:id * 0.1}}  
                          whileHover='hover'
                         key={id}>
                         {letter}
                         </motion.span>
                       )
                    
                   }
            }
              
            )}</h1>
            <p>Full stack web developer/css expert</p>
        </div>
    </div>
  )
}

export default Home
