export const Card = ({ id, name, url, handleClick }) => {
    return (
        <div
            data-id={id}
            onClick={handleClick}
            className="w-full cursor-pointer p-4 bg-white border-2 border-black rounded-lg shadow-xl hover:scale-105 transition-scale duration-300 flex flex-col items-center"
        >
            <img src={url} className="w-28 h-28 object-contain mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">{name[0].toUpperCase() + name.substring(1)}</h3>
        </div>

    )
}