import React from "react";

const About = () => {
  return (
    <div className="w-full bg-indigo-50 dark:bg-gray-900 text-gray-800 dark:text-white" id="about">
      <div className="py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <section className="max-w-4xl mx-auto mb-12 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We are dedicated to delivering the best cinematic experiences by curating the latest movie trends and timeless classics, inspiring a love for storytelling in every viewer.
          </p>
        </section>
        <section className="max-w-4xl mx-auto mb-12 p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/view-black-white-person-attending-theatre_23-2151184586.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
              alt="Our History"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Founded by passionate movie enthusiasts, our journey began with a simple idea—to bring the magic of film closer to viewers. Over the years, we have evolved into a dynamic community that celebrates cinematic art through innovation and creativity, adapting to changing technologies and global trends.
            </p>
          </div>
        </section>
        <section className="max-w-4xl  mx-auto mb-12 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 hover:scale-105 hover:transition duration-300 transform cursor-pointer border-2 border-black  dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col items-center">
              <img
                src="https://img.freepik.com/free-photo/3d-icon-travel-with-man_23-2151037420.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Alice"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Alice</h3>
              <p className="text-gray-700 dark:text-gray-300">Director</p>
            </div>
            <div className="bg-gray-50 hover:scale-105 hover:transition duration-300 transform cursor-pointer dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col items-center border-2 border-black">
              <img
                src="https://img.freepik.com/premium-vector/happy-man-profile-account-character_24877-83087.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Bob"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bob</h3>
              <p className="text-gray-700 dark:text-gray-300">Producer</p>
            </div>
            <div className="bg-gray-50 hover:scale-105 hover:transition duration-300 transform cursor-pointer dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col items-center border-2 border-black">
              <img
                src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Carol"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Carol</h3>
              <p className="text-gray-700 dark:text-gray-300">Screenwriter</p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto md:p-4 px-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Future</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Looking ahead, we plan to expand our platform with cutting-edge features and global partnerships. Our vision is to revolutionize how movie lovers connect with films and foster an ever-growing community that celebrates the art of storytelling while continuously pushing the boundaries of cinematic innovation.
          </p>
          <div className="mb-6 text-gray-700 dark:text-gray-300">
            <p className="mb-2 font-semibold">
              The integration of AI in the movie industry promises to reshape filmmaking:
            </p>
            <ul className="list-disc ml-4 space-y-1">
              <li><strong>Script Development & Analysis:</strong> AI can analyze successful scripts and predict audience reactions to help create more engaging stories.</li>
              <li><strong>Visual Effects & Animation:</strong> Machine learning optimizes rendering and generates realistic visuals faster.</li>
              <li><strong>Personalized Viewing Experiences:</strong> Algorithms curate tailored recommendations and enable interactive storytelling.</li>
              <li><strong>Marketing & Distribution:</strong> Data-driven insights target audiences precisely and enhance promotional strategies.</li>
              <li><strong>Production Automation:</strong> Automation in virtual sets and editing tools streamlines workflows, reducing costs and boosting quality.</li>
            </ul>
          </div>
          <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
          <video autoPlay infinite="true" controls loop="true"
              title="Our Future Plans"
              src="https://cdn.pixabay.com/video/2023/10/01/183107-870151708_tiny.mp4"
              className="w-full h-full py-2 object-cover"
              allowFullScreen
            />
          </div>
        </section>
 </div>
    </div>
  );
};

export default About;
