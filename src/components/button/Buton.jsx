

export default function Buton({text}){

    return(
        <div>
            <button
                style={{
                    borderRadius:"50px", 
                    backgroundColor:"#E3B748",
                    width: "137px",
                    height: "62px",
                    fontSize: "20px",
                }}
            >{text}</button>
        </div>
    )
}