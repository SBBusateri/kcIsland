import albumWedding from "@/assets/album-wedding.jpg";
import albumPortraits from "@/assets/album-portraits.jpg";
import albumLandscape from "@/assets/album-landscape.jpg";
import albumEvents from "@/assets/album-events.jpg";
import albumAction from "@/assets/album-action.jpg";
import albumCelebration from "@/assets/album-celebration.jpg";
import albumWarmup from "@/assets/album-warmup.jpg";
import albumBench from "@/assets/album-bench.jpg";

const albums = [
  { title: "Game Day", image: albumWedding, count: 48 },
  { title: "Portraits", image: albumPortraits, count: 24 },
  { title: "Team Shots", image: albumLandscape, count: 36 },
  { title: "Arena", image: albumEvents, count: 20 },
  { title: "Action", image: albumAction, count: 52 },
  { title: "Celebrations", image: albumCelebration, count: 18 },
  { title: "Warmups", image: albumWarmup, count: 30 },
  { title: "Bench", image: albumBench, count: 15 },
];

const AlbumsSection = () => {
  return (
    <section id="albums" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-2">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase">
            Albums
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
          {albums.map((album) => (
            <button
              key={album.title}
              className="group relative rounded-md overflow-hidden aspect-[4/3] cursor-pointer border border-border/30 hover:border-primary/50 transition-all duration-500"
            >
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-display text-base font-semibold text-foreground uppercase tracking-wide">
                  {album.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  {album.count} photos
                </p>
              </div>
              <div className="absolute inset-0 rounded-md ring-1 ring-primary/0 group-hover:ring-primary/40 transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumsSection;
