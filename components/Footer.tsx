import React from 'react'
import { SparklesCore } from './ui/sparkles'

/**
 * Footer displays the website's name and the current date.
 * Has a sparkle and glow effect.
 *
 * @component
 * @returns {JSX.Element} The rendered Footer component.
 *
 * @author SimonLotzkar
 */
const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-t from-primary to-background py-4 overflow-hidden">

            {/* Section: Sparkle and glow effects. */}
            <div className="absolute inset-0 h-full w-full">

                {/* Gradients: Creates glow effect. */}
                <div className="absolute inset-x-0 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-full sm:w-3/4 blur-sm" />
                <div className="absolute inset-x-0 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-full sm:w-3/4" />
                <div className="absolute inset-x-0 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary-light to-transparent h-[5px] w-full sm:w-1/2 blur-sm" />
                <div className="absolute inset-x-0 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary-light to-transparent h-px w-full sm:w-1/2" />

                {/* Radial Gradient: Limits glow effect to smaller width. */}
                <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

                {/* Effect: Sparkles. */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={600}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Section: Website name, date and time. */}
            <div className="relative container mx-auto text-center">

                {/* Text: Website name. */}
                <p className="text-accent">simonlotzkar.com</p>

                {/* Text: Date and time. */}
                <p>{new Date().toLocaleString()}</p>
            </div>
        </footer>
    )
}

export default Footer