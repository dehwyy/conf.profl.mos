import {useState} from "preact/compat";

const Error = () => {
    const [isError, setError] = useState(false)
    const errorMessage = () => {
        setTimeout(() => {
            setError(p => !p)
        }, 200)
    }
    return (
        <>
            {isError && <div class="bg-red-500 w-full h-[50px] mx-auto flex items-center justify-center mb-[30px]">
                <div class="">
                    <span class="">
                        Произошла ошибка. Перезагрузите страницу или попробуйте позже.
                    </span>
                </div>
            </div>}
            <div className="flex w-full justify-evenly h-[62px]">
                <div className="max-w-[450px]"><span onClick={errorMessage} href=""
                                                     className="fake-btn h-full w-[200px] text-center">
                Регистрация работы обучающегося
            </span></div>
                <div className="max-w-[450px]"><span onClick={errorMessage} className="fake-btn h-full text-center">
                Регистрация работы представителя образовательной организации
            </span></div>
            </div>
        </>
    );
};

export default Error;