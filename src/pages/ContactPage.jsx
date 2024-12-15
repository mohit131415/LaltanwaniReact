import React from 'react'
import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'

const ContactPage = () => {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12">
        <SectionHeading title="Connect with Me" />
        <div className="mb-16">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

export default ContactPage

