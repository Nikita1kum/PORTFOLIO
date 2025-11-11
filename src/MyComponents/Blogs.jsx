import { ShineBorder } from "@/components/magicui/shine-border"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useTheme } from "@/utils/darkThemeProvider"
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react'
import React from 'react'

const Blogs = () => {
    return (
        <section id='blogs' className='py-24'>
            <div className='max-w-7xl mx-auto text-center'>
                <h2 className='flex justify-center items-center mb-6 text-3xl md:text-4xl font-bold'>
                    <BookOpen style={{ width: "2rem", height: '2rem' }} className='mr-4' />
                    My Blogs
                </h2>
                <p className='px-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>
                    Sharing my thoughts and learnings about technology and development.
                </p>

                <div className='mt-24 flex flex-col items-center justify-center'>
                    <p className='text-4xl md:text-5xl font-extrabold text-green-600 animate-pulse'>
                        Upcoming...
                    </p>
                    <p className='mt-4 text-gray-500 dark:text-gray-400 text-lg'>
                        Stay tuned — exciting posts are on the way 🚀
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Blogs
