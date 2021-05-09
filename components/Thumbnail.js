import Image from "next/image"
import { forwardRef, useState } from "react"
import Modal from "react-modal"

const Thumbnail = forwardRef(({ result }, ref) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    console.log(result);

    return (

        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:pulse translate-y-1">

            <div className="stretchy-wrapper">
                <div>
                    <Image
                        className="image"
                        layout="responsive"
                        src={`${result.thumbnail}`}
                        onClick={() => setModalIsOpen(true)}
                        layout="fill"
                        overflow="hidden" />
                </div>
            </div>


            <div className="p-2">
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title}</h2>
            </div>

            <div className="flex justify-center items-center">
                <Modal
                    className="h-5/6 w-5/6 m-auto mt-8  bg-gray-900 border-none rounded-md outline-none text-center"
                    closeTimeoutMS={2000}
                    isOpen={modalIsOpen}
                    portalClassName="modal"
                    onRequestClose={() => setModalIsOpen(false)}
                    ariaHideApp={false}
                >
                    {/* <h3 className="sm:pt-2 text-2xl text-white" >{result.title}</h3> */}
                    <iframe className="w-5/6 h-5/6 m-auto mt-4 pt-10" src={result.embed.slice(137, 228)}></iframe>
                    {/* <h3 className="sm:pt-2 text-2xl text-white">{new Date(result.date).toLocaleString("sv-SE")}</h3> */}
                </Modal>
            </div>
        </div>
    );
})

export default Thumbnail
