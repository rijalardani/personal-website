const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">Rijal Azhar</span>
        </p>
        <div className="social-footer flex items-center gap-2">
          <a href="https://instagram.com/rjlazhr" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/rijalazhar" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill text-2xl"></i>
          </a>
          <a href="https://github.com/rijalardani" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
