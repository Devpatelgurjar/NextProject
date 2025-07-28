import React from 'react'

const Footer = () => {
  return (

      <footer className="bg-black text-white px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* About Us */}
    <div>
      <h3 className="font-semibold mb-3 text-lg">About Us</h3>
      <p className="text-sm text-neutral-300 leading-relaxed">
        Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, inspiring confident musicians.
      </p>
    </div>
    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
      <ul className="space-y-2 text-sm text-neutral-300">
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Contact</li>
      </ul>
    </div>
    {/* Follow Us */}
    <div>
      <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
      <ul className="flex space-x-4 text-sm text-neutral-300">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
    {/* Contact Us */}
    <div>
      <h3 className="font-semibold mb-3 text-lg">Contact Us</h3>
      <ul className="space-y-2 text-sm text-neutral-300">
        <li>New Delhi, India</li>
        <li>Delhi 10001</li>
        <li>Email: info@musicschool.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>
    </div>
  </div>
  <div className="mt-8 text-center text-xs text-neutral-400">
    © 2024 Music School. All rights reserved.
  </div>
</footer>

  )
}

export default Footer
