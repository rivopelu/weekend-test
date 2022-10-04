import {ArrowButton} from "../atoms";

export const HelpAndTipsCard = ({image, title}) => {


    return (
        <div className={"min-w-[311px] h-[176px] flex items-end"}
             style={{
                 backgroundImage: `url(${image})`,
                 backgroundSize : "cover"
             }}
        >

            <div className={"h-[72px] bg-black/50 w-full flex items-center justify-between p-5"}>
                <h1 className={"font-bold w-[80%]"}>{title}</h1>
                <ArrowButton/>
            </div>
        </div>
    )
}