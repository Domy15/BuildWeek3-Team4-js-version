import  { useState } from "react";
import NewsHome from "../homepage/NewsHome"; 

const Homepage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6); 

  const handleShowMore = () => {
    setVisiblePosts((prev) => prev + 6); 
  };

  return (
    <div>
      
      <NewsHome visiblePosts={visiblePosts} showInput={false} />
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleShowMore}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default Homepage;



