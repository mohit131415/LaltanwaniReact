import { motion } from 'framer-motion'
import { Download, FileText, FileIcon, FileSpreadsheet } from 'lucide-react'
import {RESOURCE_IMAGES} from "@/constant/constant"

const mockResources = [
  {
    id: '1',
    title: 'Educational Leadership in the 21st Century',
    category: 'Articles',
    downloadCount: 1250,
    thumbnail: RESOURCE_IMAGES.Resource1,
    fileType: 'pdf'
  },
  {
    id: '2',
    title: 'Innovative Teaching Methods',
    category: 'Presentations',
    downloadCount: 890,
    thumbnail: RESOURCE_IMAGES.Resource2,
    fileType: 'xlsx'
  },
  {
    id: '3',
    title: 'Impact of Technology on Learning Outcomes',
    category: 'Research Papers',
    downloadCount: 2100,
    thumbnail: RESOURCE_IMAGES.Resource1,
    fileType: 'pdf'
  },
  {
    id: '4',
    title: 'Student Progress Tracker',
    category: 'Worksheets',
    downloadCount: 750,
    thumbnail: RESOURCE_IMAGES.Resource2,
    fileType: 'xlsx'
  },
]

export default function ResourceList({ searchTerm, category, sortBy, showFreeOnly }) {
  // Filter and sort resources based on props
  const filteredResources = mockResources.filter(resource => 
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || resource.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (category === 'All' || resource.category === category) &&
    (!showFreeOnly || resource.isFree)
  ).sort((a, b) => {
    switch (sortBy) {
      case 'Newest':
        return b.id.localeCompare(a.id)
      case 'Oldest':
        return a.id.localeCompare(b.id)
      case 'Alphabetical':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full bg-card shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-primary text-primary-foreground">
          <tr>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Category</th>
            <th className="px-6 py-3 text-left">Type</th>
            <th className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredResources.map((resource) => (
            <tr key={resource.id} className="border-b border-input">
              <td className="px-6 py-4 font-medium">{resource.title}</td>
              <td className="px-6 py-4">{resource.category}</td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  {resource.fileType === 'pdf' && <FileText className="h-4 w-4 text-primary" />}
                  {resource.fileType === 'ppt' && <FileIcon className="h-4 w-4 text-primary" />}
                  {resource.fileType === 'xlsx' && <FileSpreadsheet className="h-4 w-4 text-primary" />}
                  <span>{resource.fileType.toUpperCase()}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm">
                    <Download className="inline-block mr-1 h-4 w-4" />
                    Download
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

