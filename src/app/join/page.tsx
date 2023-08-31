"use client"
import React, { useState } from "react";
function useJoin() {
    const [id, setId] = useState<string>("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setComnfirmPassword] = useState(false);
    const [confirmEmail, setConfirmEmail]= useState(false);
    
    const onIdHandler = (event:any) => {
        setId(event.currentTarget.value)
    }
    const onEmailHandler = (event:any) => {
        setEmail(event.currentTarget.value)
        var idx = email.indexOf('@')

        // console.log("idx는")
        // console.log(idx)
        // console.log("email 길이는")
        // console.log(email.length)

        // @가 없거나 양 옆에 단어가 없는 경우
        if (idx<=0 || idx>=email.length-1){
            setConfirmEmail(false);
            
        }
        else{
            setConfirmEmail(true);
        }
        
    }
    const onPasswordHandler = (event:any ) => {
        setPassword(event.currentTarget.value)
        var len = password.length;
        var low=0; // 소문자 개수
        var high=0; // 대문자 개수
        var spc=0;  // 특수문자 개수
        var pattern = /[~!@#$%^&*()_+|<>?:{}]/;	// 특수문자
        for (var i=0;i<len;i++){
            if(password[i].toLowerCase()==password[i]){
                low+=1;
            }
            else if(password[i].toUpperCase()==password[i]){
                high+=1;
            }
        }
        if (len<8 || !pattern.test(password) || low==0 ||high==0){
            setComnfirmPassword(false)
            console.log("비밀번호는 8자리 이상 대소문자, 특수문자로 구성되어야 합니다.");
        }
        else{
            setComnfirmPassword(true)
            console.log("비밀번호 유효성 검사 완료")
        }
    }
    const onSubmit = (event:any) =>{
        event.preventDefault()
        if (confirmPassword==true && confirmEmail==true){
            alert("회원 가입 성공!")
        }
        else{
            alert("회원 가입 실패..")
            console.log(confirmEmail,confirmPassword)
        }
        
    }   
    return (
        
        <div className="bg-white">
            <h1 className="font-['gmarket'] text-blue-600">회원가입</h1>
            <form>
                <label className="font-['gmarket'] text-blue-600">이름</label>
                <div><input name="id" type="id" placeholder="이름" value={id} onChange={onIdHandler} className="focus:bg-blue-600 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input></div>
                <label className="font-['gmarket'] text-blue-600">비밀번호</label>
                <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="focus:bg-blue-600 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input></div>
                <label className="font-['gmarket'] text-blue-600">이메일</label>
                <div ><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="focus:bg-blue-600 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input></div>
                <div><button onClick={onSubmit} className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600" > Regist</button></div>
                
            </form>

            
        </div>
    );
};
export default useJoin;