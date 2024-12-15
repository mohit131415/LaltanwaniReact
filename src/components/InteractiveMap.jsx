import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Loader } from '@googlemaps/js-api-loader'

export default function InteractiveMap() {
  const mapRef = useRef(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
      })

      const google = await loader.load()
      const center = { lat: 19.0760, lng: 72.8777 } // Mumbai coordinates
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
      })

      new google.maps.Marker({
        position: center,
        map,
        title: "Dr. Lal Tanwani's Location",
      })
    }

    initMap()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-card shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold p-6">Our Location</h2>
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
      </div>
    </motion.div>
  )
}

