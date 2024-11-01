import Girl from "../assets/child-girld.png";

function Content() {
  return (
    <div className="h-screen">
      <section className="grid grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-bold text-center mt-10">
            Kreatif, Cerdas dan Imaginatif
          </h2>
        </div>
        <div className="relative bg-alkahfi-primary top-7 -right-30 rounded-full size-[300px]">
          <img
            src={Girl}
            alt="girl imagination"
            className="absolute size-[300px] object-cover top-3 -right-0 z-10"
          />
        </div>
      </section>
    </div>
  );
}

export default Content;
