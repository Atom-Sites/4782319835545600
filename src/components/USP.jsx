import extractValues from '@/utils/extractValues'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function USP() {

    const { data, error } = useSWR('/api/staticdata?filename=USP.schema.json', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div></div>

    const { headerText, uspDescription, features } = extractValues(data);


    return (
        <div className="editable-component relative bg-white py-20 lg:py-32" data-json='usp'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/*Section Intro*/}
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-2xl font-extrabold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl">{headerText}</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-800">{uspDescription}</p>
                </div>

                {/*USP Grid*/}
                <div className="mx-auto mt-10 max-w-2xl sm:mt-10 lg:mt-20 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">

                        {/*First USP*/}
                        <div className="flex flex-col">
                            {/*Title and Icon*/}
                            <dt className="text-base font-semibold leading-7 text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-bottom justify-left rounded-lg bg-transparent">
                                    <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
  <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
</svg>
                                    </span>
                                </div>
                                <h3 className="font-extrabold text-lg">{features[0].name}</h3>
                            </dt>
                            {/*Description*/}
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[0].description}</p>
                            </dd>
                        </div>

                        {/*Second USP*/}
                        <div className="flex flex-col ">
                            <dt className="text-base font-semibold leading-7 text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-bottom justify-left rounded-lg bg-transparent">
                                    <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
                                    </span>
                                </div>
                                <h3 className="font-extrabold text-lg">{features[1].name}</h3>
                            </dt>
                            {/*Description*/}
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[1].description}</p>
                            </dd>
                        </div>

                        {/*Third USP*/}
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading-7 text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-bottom justify-left  rounded-lg bg-transparent">
                                    <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
</svg>
                                    </span>
                                </div>
                                <h3 className="font-extrabold text-lg">{features[2].name}</h3>
                            </dt>
                            {/*Description*/}
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[2].description}</p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}

