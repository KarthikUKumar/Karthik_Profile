'use client'

import Link from 'next/link'
import { Briefcase} from 'lucide-react'
import GradientBackground from '../components/GradientBackground'

export default function Experience() {
  return (
    <GradientBackground>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-8 hover:text-teal-400 transition-colors">
          
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">
          <Briefcase className="w-8 h-8 inline-block mr-2" />
          Experience
        </h1>

        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-400">Data Engineer at Lumen Technologies Pvt Ltd</h2>
          <p className="mb-2">Aug 2021 - Till Date</p>
          <p>
            <ul>
          <li>Led transition from SAP to Azure Synapse Lakehouse, designing Power BI dashboards for financial reports.</li>
          <li>Built and optimised data pipelines for financial data using Azure Data Factory as ETL tool and Spark.</li>
          <li>Increased the performance by 65 percentage and reduced the manual intervention to 20 percentage.</li>
          <li>Implemented CI/CD on Azure DevOps for seamless production deployment.</li>
          <li>Construct a detailed data model, illustrating the lineage and flow of data through all layers of the system</li>
          <li>Improved customer satisfaction by streamlining processes and reducing engineering time through automation.</li>
          <li>Partnered with Google to automate Hadoop-to-cloud migrations (BigQuery, Azure, Databricks)</li>
          <li>Trained over 150+ people on Snowflake architecture</li>
          </ul>
          </p>
        </div>
        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-400">Intern at Avishk Sustainable Solutions Pvt Ltd</h2>
          <p className="mb-2">Jan 2020 - Aug 2020</p>
          <p>
            <ul>
          <li>Developed a Fertilizer Database Management System enabling farmers to access detailed fertilizer information and purchase directly from dealers.</li>
          <li>Utilized JetBrains DataGrip and PHP to design server-side functionalities for seamless user interactions.</li>
          <li>Designed and managed a MySQL database to securely store and retrieve fertilizer details.</li>
          <li>Optimized the system for efficient data handling, improving the user experience for farmers and dealers alike.</li>
          </ul>
          </p>
        </div>
      </div>
    </GradientBackground>
  )
}