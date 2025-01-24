'use client'

import Link from 'next/link'
import { Code, Github } from 'lucide-react'
import GradientBackground from '../components/GradientBackground'

const projects = [
  {
    title: "Azure Synapse Lakehouse Implementation",
    description: "Developed pipelines to ingest data from SAP S4/HANA into Azure Synapse Lakehouse, enabling real-time data analysis and visualization using Power BI.",
    repo: "https://github.com/KarthikUKumar/"
  },
  {
    title: "Snowflake Implementation",
    description: "Designed and implemented a data warehouse solution using Snowflake, enabling real-time data analysis and visualization.",
    repo: "https://github.com/KarthikUKumar/"
  },
  {
    title: "Universal Automation Tool Development",
    description: "A full-stack AI text summarizer app using Replit, Node.js, Express, and the Hugging Face API.",
    repo: "https://github.com/KarthikUKumar/Universal-Automation-Tool-Development.git"
  },
  {
    title: "Snowflake training",
    description: "Trained over 150+ people on Snowflake architecture.",
    repo: "https://github.com/KarthikUKumar/Snowflake-Training.git"
  },
  {
    title: "Bigquery Implementation",
    description: "Built pipelines to ingest data from various sources into BigQuery, enabling real-time data analysis and visualization using Fivetran.",
    repo: "https://github.com/KarthikUKumar/"
  },
  {
    title: "Fertilizer Management and Purchase System",
    description: "Designed a web-based system for farmers to access fertilizer information and purchase directly from dealers, leveraging robust backend and frontend technologies.",
    repo: "https://github.com/KarthikUKumar/Fertilizer-Management-and-Purchase-System.git"
  }
]

export default function Projects() {
  return (
    <GradientBackground>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-8 hover:text-teal-400 transition-colors">
          {/* Add your back button content here if needed */}
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 flex items-center">
          <Code className="w-10 h-10 inline-block mr-4" />
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-teal-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out 
                              transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-teal-500">{project.title}</h2>
                  <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-teal-500 hover:text-teal-400 transition-colors" />
                  </Link>
                </div>
                <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientBackground>
  )
}