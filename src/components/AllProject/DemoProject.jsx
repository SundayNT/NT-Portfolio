
function DemoProject() {
  const videoUrl =
    "https://drive.google.com/file/d/1AopiHC1EgIFB0LspQR8uJJWhmVBkpz9j/preview";
  return (
    <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white mb-28 w-[60%] mx-auto rounded-xl text-center py-10 px-10">
      <h1 className="text-center text-2xl font-bold mb-4">
        Video Demo Project
      </h1>
      <div className="relative pb-[56.25%] w-full">
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          title="Google Drive Video"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
}

export default DemoProject;
