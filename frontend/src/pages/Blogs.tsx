import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/AppBar"
import { useBlogs } from "../hooks"
export const Blogs =()=>{

    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            loading....
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
        
        <div className=" max-w-xl">
            <BlogCard
                authorName={"Skandesh K K"}
                title={"Running makes you feel rejuvenated"}
                content={"Running is a popular form of exercise for a reason. It doesn’t need much equipment, and you can do it just about anywhere or anytime it is convenient for you. Plus, experts say it improves heart health. ‌"}
                publishedDate={"2nd Feb 2024"}
            />
            
        </div>
        
        </div>
        
    </div>
}