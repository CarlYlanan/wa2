import TextHighlight from "./Text-Highlight";

function App() {
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="bg-white p-6 flex flex-col rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <img src="illustration-article.svg" className="w-[336px] h-[200px]" />

        <div className="px-3 py-1 bg-background rounded-md inline-block self-start mt-2">
          <p className="text-[13px] font-figtree font-semibold">Learning</p>
        </div>

        <p className="font-figtree font-VariableFont text-[12px] mt-2">
          Published 21 Dec 2023
        </p>

        <TextHighlight text="HTML & CSS foundations" />

        <p className="text-[16px] mt-2 font-">
          These languages are the backbone of every <br></br> website, defining
          structure, content, and <br></br>presentation
        </p>

        <div className="mt-4 flex items-center">
          <img
            src="image-avatar.webp"
            className="w-12 h-12 rounded-full mr-1"
          />
          <p className="font-figtree font-extrabold px-1">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;
