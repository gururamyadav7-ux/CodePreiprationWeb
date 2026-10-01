import Card from "./Card";

const FigmaCard = () => {
    const cards = [
        { id: 1 , src: "https://static.vecteezy.com/system/resources/previews/011/153/368/original/3d-website-developer-working-on-laptop-illustration-png.png" , time: "2h" ,userName:"John Doe" ,webSiteName:"example.com" },
        { id: 2 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "4h" ,userName:"mohan kumar" ,webSiteName:"mohan-designs.com" },
        { id: 3 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "6h" ,userName:"lalit kumar" ,webSiteName:"lalit-creations.com" },
        { id: 4 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "8h" ,userName:"rajesh kumar" ,webSiteName:"rajesh-designs.com" },
        { id: 5 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "10h" ,userName:"suresh kumar" ,webSiteName:"suresh-creations.com" },
        { id: 6 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "12h" ,userName:"ramesh kumar" ,webSiteName:"ramesh-designs.com" },
        { id: 7 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "14h" ,userName:"akhil kumar" ,webSiteName:"akhil-creations.com" },
        { id: 8 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "16h" ,userName:"vijay kumar" ,webSiteName:"vijay-designs.com" },
        { id: 9 , src: "https://cdn.dribbble.com/userupload/4201870/file/original-7e1f3d8b9a5e4f2b6c1e3f8c9e1f3d8b.png?compress=1&resize=1024x768" , time: "18h" ,userName:"anil kumar" ,webSiteName:"anil-creations.com" }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full min-h-screen p-6 bg-slate-950">
            {cards.map((card) => (
                <Card key={card.id} src={card.src} time={card.time} userName={card.userName} webSiteName={card.webSiteName} />
            ))}
        </div>
    );
};






export default FigmaCard;