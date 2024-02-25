import React from 'react';

const VideoCard = ({videoDetails}) => {
  console.log(videoDetails)
    const { snippet , statistics } = videoDetails;

    function formatViewCount(viewCount) {
        if (viewCount >= 1000000) {
          return (viewCount / 1000000).toFixed(1) + 'M';
        } else if (viewCount >= 1000) {
          return (viewCount / 1000).toFixed(1) + 'K';
        } else {
          return viewCount.toString();
        }
    }

    function getYouTubeUploadDateFormat(date) {
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);
      const diffInWeeks = Math.floor(diffInDays / 7);
      const diffInMonths = Math.floor(diffInDays / 30);
      const diffInYears = Math.floor(diffInDays / 365);

      if (diffInYears > 0) {
          return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
      } else if (diffInMonths > 0) {
          return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
      } else if (diffInWeeks > 0) {
          return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
      } else if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
      } else if (diffInHours > 0) {
          return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
      } else if (diffInMinutes > 0) {
          return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
      } else {
          return `just now`;
      }
    }

    return (
        <div className="rounded-lg w-full sm:w-[350px] h-[318px] cursor-pointer select-none">
    <img
        alt="thumbnail"
        src={snippet?.thumbnails?.medium?.url}
        className="rounded-lg w-full"
    />
    <div className='flex'>
        <img alt="" />
        <div className=''>
            <h3 className='font-medium leading-8 text-lg'>{snippet?.title}</h3>
            <h3>{snippet?.channelTitle}</h3>
            <div className="flex space-x-2 items-center">
                <p>{formatViewCount(statistics?.viewCount)} views</p>
                <p className='bg-black/50 dark:bg-white rounded-full w-1 h-1'></p>
                <p>{getYouTubeUploadDateFormat(new Date(snippet?.publishedAt))}</p>
            </div>
        </div>
    </div>
</div>

    );
}

export default VideoCard;
