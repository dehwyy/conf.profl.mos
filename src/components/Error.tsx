import {useState} from "preact/compat";
import JustError from "./JustError";

const Error = () => {
    const [isError, setError] = useState(false)
    const errorMessage = () => {
        setTimeout(() => {
            setError(p => !p)
        }, 200)
    }
    return (
        <>
            {isError && <JustError />}
            <div className="flex w-full justify-evenly min-h-[62px]">
                <div className="max-w-[450px] min-h-full">
                    <div>
                       <span onClick={errorMessage} className="fake-btn h-full w-[200px] text-center">Регистрация работы обучающегося</span>
                    </div>
                        </div>
                <div className="max-w-[450px] min-h-full">
                    <div >
                       <span onClick={errorMessage} className="fake-btn h-full text-center">Регистрация работы представителя образовательной организации</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;