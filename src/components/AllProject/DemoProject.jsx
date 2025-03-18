import myDemoProject from "/Video/demoProject.mp4";

function DemoProject() {
  return (
    <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white mb-28 w-[60%] mx-auto rounded-xl text-center py-10 px-10">
      <h1 className="text-center text-2xl font-bold mb-4">
        Video Demo Project
      </h1>
      <video width={1000} controls className="mt-10">
        <source src={myDemoProject} type="video/mp4" />
      </video>
    </div>
  );
}

export default DemoProject;
