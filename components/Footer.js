

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4
        gap-y-10 px-32 py-14 bg-gray-100 text-gray-600
        rounded-2xl " >
           
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">About</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">SUPPORT</h5>
                <p>Helps Center </p>
                <p>Queries and Reviews</p>
                <p>Trust & Safety </p>
                <p>Donations</p>
                <p>For the Win</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It's a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>By Saket kumar</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">HOST</h5>
                <p>React</p>
                <p>Presents</p>
                <p>Tailwind Css</p>
                <p>100+ destination</p>
                <p>Overview </p>
            </div>
        </div>   
    );
}

export default Footer;