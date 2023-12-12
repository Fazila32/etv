import React from 'react'
import "./advisory-coucil.css"
const Advisory_Council = () => {
  const divData = [
    {
      id: 1,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 3,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 4,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 5,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 6,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 7,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 8,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 9,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      id: 10,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 11,
      imageUrl: 'https://placekitten.com/300/200', // Replace with your image URLs
      title: 'Div 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];


  return (
    <div className=' light-bg'>
      <div className='container'>
      <div className='hero-text-clr ad-text text-center fw-bold text-uppercase pt-3'>
        <div>Workforce</div> Development 
      </div>
      <div className='darkO-txt  text-center fw-bold ad-text2'>ADVISORY COUNCIL</div>
      </div>
      <div className="container mt-5">
      <div className="row mainRowCol">
        {divData.slice(0, 8).map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 mb-4">
            <div className="mb-4 pb-4 border mx-2">
              <img src={item.imageUrl} alt={item.title} className="img-fluid" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row custom-width  mx-auto">
        
        {divData.slice(8, 11).map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="mb-4 pb-4 border mx-2">
              <img src={item.imageUrl} alt={item.title} className="img-fluid" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        
      </div>

    </div>
    </div>
  )
}

export default Advisory_Council
