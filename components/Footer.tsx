import React from 'react'
import { SparklesCore } from './ui/sparkles'

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-t from-primary to-background py-4 overflow-hidden">
            {/* Effect: Random particles. */}
            <div className="absolute inset-0 h-full w-full">
                {/* Gradients */}
                <div className="absolute inset-x-0 sm:inset-x-10 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-full sm:w-3/4 blur-sm" />
                <div className="absolute inset-x-0 sm:inset-x-10 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-full sm:w-3/4" />
                <div className="absolute inset-x-0 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary-light to-transparent h-[5px] w-full sm:w-1/2 blur-sm" />
                <div className="absolute inset-x-0 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary-light to-transparent h-px w-full sm:w-1/2" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <div className="relative container mx-auto text-center">
                <p className="text-accent">simonlotzkar.com</p>
                <p>{new Date().toLocaleString()}</p>
            </div>
        </footer>
    )
}

export default Footer