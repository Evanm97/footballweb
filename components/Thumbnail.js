import Image from "next/image"
import { forwardRef, useState } from "react"
import Modal from "react-modal"

const Thumbnail = forwardRef(({ result }, ref) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    console.log(result);

    return (

        <div ref={ref} className="p-2 group cursor-pointer border-white border border-opacity-0 sm:hover:border-opacity-50">

            <div className="image-container">
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
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:text-blue-400">{result.title}</h2>
            </div>

            <div className="flex justify-center items-center">
                <Modal
                    className="h-5/6 w-5/6 m-auto mt-6 pb-4 border-none rounded-md outline-none text-center "
                    closeTimeoutMS={2000}
                    isOpen={modalIsOpen}
                    portalClassName="modal"
                    onRequestClose={() => setModalIsOpen(false)}
                    ariaHideApp={false}
                >

                    <div className="iframe-container border border-white border-opacity-50" >
                        <div>
                            <iframe className="w-full h-full" src={result.embed.slice(137, 228)} scrolling="no" ></iframe>
                        </div>
                    </div>

                </Modal>
            </div>
        </div>
    );
})

export default Thumbnail
