import React from "react";

const Blogs = () => {
  return (
    <div className="w-full m-0 px-6 bg-indigo-50 dark:bg-gray-900 text-gray-800 dark:text-white" id="blogs">
      <div className="py-8 cursor-pointer">
        <h1 className="text-3xl font-bold text-center mb-6">Movie Facts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transition duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500">
            <div className="relative group">
              <img
                src="https://img.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-clapper-with-empty-fields-vector-illustration_1284-66163.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Fact 1"
                className="w-full h-48 object-cover rounded transition duration-300 group-hover:blur-sm"
              />
              <a
                href="/blog/1"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
              >
                Read More
              </a>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Fact 1: The First Motion Picture
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              "Roundhay Garden Scene" (1888) is considered the first movie ever made, marking the birth of cinema with a brief silent clip.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transition duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500">
            <div className="relative group">
              <img
                src="https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Fact 2"
                className="w-full h-48 object-cover rounded transition duration-300 group-hover:blur-sm"
              />
              <a
                href="/blog/2"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
              >
                Read More
              </a>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Fact 2: The Longest Movie Ever Made
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              "Logistics" holds the record for the longest movie, running over 857 hours and documenting a product's journey from creation to sale.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transition duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500">
            <div className="relative group">
              <img
                src="https://img.freepik.com/free-photo/movie-elements_1048-5039.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Fact 3"
                className="w-full h-48 object-cover rounded transition duration-300 group-hover:blur-sm"
              />
              <a
                href="/blog/3"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
              >
                Read More
              </a>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Fact 3: Record-Breaking Production Costs
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              "Pirates of the Caribbean: On Stranger Tides" is one of the most expensive films ever made, costing around $379 million due to lavish production and effects.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transition duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500">
            <div className="relative group">
              <img
                src="https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Fact 4"
                className="w-full h-48 object-cover rounded transition duration-300 group-hover:blur-sm"
              />
              <a
                href="/blog/4"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
              >
                Read More
              </a>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Fact 4: Highest Box Office Earnings
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              "Avatar" stands as one of the highest-grossing films of all time, driven by its revolutionary 3D technology and global appeal.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transition duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500">
            <div className="relative group">
              <img
                src="https://img.freepik.com/free-vector/cinema-symbols_1284-17076.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Fact 5"
                className="w-full h-48 object-cover rounded transition duration-300 group-hover:blur-sm"
              />
              <a
                href="/blog/5"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
              >
                Read More
              </a>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Fact 5: Oscar Milestone
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              "Ben-Hur" (1959) once held the record for the most Academy Awards won, with 11 Oscars that set a benchmark for cinematic excellence.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transition duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500">
            <div className="relative group">
              <img
                src="https://img.freepik.com/premium-vector/vector-cinema-poster-popcorn-cup-clapper-board_208581-713.jpg?uid=R186966907&ga=GA1.1.914190067.1731132308&semt=ais_hybrid"
                alt="Fact 6"
                className="w-full h-48 object-cover rounded transition duration-300 group-hover:blur-sm"
              />
              <a
                href="/blog/6"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
              >
                Read More
              </a>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Fact 6: Global Cultural Impact
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Franchises like "Star Wars" have reshaped global pop culture, influencing language, fashion, and community identities worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
