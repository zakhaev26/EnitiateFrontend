interface Post {
    id: number,
    body: string,
    userId: number,
    title: string,
}

interface Param {
    params: {
        postID: number,
    }
}


interface LoaderProps {
    loading: boolean;
  }
  
  interface ToastProps {
    message : string
  }

interface PaginationProps {
    index: number,
    paginate : (pageNumber :number) => void,
    currentPage :number,
  }