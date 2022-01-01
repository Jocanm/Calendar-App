import ReactLoading from 'react-loading'


const ButtonLoading = ({ disabled, loading, text, className = "" }) => {
    return (
        <button
            disabled={(disabled || loading) && true}
            type='submit'
            className={className}
        >
            {loading ? (
                <div className="w-full h-full flex item-center justify-center">
                    <ReactLoading type='spin' height={26} width={26} />
                </div>
            ) : text}
        </button>
    );
};

export default ButtonLoading;