import { cn } from "../../lib/utils";
import { usePlayAudio } from "../../hooks/use-play-audio";
const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  const playAudio = usePlayAudio();
  return (
    <button
      id={id}
      onMouseEnter={playAudio}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-8 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-8">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-8">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
