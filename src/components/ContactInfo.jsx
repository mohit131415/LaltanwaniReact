

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="text-primary" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-primary" />
            <span>contact@drlaltanwani.com</span>
          </div>
          {/* <div className="flex items-center space-x-3">
            <MapPin className="text-primary" />
            <span>123 Education Street, Mumbai, India</span>
          </div> */}
          <div className="flex items-center space-x-3">
            <Clock className="text-primary" />
            <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-2">Connect on Social Media</h3>
            <div className="flex space-x-2">
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

