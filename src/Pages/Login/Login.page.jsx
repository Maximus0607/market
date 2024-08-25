import { useStoreState ,useStoreActions} from "easy-peasy"
import { useEffect, useState } from "react";


export default function Login(){
    const {loginInfo} = useStoreState((state)=> state.signUpModel);
    const {setLoginInfo} = useStoreActions((actions)=> actions.signUpModel);
    // const [userInfo, setUserInfo] =useState({
    //         mobileNumber: 0,
    //         otp:0,
    //         address:"string",
    //         name:"string"
    // })

    function handleMobileNumber(e){
        // setUserInfo({...userInfo , mobileNumber:e.target.value})
        setLoginInfo({...loginInfo, mobileNumber : e.target.value})
    }

    useEffect(()=>{
        fetchLoginDetails();
    },[setLoginInfo])

    function fetchLoginDetails(){
        setLoginInfo(
            { 
            mobileNumber: 9952316734,
            otp:212,
            address:"string",
            name:"string"
        })
    }
    return(
        <div>       
             <h1>{loginInfo && loginInfo.mobileNumber}</h1>
        <input type="number" onChange={(e) => handleMobileNumber(e)} />
        </div>

    )
}