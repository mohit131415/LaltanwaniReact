import React from 'react'
import ResourceSearch from '../components/ResourceSearch'
import SectionHeading from '../components/SectionHeading'

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading title="Educational Resources" />
      <ResourceSearch />
    </div>
  )
}

export default ResourcesPage

