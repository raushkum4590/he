

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-10">
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Press</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Community</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Diversity & Belonging</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Accessibility</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Airbnb Associates</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Frontline Stays</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Host</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Host your home</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Host an Online Experience</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Host an Experience</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Responsible hosting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Our COVID-19 Response</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Cancellation options</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Neighborhood Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; 2024 Airbnb, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
          
        
          </div>
        </div>
      
    </footer>
  );
}

export default Footer;
