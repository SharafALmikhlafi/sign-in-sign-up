interface ButtonProps{
    text: string;
}

export default function MainButton({text}: ButtonProps) {
  return (
    <>
       <div className="w-full h-10 bg-[#1d2931] text-white rounded-sm">
            <button className="w-full h-10">{text}</button>
          </div>
    </>
  );
}
