function MyTailwindButton({disabled}) {
    return (
      <button
      disabled={disabled}
      className={`
        bg-black text-white font-bold 
        rounded-md 
        transition duration-300 ease-in-out 
        hover:bg-gray-700 
        shadow-sm 
        text-sm px-4 py-2 w-full
        md:text-lg md:px-6 md:py-3 md:w-auto md:shadow-md
        disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed
      `}
      >
        Tailwind Button
      </button>
    );
  }
  
  export default MyTailwindButton;
  