import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from '@/components/magicui/shine-border'
import { useTheme } from '@/utils/darkThemeProvider'
import { Button } from '@/components/ui/button'
import { ExternalLink, FolderOpen, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Projects = () => {

    const { resolvedTheme } = useTheme()

    const projects = [
        {
            title: 'Rights to Reach – Complaint Issuing System',
            description: 'A web-based complaint management system built with Laravel and MySQL.',
            fullDescription: 'Developed a platform that enables users to register, track, and manage complaints efficiently. Features include user authentication, CRUD operations, and issue tracking through an intuitive UI.',
            image: '/images/rights-to-reach.png',
            alt: 'rights-to-reach-img',
            technologies: ['PHP', 'Laravel', 'MySQL', 'XAMPP', 'HTML', 'CSS'],
            github: 'https://github.com/Nikita1kum/rights-to-reach',
            live: '#',
            featured: true,
        },
        {
            title: 'Expense Tracker',
            description: 'A responsive web app to manage and visualize personal expenses.',
            fullDescription: 'Developed using HTML, CSS, and JavaScript with Local Storage API for persistence. Features include category-based expense tracking and dynamic chart visualization for monthly spending.',
            image: '/images/expense_tracker.png',
            alt: 'expense-tracker-img',
            technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'Charts'],
            github: 'https://github.com/Nikita1kum/Expense-Tracker-SW', 
            live: '#',
            featured: true,
        },
        {
         
            title: 'Panda E-commerce Website',
            description: 'A responsive online shopping platform for a seamless product browsing and purchasing experience.',
            fullDescription: 'Developed using React.js for dynamic interfaces and Tailwind CSS for modern styling, this project allows users to explore product categories, add items to the cart, and proceed with secure checkouts. The codebase is modular for scalability and easy maintenance.',
            image: '/images/panda_ecommerce.png',
            alt: 'panda-ecommerce-img',
            technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Redux'],
            github: 'https://github.com/Nikita1kum/Panda_ecommerce_website', 
            live: '#',
            featured: true,
        },
        {
            title: 'Liver Disease Prediction using ML',
            description: 'Machine learning-based web app for early liver disease diagnosis.',
            fullDescription: 'Implemented CNN, SVM, and KNN models using Flask and Keras. Integrated MySQL for data storage and visualization to assist in clinical decision-making.',
            image: '/images/liver-disease-prediction.png',
            alt: 'liver-disease-prediction-img',
            technologies: ['Python', 'Flask', 'MySQL', 'Keras', 'NumPy', 'Matplotlib'],
            github: 'https://github.com/Nikita1kum', 
            live: '#',
            featured: true,
        },
    ]

    return (
        <section id='projects' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'>
                        <FolderOpen style={{ width: "2rem", height: '2rem' }} className='mr-4' />
                        My Projects
                    </h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>
                        Here are some of my key projects showcasing my expertise in full-stack development, cloud, and machine learning.
                    </p>
                </div>

                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4'>
                    {projects.map((project) => (
                        <Card key={project.title} className='group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border-0 shadow-lg'>
                            {project.featured && (
                                <ShineBorder shineColor={resolvedTheme === "dark" ? "green" : "black"} borderWidth={2} />
                            )}
                            <CardHeader>
                                <CardTitle className='text-xl group-hover:text-green-600 transition-colors duration-300 leading-tight'>
                                    {project.title}
                                </CardTitle>
                                <CardDescription className='text-sm'>{project.description}</CardDescription>
                                <CardAction>
                                    <Button variant='ghost' size='icon'>
                                        <a href={project.github} target='__blank' rel='noopener noreferrer'>
                                            <Github style={{ width: '1.2rem', height: '1.2rem' }} />
                                        </a>
                                    </Button>
                                    <Button variant='ghost' size='icon'>
                                        <a href={project.live} target='__blank' rel='noopener noreferrer'>
                                            <ExternalLink style={{ width: '1.2rem', height: '1.2rem' }} />
                                        </a>
                                    </Button>
                                </CardAction>
                            </CardHeader>

                            <CardContent className='relative w-full'>
                                <img
                                    className="rounded-md w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                    src={project.image}
                                    alt={project.alt}
                                    loading="lazy"
                                />
                            </CardContent>

                            <CardFooter className='overflow-x-scroll scrollbar-hide gap-1 mr-5'>
                                {project.technologies.map((tech, index) => (
                                    <Badge key={index} variant='outline'>{tech}</Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
