import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import "./Form.scss"

import write from "./write.png"

const Write = (props) => {

   
    const titleRef = useRef();
    const textRef = useRef();
   
    const user = useSelector(state => state.auth.user);

    const formSubmitHandler = (event) => {
        event.preventDefault();

      
        const name = titleRef.current.value;
        const description = textRef.current.value;
       

        const submitData = {
           
            name,
            description,
           
        }

        props.onOrder(submitData)
    }

    if(user) {
        return ( 
            <div className="write">
            <h2 className="write__heading">Add a Blog</h2>
              <form onSubmit={formSubmitHandler} className="write__form">
                  <div className="write__inputbox">
                    {/* <div className="write__showBox">
                    <label htmlFor="fileInput" className="write__file">+ Add a image</label>
                  <input onChange={onChangePicture} type="file" id="fileInput" style={{display: "none"}} />
                  <img className="write__showImg" src={picture && picture} alt="" />
                    </div> */}
                    {/* {picture && <img className="write__showImg" src={picture} alt="blog" />}
                <input ref={imageRef} onChange={onChangePicture} type="text" className="write__imageLink" placeholder="upload image URL..." required />
                      <input ref={catRef} type="text" className="write__cat" placeholder="Category" required /> */}
                      
                      <input type="text" className="write__text" placeholder="Title" ref={titleRef} required />
                      
                      <textarea ref={textRef} rows="4" type="text" className="write__words" placeholder="Write your Blog..." required />

                      {/* <input ref={dateRef} type="date" className="write__date" /> */}
                  </div>
                  <button className="write__submit">Publish</button>
        
              </form>  
            </div>
            );
    }
    else {
        return <div className="notLog">
            <p className="notLog__message">SIGN IN to write a BLOG</p>
            <img src={write} alt="" className="notLog__img" />
        </div>
    }

    
};

export default Write;