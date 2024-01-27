import { useEffect } from "react";

const Head = () => {
    let title = "Jend | Housing"
    return ( 
     useEffect(()=>{
        document.title = title;
     })
     );
}
 
export default Head;