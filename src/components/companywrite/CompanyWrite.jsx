import React,{useEffect,useState} from "react";
import "./CompanyWrite.scss";
import axios from "axios";

const CompanyWrite = () => {
    const [details,setDetails] = useState({
        position:"",
        content : "",   
        deadline : "",
        // stack : [],
        // jobGroupId : 0,
        // jobDetailId : 0
    })
    const [selectedImages , setSelectedImages] = useState([])
    const [imageStorage ,setImageStorage] = useState([])
    const getStacks = async () => {
        try{
            const repo = await axios.get(`http://54.180.112.137:9990/api/company/jobPost`,{},{ // 직업군 카테고리 가져오기.
        })
        console.log(repo)
        } catch(error){
            console.log(error)
        }
    }
    const getGroup = async () => {
        try{
            const repo = await axios.get(`http://54.180.112.137:9990/api/company/jobPost`,{},{ // 직업군 카테고리 가져오기.
        })
        console.log(repo)
        } catch(error){
            console.log(error)
        }
    }
    
    const getGroup2 = async () => {
        try{
            const repo = await axios.get(`http://54.180.112.137:9990/api/company/jobPost`,{},{ // 직업군 카테고리 가져오기.
        })
        console.log(repo)
        } catch(error){
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setDetails((prev)=>{
            return{...prev,[name]:value}
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let auth = localStorage.getItem("authorization")
        let token = localStorage.getItem("refreshtoken")
        e.preventDefault()
        if (details.position === "" || details.content==="" || details.deadline === ""){
            alert("내용을 모두 입력해주세요.")
        }
        const formData = new FormData()
        formData.append("position",details.position)
        formData.append("content",details.content)
        formData.append("imgUrlList",imageStorage)
        formData.append("deadline",details.deadline)
        try{
            await axios.post(`http://54.180.112.137:9990/api/company/jobPost/dd`,formData,{ // 로그아웃
                headers:{
                "Content-Type": "multipart/form-data",
                "Authorization":auth,
                "RefreshToken":token
                }
            })
            } catch(error){
                console.log(error)
            }

        }
    
    const onSelectFile = async (e) =>{
        const selectedFiles = e.target.files;
        setImageStorage(e.target.files)
        setSelectedImages((prevImg)=>prevImg.concat(imagesArray))
        const selectedFilesArray = Array.from(selectedFiles);
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
    }

    useEffect(()=>{
        if(!localStorage.getItem("authorization") === true || !localStorage.getItem("refreshtoken") === true){
            getGroup()
        }
    },[])
    return (
    <>
        <h2>작성</h2>
        <form onSubmit={handleSubmit} className="company-write">            
          <h3>포지션명</h3><input type="text" name="position" onChange={handleChange}></input>
          <h3>이미지</h3><input type="file" name="imgUrlList" multiple accept="image/png , image/jpeg , image/webp" onChange={onSelectFile}></input>
          <h3>내용 작성</h3><input type="textarea" name="content" onChange={handleChange}></input>
          <h3>마감일</h3><input type="text" name="deadline" onChange={handleChange}></input>
          <h3>스택</h3><input></input>
          <h3>그룹1</h3><input></input>
          <h3>그룹2</h3><input></input>
          <button type="submit">제출하기</button>
        </form>
    </>
  )
}

export default CompanyWrite;