function GradientCircle(props) {
    return (
            <div className="bg-[#005CFF] h-111 w-111 rounded-[100%] gradient-to-tl from-[#005CFF] to-[#000000] absolute blur-[100px]" style={{ top: props.top, left: props.left, right: props.right, bottom: props.bottom }}></div>
    )
}

export default GradientCircle