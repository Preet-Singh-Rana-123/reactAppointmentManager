import starred from "./started.png"
import notStarred from "./notStared.png"

export default function Card(props){
    return (
        <main className="w-[300px] border-2 px-[1rem] py-[10px] rounded-[10px] border-gray-300 ">
            <div className="flex justify-between mb-[10px] ">
                <h2 className="font-bold">{props.title}</h2>
                <img onClick={props.togleStarred} className="h-[20px] opacity-60 cursor-pointer " src={props.isStarred ? starred : notStarred} alt="" />
            </div>
            <p className="opacity-50">
                {props.date}
            </p>
        </main>
    )
}