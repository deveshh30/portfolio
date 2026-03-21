import Card from "./Social";
import avatar from "/blue.png";

const Profile = () => {


  return (
    <div className="hidden lg:block absolute right-20 xl:right-32 top-1/2 -translate-y-1/2">
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#004643]/25 via-[#00312f]/15 to-[#00635e]/20 rounded-full blur-2xl animate-pulse" />
        
        {/* Decorative ring */}
        <div className="absolute -inset-2 rounded-full border border-zinc-800/50" />
        <div className="absolute -inset-4 rounded-full border border-zinc-800/30" />
        
        {/* Main photo container - circular */}
        <div className="relative w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-2 border-zinc-700/50 shadow-2xl group">
          {/* Inner gradient border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#004643]/15 via-transparent to-[#00635e]/15 z-10 pointer-events-none" />
          
          <img
            src={avatar}
            alt="Devesh"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>

        {/* Floating accent dots */}
        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#004643]/80 blur-sm" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-[#00635e]/65 blur-sm" />
      </div>
      
      {/* Social card centered below profile */}
      <div className="flex justify-center mt-8">
        <Card/>
      </div>
    </div>
  );
};

export default Profile;
