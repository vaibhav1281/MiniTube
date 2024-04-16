

const SkeletonUI = () => {

    const controlPannel = () =>{
        return(
            <div className="flex py-2 px-8 mx-10 dark:bg-gray-700  rounded-full w-40 h-9 bg-black/10 animate-pulse"></div>
        )
    }
    const controlPannelSkeleton = new Array(5).fill(null).map((_, index) => controlPannel(index))
    
    const mainContent = () => {
        return(
            <div className="container rounded-lg w-[330px] md:w-[350px] h-[318px] dark:bg-gray-700 bg-black/10 animate-pulse"></div>
        )
    }
    const mainContentSkeleton = new Array(6).fill(null).map((_, index) => mainContent(index))

  return (
    <div className="container flex h-dvh mt-20">
        <div className="space-y-4">{controlPannelSkeleton}</div>
        <div className="flex flex-wrap space-x-4">{mainContentSkeleton}</div>
    </div>
  )
}

export default SkeletonUI