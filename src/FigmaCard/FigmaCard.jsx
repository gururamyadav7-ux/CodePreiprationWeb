import Card from "./Card";

const FigmaCard = () => {
    const cards = [
        { id: 1, src: "https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/c1f1e6648495c152b7f982b73e528de517b5a16e", time: "4h", webSiteName: "Positivus Landing Page Design" },
        { id: 2, src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/b1f371789de321ba82faaaea628437fe32414548", time: "4h", webSiteName: "Interactive Portfolio Website: Figma UI Design Tutorial for Beginners | Step-by-Step Guide" },
        { id: 3, src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/6983b9548d5b9cdd515ee138ffd476f3af137d5d", time: "4h", webSiteName: "Cooking Template 🟣 by Flowbase.co" },
        { id: 4, src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/006c09a8b70f36cdea7f80655d8190be6ee9fb5f", time: "4h", webSiteName: "Task Management Dashboard - Pickolab Studio" },
        { id: 5, src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/7187783ceabf2ef6cac63a9d5f9955c52c921a3c", time: "4h", webSiteName: "Car Rent Website Design - Pickolab Studio" },
        { id: 6, src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/16ea99c7cc8713b8f0012751fba4ec0df9759c55", time: "4h", webSiteName: "eCommerce Website | Web Page Design | UI KIT | Interior Landing Page" },
        { id: 7, src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/a988c02e07107c969604656fc5c281f11fec08fc", time: "4h", webSiteName: "eCommerce App UI Kit - Case Study Ecommerce Mobile App UI kit" },
        { id: 8, src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/9952b51ea06364785b995b181e4ca897bf42faef", time: "4h", webSiteName: "eCommerce App UI Kit - Case Study Ecommerce Mobile App UI kit" },
        { id: 9,src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/c494a4af1c98aa62fda519d209d6f4221de5dafa", time: "4h", webSiteName: "Contact Us Page UIUX Design _ Contact Form Kit" },
        { id: 10,src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85/hub/file/carousel/img/98ecb4507f2ca027a972216016de2a67543fca79", time: "4h", webSiteName: "Minimal landing page" },
        { id: 11,src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/0619136a3247ce199b69e6b11a87c2c875d056d3", time: "4h", webSiteName: "Travel Website Landing Page" },
        { id: 12,src:"https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/3d09dc6fab5fd82f9b17418178e0699fbc25b365/c01a76b0b1e7f0607d79680fd723386413ee9e96", time: "4h", webSiteName: "AI SaaS Website Design – Premium Landing Page for AI Tools" },

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