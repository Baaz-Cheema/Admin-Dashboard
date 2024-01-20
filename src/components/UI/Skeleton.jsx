import { motion } from "framer-motion"

export default function Skeleton({ className }) {
    return (
        <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={className}
        ></motion.div>
    )
}