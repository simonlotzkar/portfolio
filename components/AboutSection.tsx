import React from 'react'
import { BentoGrid } from './ui/bento-grid'

const AboutSection = () => {
    return (
        <section id="about">
            <h1 className="text-4xl font-bold py-5 text-center text-secondary">About Me</h1>
            <BentoGrid />
        </section>
    )
}

export default AboutSection