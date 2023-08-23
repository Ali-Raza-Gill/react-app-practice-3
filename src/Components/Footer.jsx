import React from 'react'

export default function Footer() {
  let Year = new Date().getFullYear()
  return (
    <footer class="bg-secondary text-center text-lg-start">
      {/* <!-- Copyright --> */}
      <div class="text-center p-3 text-light " >
        © {Year} Copyright. 
        <a class="text-light text-decoration-none" href="https://mdbootstrap.com/"> Raza and company </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  )
}
