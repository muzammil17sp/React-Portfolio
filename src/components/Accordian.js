import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AnimateSharedLayout, motion } from 'framer-motion';
const Accordian = ({ question, answer, quesAns }) => {
    const [open, setopen] = useState(false)

    return (
        <motion.div layout className="px-3 py-6 border-b-2 " onClick={() => setopen(!open)}>
            <motion.div layout className="flex items-center justify-between cursor-pointer" >
                <motion.p className="text-white font-lower font-bold text-xl">{question}</motion.p>
                {
                    open ?
                        <KeyboardArrowUpIcon style={{ color: "#fff" }} />
                        :
                        <KeyboardArrowDownIcon style={{ color: "#fff" }} />
                }
            </motion.div>
            {
                open &&
                <motion.div layout className="mt-5">
                    {
                        answer ?
                            <motion.p className="font-lower text-white transition">{answer}</motion.p> :
                            quesAns.map((ans) => (
                                <motion.p key={ans} className="font-lower text-white transition">
                                    {ans}
                                </motion.p>
                            ))
                    }

                </motion.div>
            }
        </motion.div>
    )
}

export default Accordian
