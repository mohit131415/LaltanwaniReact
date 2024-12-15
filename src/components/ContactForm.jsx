import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    // Here you would typically show a success message to the user
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex flex-col items-center px-4 sm:px-6 lg:px-8 xl:px-10"
>
  <div className="bg-card p-6 text-center w-full max-w-lg lg:max-w-2xl xl:max-w-3xl mb-6">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Contact Information</h2>
    <div className="space-y-3 sm:space-y-4 lg:space-y-5">
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4">
        <Phone className="text-primary" />
        <span className="text-sm sm:text-base lg:text-lg">+91 98765 43210</span>
      </div>
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4">
        <Mail className="text-primary" />
        <span className="text-sm sm:text-base lg:text-lg">contact@drlaltanwani.com</span>
      </div>
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4">
        <Clock className="text-primary" />
        <span className="text-sm sm:text-base lg:text-lg">Monday - Friday: 9:00 AM - 5:00 PM</span>
      </div>
    </div>
  </div>

  <div className="bg-card shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col w-full max-w-md sm:max-w-lg lg:max-w-2xl text-center">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Send a Message</h2>
    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1 text-left">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject of your message"
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-left">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message here..."
          rows={4}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Sending...</>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </form>
  </div>

  <div className="pt-8 sm:pt-12 lg:pt-16 flex flex-col items-center">
    <SectionHeading title="Connect on Social Media" />
    <div className="flex space-x-4 sm:space-x-8 lg:space-x-10 mt-4">
      <a href="#" className="p-2 sm:p-4 lg:p-6 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
        <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
      </a>
      <a href="#" className="p-2 sm:p-4 lg:p-6 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
        <Twitter className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
      </a>
      <a href="#" className="p-2 sm:p-4 lg:p-6 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
        <Youtube className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
      </a>
      <a href="#" className="p-2 sm:p-4 lg:p-6 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
        <Instagram className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
      </a>
      <a href="#" className="p-2 sm:p-4 lg:p-6 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors">
        <FaWhatsapp className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
      </a>
    </div>
  </div>
</motion.div>

  )
}
