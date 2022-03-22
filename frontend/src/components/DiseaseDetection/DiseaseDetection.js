import { useState, useEffect } from "react"
import default_leaf from "./leaf.png"

const DiseaseDetection = () => {
  const [imageUploaded, setUploadedImage] = useState();
  const [preview, setPreview] = useState();
  const [isPreview, setIsPreview] = useState(false);
  const [location, setLocation] = useState({"latitude": "", "longitude": "", "altitude": ""});
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
        console.log(position);
      },
      function (err) {
        console.log(err)
      },
    );
    console.log(this.state.latitude)
  }
  const imageUploadHandler = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setUploadedImage(undefined)
      return
    }
    setUploadedImage(e.target.files[0])
    console.log(imageUploaded)
  }
  const submitForm = (e) => {
    e.preventDefault();
  } 
  return (
    <div class="md:grid md:grid-cols-2 place-items-center">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST" onSubmit={submitForm}>
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <div class="mt-1 flex justify-center">
                  <img src={isPreview ? preview : default_leaf} class="p-1 bg-white border rounded max-w-sm"></img>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Upload photo of diseased sapling
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                        <span>Upload a file</span>
                        <input id="file-upload" onChange={imageUploadHandler} name="file-upload" type="file" class="sr-only" accept="image/*"></input>
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
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