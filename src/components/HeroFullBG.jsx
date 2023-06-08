export default function HeroFullBG() {

return (
<section className="bg-neutral-800">
    <div className="relative isolate overflow-hidden">
        <img src="/images/service-hero.webp" alt="------Need Data for alt text" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-950 via-neutral-800 to-neutral-950 opacity-80"></div> {/* Gradient overlay */}

        <div className="mx-auto max-w-2xl py-32 sm:py-48 px-6 lg:px-0">
            <div className="text-center">
                <h1 className="mt-10 font-bold tracking-tight text-white text-4xl md:text-5xl lg:text-7xl">A catchy tagline that leads to success!</h1>
                <p className="mt-6 text-lg leading-8 text-neutral-200">Add a strong and clear message indicating what the company does, why, and the next step you want your user to take. Match your CTA to your key messaging.</p>

                {/* Big CTA*/}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <div className="flex items-center">
                        <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-primary-700 hover:bg-primary-600 transition-all ease-in text-xl py-5 px-5" href="#">Get my free estimate!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}