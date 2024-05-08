const VisionMission = () => {
    return (
      <div>
        {/* <h2>Vision & Mission</h2>
        <p>
          At EP-Hub, we are dedicated to revolutionizing the way plastic waste is managed, mitigating its environmental impact, and promoting a circular economy.
        </p>
        <p>
          Our platform offers a user-friendly interface designed to streamline the process of plastic waste management for individuals, businesses, and organizations alike.
        </p>
        <p>
          Whether you are a small-scale recycler, a large corporation, or a concerned citizen looking to make a difference, EP-Hub provides the tools and resources you need to take meaningful action against plastic pollution.
        </p>
        <p>
          Together, we can turn the tide against plastic pollution and build a more resilient, sustainable world.
        </p> */}

        <div className='flex flex-row items-center gap-10 border-2 border-green-700 mx-32'>  
            <div className='flex flex-col items-center justify-center gap-5 w-1/2 px-10'>
                <h3 className='text-4xl font-mono overflow-hidden'>Vision</h3>
                <p className='font-mono'>
                At EP-Hub, we are dedicated to revolutionizing the way plastic waste is managed, mitigating its environmental impact, and promoting a circular economy.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-5 p-4 w-1/2'>
                <h3 className='text-4xl font-mono overflow-hidden'>Mission</h3>
                <p className='font-mono'>
                Our platform offers a user-friendly interface designed to streamline the process of plastic waste management for individuals, businesses, and organizations alike. Whether you are a small-scale recycler, a large corporation, or a concerned citizen looking to make a difference, EP-Hub provides the tools and resources you need to take meaningful action against plastic pollution.
                </p>
            </div>
        </div>
      </div>
    )
  }
  
  export default VisionMission;