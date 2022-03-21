import {useState} from "react"

const DiseaseDetection = () => {
    const [imageUploaded, setImageUploaded] = useState('');
    const imageUploadHandler = (event) => {
        setImageUploaded(event.target.value);
    };
    return (
      <>
        <div>DiseaseDetection</div>
        <form>
            <input type="file" value={imageUploaded} onChange={imageUploadHandler}/>
        </form>
        <p>{imageUploaded}</p>
      </>
    )
  }
  
  export default DiseaseDetection