
const buttonList =[
    "All", 
    "Gaming",
    "Music",
    "Gadgets",
    "Comedy", 
];

const Buttons = () => {
  return (
    <div className="flex">
        {
            buttonList.map((button, index) => (
                <button key={index} className="dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 px-3 p-2 m-2 rounded-xl">
                    {button}
                </button>
            ))
        }
    </div>
  )
}

export default Buttons