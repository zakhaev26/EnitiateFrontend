// Import necessary components and modules
"use client"
import AnimatedTextVar from '@/components/animations/textVariant';
import { useEffect, useState, useMemo } from 'react';
import './posts.css';
import withAuth from "@/security/withAuth"
import Card from "@/components/Card"
import PaginationButton from "@/components/paginationButton"
import Loader from "@/components/Loader"
import SignoutButton from "@/components/SignoutButton"

// Functional component for rendering a container of posts
const Container = () => {
  // State variables for managing loading state, posts data, current page, and posts per page
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[] | any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts data from the provided API endpoint
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_JSON_PLACEHOLDER_ALL_POSTS}`);
        const data = await res.json();
        // Set the fetched data and mark loading as false
        setPosts(data);
        setLoading(false);
      } catch (error: any) {
        // Log any errors that occur during data fetching and mark loading as false
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to handle pagination
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Memoized calculation of paginated posts based on current page and posts per page
  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, posts, postsPerPage]);

  return (
    <>
      {/* Loader component to indicate loading state */}
      <Loader loading={loading} />
      {!loading && (
        <>
          {/* Animated text component displaying "POSTS" */}
          <div className='text-center mt-10' >
            <AnimatedTextVar text="POSTS" size="30" />
          </div>
          {/* Pagination buttons */}
          <div className="pagination">
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
              <PaginationButton key={index} index={index} currentPage={currentPage} paginate={paginate} />
            ))}
          </div>
          {/* Container for displaying paginated posts */}
          <div className='flex justify-between items-stretch flex-wrap p-4 box-border cursor-pointer'>
            {paginatedPosts.map((post: Post) => (
              <Card key={post.id} body={post.body} id={post.id} title={post.title} userId={post.userId} />
            ))}
          </div>
          {/* Signout button component */}
          <SignoutButton />
        </>
      )}
    </>
  );
};

// Wrap the Container component with authentication HOC
const AuthenticatedContainer = withAuth(Container);

// Export the authenticated container component
export default AuthenticatedContainer;
