function SlokamComp() {
  return (
    <div className="w-full h-full px-6 py-10 md:px-12 md:py-10 flex flex-col md:flex-row justify-center items-center gap-16  relative overflow-hidden">
      {/* Optional Quote/Poem Section (you had commented out) */}

      <div className="md:w-1/2 flex flex-col items-center gap-6">
        <div className="text-center">
          <p className="text-[12px] md:text-[20px] font-semibold md:font-bold lg:w-4/6 mx-auto tracking-wider">
            కృషితో నాస్తి దుర్భిక్షమ్ | జపతో నాస్తి పాతకమ్ ||మౌనేన కలహం నాస్తి |
            నాస్తి జాగరతో భయం ||
          </p>
        </div>
        <p className="text-base md:text-xl font-medium text-center lg:w-5/6 mx-auto tracking-widest">
          Krushitho Naasthi Durbhiksham | Japatho Naasthi Pathakam || Maunena
          Kalaham Naasthi | Naasthi Jaagaratho Bhayam ||{" "}
        </p>
      </div>
    </div>
  );
}

export default SlokamComp;
