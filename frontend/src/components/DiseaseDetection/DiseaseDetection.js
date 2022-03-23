import { useState, useEffect, useRef } from "react"
import default_crop from "./crop.jpg"

const DiseaseDetection = () => {
  const [imageUploaded, setUploadedImage] = useState();
  const [preview, setPreview] = useState(null);
  const [isPreview, setIsPreview] = useState();
  const [location, setLocation] = useState(null);
  // const [isLocation, setIsLocation] = useState(false);
  const drop = useRef(null);
  useEffect(() => {
    if (!imageUploaded) {
      setPreview(undefined)
      setIsPreview(false)
      return
    }

    const objectUrl = URL.createObjectURL(imageUploaded)
    setPreview(objectUrl)
    setIsPreview(true)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [imageUploaded])

  useEffect(() => {
    position()
  }, [])
    const position = async () => {
    await navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation({"latitude": position.coords.latitude, "longitude": position.coords.longitude});
        // setIsLocation(true);
      },
      function (err) {
        console.log(err)
      },
    );
  }
  const imageUploadHandler = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setUploadedImage(undefined)
      return
    }
    setUploadedImage(e.target.files[0])
  }
  useEffect(() => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
  
    return () => {
      drop.current.removeEventListener('dragover', handleDragOver);
      drop.current.removeEventListener('drop', handleDrop);
    };
  }, []);
  
  const handleDragOver = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    
  };
  
  const handleDrop = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    // this is required to convert FileList object to array
    if (ev.dataTransfer.items) {
      console.log(ev.dataTransfer.items)
      if(ev.dataTransfer.items["length"] == 1){
        var file = ev.dataTransfer.items[0].getAsFile();
        if(file && file['type'].split('/')[0] != 'image'){
          return;
        }
        var image = URL.createObjectURL(file);
        setPreview(image);
        setIsPreview(true);
        return () => URL.revokeObjectURL(file);
      }

    }
  }
  const submitForm = (e) => {
    e.preventDefault();
    if(preview === undefined){
      return;
    } 
    /* if(location === null){
      position();
      return;
    }*/
    const userInformation = {
      "location": location, 
      "image": preview,
    }
    let data = new FormData();
    data.append("userInformation", userInformation);
    console.log(userInformation);
  } 
  return (
    <div className="md:grid md:grid-cols-2 place-items-center">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST" onSubmit={submitForm}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <div className="mt-1 flex justify-center" >
                  {!isPreview && <img src={default_crop} className="p-1 bg-white border rounded max-w-sm opacity-50" required></img>}
                  {isPreview && <img src={preview} className="p-1 bg-white border rounded max-w-sm" required></img>}
                </div>
                {!isPreview && 
                  <label className="block text-sm font-medium text-red-700">
                    Please upload a photo
                  </label>
                }
                
              </div>

              <div >
                <label className="block text-sm font-medium text-gray-700">
                  Upload photo of diseased sapling
                </label>
                <div ref={drop  } className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                        <span>Upload a file</span>
                        <input id="file-upload" onChange={imageUploadHandler} name="file-upload" type="file" className="sr-only" accept="image/*"></input>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              
            {/* !isLocation && 
            <label class="block text-sm font-medium text-red-700">
                  
                </label>
                */}
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                Upload photo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DiseaseDetection