import React from 'react'

const Sidebar = () => {
  return (
    <div className="p-4 bg-pink-50 rounded shadow space-y-4">
      <div>
        <h4 className="font-bold mb-2">About Me</h4>
        <p className="text-sm">Hi, I'm Soumyodip — bringing you the sweetest Mother’s Day stories & ideas ❤️</p>
      </div>
      <div>
        <h4 className="font-bold mb-2">Categories</h4>
        <ul className="text-sm space-y-1">
          <li>Stories</li>
          <li>Recipes</li>
          <li>Gift Ideas</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
