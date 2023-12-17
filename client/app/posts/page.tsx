"use client"
import AnimatedTextVar from '@/components/animations/textVariant';
import { useEffect, useState, useMemo } from 'react';
import './posts.css';
import withAuth from "@/security/withAuth"
import Card from "@/components/Card"
import PaginationButton from "@/components/paginationButton"
import Loader from "@/components/Loader"
import SignoutButton from "@/components/SignoutButton"


interface Post {
  id: number,
  body: string,
  userId: number,
  title: string,
}


const Container = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[] | any >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_JSON_PLACEHOLDER_ALL_POSTS}`);
        const data = await res.json();
        setPosts(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error :any) {
        console.log(error.message);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);

  const paginate = (pageNumber : number) => {
    setCurrentPage(pageNumber);
  };

  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, posts, postsPerPage]);

  return (
    <>
      <Loader loading={loading} />
      {!loading && (
        <>
          <div className='text-center mt-10' >
            <AnimatedTextVar text="POSTS" size="30" />
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
              <PaginationButton index={index} currentPage={currentPage} paginate={paginate} />
            ))}
          </div>
          <div className='flex justify-between items-stretch flex-wrap p-4 box-border cursor-pointer'>
            {paginatedPosts.map((post : Post) => (
              <Card key={post.id} body={post.body} id={post.id} title={post.title} userId={post.userId} />
            ))}
          </div>
          <SignoutButton />
        </>
      )}
    </>
  );
};

const AuthenticatedContainer = withAuth(Container);

export default AuthenticatedContainer;
