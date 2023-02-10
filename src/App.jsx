import React from "react";

function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-blueMain min-h-screen">
        <div className=" rounded-lg max-w-xs h-3/4 bg-blueCard shadow-lg p-4">
          <div className="relative flex justify-center">
            <img
              src="\image-equilibrium.jpg"
              className="w-full rounded-lg"
              alt="Equilibrum image"
            />
            <div class="flex justify-center items-center absolute inset-0 bg-cyan opacity-0 hover:opacity-75 hover:cursor-pointer transition-opacity duration-150">
              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" className="hover:scale-150 duration-150">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h48v48H0z" />
                  <path
                    d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white py-4 text-md">
            <h1 className="font-semibold mb-3 text-lg">
              <a href="" className="hover:text-cyan duration-150">
                Equilibrum #3429
              </a>
            </h1>
            <p className="font-light text-softBlue mb-3">
              Our Equilibruim collection promotes balance and calm
            </p>
            <div className="flex justify-between mb-3">
              <span className="flex items-center font-normal text-cyan">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"
                  />
                </svg>
                <p className="ml-2">0.041ETH</p>
              </span>
              <span className="flex items-center font-normal text-softBlue">
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                    fill="#8BACD9"
                  />
                </svg>
                <p className="ml-2">3 days left</p>
              </span>
            </div>
            <hr className="text-softBlue mb-3" />
            <div className="flex items-center">
              <img
                src="\image-avatar.png"
                width="30px"
                height="30px"
                alt="Avatar"
                className="border border-white rounded-3xl"
              />
              <p className="text-sm text-softBlue ml-3">
                Creation of{" "}
                <a href="#" className="text-white hover:text-cyan duration-150">
                  {" "}
                  Jules Wyvern
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
