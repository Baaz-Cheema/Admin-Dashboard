import { motion, AnimatePresence } from "framer-motion"

export default function ErrorMessage({error, message}) {
    return <AnimatePresence>
        {error && <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ x: '-50%' }}
            className="bg-red-500 fixed z-10 top-10 w-[14rem] left-1/2 text-center px-3 rounded-lg font-bold font-roboto py-2">
            {message}
        </motion.p>}
    </AnimatePresence>
}