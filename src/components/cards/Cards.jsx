import { useEffect ,useState ,useRef} from 'react'
import exImg from "../../assets/bookshelf.png"
import axios from 'axios';
import "./Cards.scss"

const Cards = () => {
    const [data, setData] = useState([]);
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(true)
    const [prevY,setPrevY] = useState(0)

    let dataRef = useRef({}) // 데이터 업데이트 지정
    let loadingRef = useRef(null) // 맨 아래지점 지정
    let prevYRef = useRef({}) // 우리가 이동하는 지점 지정
    let pageRef = useRef({})
    
    pageRef.current = page
    prevYRef.current = prevY
    dataRef.current = data    

    const loadingData = async () => {
        setLoading(true)
        try{
            const resp = await axios.get(`https://pokeapi.co/api/v2/ability/?limit=20&offset=${pageRef.current}`,{
        })
            setData(prev=>[...prev, ...dataRef.current, ...resp.data.results])
            setLoading(false)
        }catch(error){
            console.log(error);
            return error
        }
    }

    const handleObserver = (entities, observer) => {
        const y = entities[0].boundingClientRect.y
        if (prevYRef.current > y){
            loadingData()
            setPage(pageRef.current + 1)
        }else{
            console.log("Nothing")
        }
        setPrevY(y)
    }

    useEffect(()=>{
        loadingData()
        setPage(pageRef.current + 1)

        let options = {
            root:null,
            rootMargin:"0px",
            threshold:1.0,
        };
        const observer = new IntersectionObserver(handleObserver,options)
        observer.observe(loadingRef.current)
    },[])
    return (
        <div className='cards'>
            {data && data.map((user,index)=>{
                return(
                    <a key={index} href='/' className='card-item'>
                        <div>
                            <img src={exImg}></img>
                            <div className='card-title'>Web 프론트엔드 개발자</div>
                            <div className='card-company'>항해99</div>
                            <div className='company-region'>서울 한국</div>
                            <div className='company-pay'>열정페이</div>
                        </div>
                    </a>
                )
            })}
            <div className='scrolldown' ref={loadingRef} style={{height:"100px",margin:"25px"}}>{loading && "...Loading"}</div>
        </div>
    )
}

export default Cards