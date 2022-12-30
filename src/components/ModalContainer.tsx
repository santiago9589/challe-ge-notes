interface props {
    children: React.ReactNode
    // onClose: VoidFunction
}
const ModalContainer = ({ children }: props) => {

    return (
        <section className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
            <b className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30" />
                {children}
        </section>)

}

export default ModalContainer