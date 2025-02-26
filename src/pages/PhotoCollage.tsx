import aurora from "../images/aurora.jpg";
import grad from "../images/grad.jpg";
import lakefill from "../images/lakefill.jpg";

const images = [
    { src: aurora, height: "row-span-2" },
    { src: grad, height: "row-span-1" },
    { src: lakefill, height: "row-span-3" },
];

const PhotoCollage = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 max-w-xl mx-auto auto-rows-auto">
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image.src} 
                    alt={`Photo ${index + 1}`} 
                    className={`w-full h-auto rounded-lg shadow-md object-cover ${image.height}`}
                />
            ))}
        </div>
    );
}

export default PhotoCollage;