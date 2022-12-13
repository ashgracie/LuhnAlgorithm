import React, { useState, useEffect } from 'react';
function Form() {
   
    const [value, setValue] = useState("");
    const [invalid, setInvalid] = useState("");
    useEffect(() => {
        //let regex = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/
        let regex = /[^0-9\s]/gi;
        let regex2 = /[^0-9]/gi;
        let tempval = value.replace(regex, "")
        setValue(tempval ? tempval: "");
        let checkval = value.replace(regex2, "")
        let other=false
        let sum=0
        for (let i = checkval.length-1; i >= 0; i--) {
            if (other) {
                let temp = checkval.charAt(i) * 2 
                sum += temp % 10 + (temp - (temp % 10) ) /10
            } else {
              sum += checkval.charAt(i) * 1
            }
            console.log(sum)
            other=!other
        }
        if(sum%10!==0){
            setInvalid("Invalid credit card")
        } else {
            setInvalid("")
        }
        console.log(value, sum, sum % 10);
      }, [value]);
    
      function validate() {
        
      }

    return (
      <div className="Form">
       <form>
        <input type="text" placeholder="4408 0412 3456 7893" value={value ? value:""} onChange={(e) => setValue(e.target.value)}></input>
        <br/>{invalid}
        <input type="submit" value="Submit"></input>
        </form>
       
        
      </div>
    );
  }

  export default Form;


  