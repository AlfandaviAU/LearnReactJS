// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
// untuk json server config
// npx json-server --watch data/db.json --port 8000

// untuk react routing
// npm install react-router-dom@5

// npm uninstall mime
// npm install mime@1
// pakai versi 1, bug gatau kenapa
const Home = () => {
    // let name = "Mario";

    // v1.0
    // const handleClick = (e) => {
    //     console.log("Hello alfann",e);
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log("Hello "+name,e.target);
    // }
    // const temp = (e) => {
    //     handleClickAgain("alfan",e)
    // }

    // v1.1
    // const [name,setName] = useState("Alfan");
    // const [age, setAge] = useState(19);
    // const handleClick = () =>{
    //     setName("Davi");
    //     setAge(20);
    //     console.log(name,age);
    // }

    
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    const {data,isPending,error} = useFetch("http://localhost:8000/blogs");

    
    return ( 
        <div className = "home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { data && <BlogList blogs={data} title={"All blogs!"}/>}
            {/* <button onClick={() => setName("Davi")}>Change name</button> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title={"Mario's blogs"}/> */}
        </div>
     );
}
 
export default Home;