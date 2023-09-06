"use client"
import React, { useState, useRef, useCallback } from "react";
function useJoin() {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState("");
    const confirmPassword = useRef<HTMLInputElement | null>(null);
    
    //아이디는 그냥 통과
    const onIdHandler = useCallback((event:any) => {
        setId(event.currentTarget.value)
    },[]);

    const onPasswordHandler = useCallback((event:any) => {
        setPassword(event.currentTarget.value)
        
    },[]);
    const onSubmit = useCallback((event:any) =>{
        event.preventDefault(); // 페이지 새로고침 방지
        // 비밀번호 부터 유효성 검증하고 실패 시 console 출력 및 커서 옮기기
        var len = password.length;
        var low=0; // 소문자 개수
        var high=0; // 대문자 개수
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
            console.log("비밀번호는 8자리 이상 대소문자, 특수문자로 구성되어야 합니다.");
            confirmPassword.current?.focus();
            alert("비번 유효성 검증 실패");
        }
        else{
            console.log("비밀번호 유효성 검사 완료")
            alert("회원 가입에 성공하였습니다!")
        }
        
    } ,[password]);
    return (
        
        <div className="bg-white">
            <h1 className="font-['gmarket'] text-blue-600">회원가입</h1>
            <form>
                <label className="font-['gmarket'] text-blue-600">이름</label>
                <div><input name="id" type="id" placeholder="이름" value={id} onChange={onIdHandler} className="focus:bg-sky-100 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input></div>
                <label className="font-['gmarket'] text-blue-600">비밀번호</label>
                <div><input name="password" type="password" ref ={confirmPassword} placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="focus:bg-sky-100 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input></div>
                <div><button onClick={onSubmit} className="my-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600" > Regist</button></div>
                
            </form>

            
        </div>
    );
};
export default useJoin;