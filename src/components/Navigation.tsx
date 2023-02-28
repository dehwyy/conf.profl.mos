import type {FC} from "preact/compat";

interface IProps {
    url: "/inj/ndex" | "/inj/register" | "/inj/winners"
}

const Navigation:FC<IProps> = ({url}) => {
    return (
        <>
            <div className={`${url==="/inj/ndex" && "bg-[#009fd5]"} p-[15px]`}><a href="/inj/ndex">О конференции</a></div>
            <div className={`${url==="/inj/register" && "bg-[#009fd5]"} p-[15px]`}><a href="/inj/register">Подать заявку</a></div>
            <div className={`${url==="/inj/winners" && "bg-[#009fd5]"} p-[15px]`}><a href="/inj/winners">Итоги</a></div>
        </>
    );
};

export default Navigation;