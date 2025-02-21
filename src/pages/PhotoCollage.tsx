import Gallery from "react-photo-gallery";
import aurora from "../images/aurora.jpg";
import grad from "../images/grad.jpg";
import lakefill from "../images/lakefill.jpg";

const images = [
    { src: aurora, width: 4, height: 3},
    { src: grad, width: 4, height: 3},
    { src: lakefill, width: 4, height: 3}
]
const PhotoCollage = () => {
    return (
        <div className="w-full max-w-xl mx-auto p-4">
            <Gallery photos={images} />
        </div>
    )
}

export default PhotoCollage;