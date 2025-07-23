import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/AppBar"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton"
export const Blogs =()=>{

    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    if (!blogs) {
    return <div>Blog not found</div>;
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
        
        <div className=" ">
            {blogs.map(blog =>(
                
                <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author?.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
            />
            
            ))}
            
            
        </div>
        
        </div>
        
    </div>
}