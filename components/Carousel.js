import React, { useEffect, createRef, useState, useRef } from 'react';
// const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']
const images = ['/imgs/me/me_NY.png','/imgs/me/mepalmtrees.png', '/imgs/me/mesnowb.png', '/imgs/me/meTanky.jpg']

// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']


const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});
  // console.log(refs)

  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.



    refs[i].current.scrollIntoView({
    // refs[i].current.scrollTop({

      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      // block: 'nearest',
      block: 'end',

      //      Defines horizontal alignment.
      inline: 'start',
      // inline: 'nearest',
    });


   
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );


  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  function Counter() {
    let [count, setCount] = useState(0);
  
    useInterval(() => {
      // Your custom logic here
      nextImage();
      setCount(count + 1);
    }, 1000);
  
    // return <h1>{count}</h1>;
  }
  Counter();


  return (
  // Images are placed using inline flex. We then wrap an image in a div
  // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
  // Finally the image itself will be 100% of a parent div. Outer div is
  // set with position relative, so we can place our cotrol buttons using
  // absolute positioning on each side of the image.
    // <div className="flex justify-center w-screen md:w-1/2 items-center">
    <div className="flex justify-end w-3/4 items-center">
      <div className="relative w-full">
        {/* <div className="carousel"> */}
        <div className="inline-flex overflow-x-hidden snap-mandatory snap-x">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" />
              {/* <img src={img} className="w-full h-full" /> */}

            </div>
          ))}
          {sliderControl(false)}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


// //APP Component
// class App extends React.Component {

//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div className="w-screen flex justify-center">
//         <Carousel />
//        </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))