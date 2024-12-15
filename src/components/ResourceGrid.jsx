import { motion } from 'framer-motion'
import { Download, FileText, FileIcon, FileSpreadsheet } from 'lucide-react'
import { RESOURCE_IMAGES } from "@/constant/constant"



const mockResources = [
  {
    id: '1',
    title: 'Educational Leadership in the 21st Century',
    category: 'Articles',
    thumbnail: RESOURCE_IMAGES.Resource1,
    fileType: 'pdf'
  },
  {
    id: '2',
    title: 'Innovative Teaching Methods',
    category: 'Presentations',
    thumbnail: RESOURCE_IMAGES.Resource2,
    fileType: 'xlsx'
  },
  {
    id: '3',
    title: 'Impact of Technology on Learning Outcomes',
    category: 'Research Papers',
    thumbnail: RESOURCE_IMAGES.Resource1,
    fileType: 'pdf'
  },
  {
    id: '4',
    title: 'Student Progress Tracker',
    category: 'Worksheets',
    thumbnail: RESOURCE_IMAGES.Resource2,
    fileType: 'xlsx'
  },
]

export default function ResourceGrid({ searchTerm, category, sortBy, showFreeOnly }) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredResources.map((resource, index) => (
        <motion.div
          key={resource.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="bg-card shadow-lg rounded-lg overflow-hidden" style={{ height: '411px' }}>
            <div className="relative flex flex-col justify-between" style={{ height: '100%' }}>
              <img
                src={resource.thumbnail}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                {resource.isFree ? 'Free' : <FileIcon className="h-10 w-9" />}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  {resource.fileType === 'pdf' && <FileText className="h-4 w-4 text-primary" />}
                  {resource.fileType === 'ppt' && <FileIcon className="h-4 w-4 text-primary" />}
                  {resource.fileType === 'xlsx' && <FileSpreadsheet className="h-4 w-4 text-primary" />}
                  <span className="text-sm text-muted-foreground">{resource.category}</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

