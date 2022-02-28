import { useState } from "react";
import axios from "axios";
function Form() {
    const [user_name,setUser_name] = useState();
    const [description,setDescription]=useState();
    const [tags,setTags]=useState();

    const addPost=()=>{
        axios.post("http://localhost:3001/create",{name:user_name,description:description,tags:tags}).
        then((res)=>{console.log(res)})
    }
  return (
    <>
      <div className="ui fluid form">
          <div className="field">
              <h1>Share your thoughts </h1>
          </div>
        <div class="field">
          <div class="ui label">Please Your name</div>
          <input type="text" placeholder=" Name..." onChange={(e)=>{setUser_name(e.target.value)}} />
        </div>
        <div class="ui divider"></div>
        <div class="field">
          <div class="ui pointing below label">Free your mind here..</div>
          <input type="text" placeholder="Your thread " onChange={(e)=>{setDescription(e.target.value)}} />
        </div>
        <div class="ui divider"></div>
        <div class="inline field">
          <input type="text" placeholder="Tags " onChange={(e)=>{setTags(e.target.value)}} />
          <div class="ui left pointing label">Your Topic talks about what ?</div>
        </div>
        <div class="ui divider"></div>
        <div class="inline field">
        <button class="ui primary button"
            onClick={addPost}
        >
  Share !
</button>
        </div>
      </div>
    </>
  );
}

export default Form;
