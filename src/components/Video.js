const Video = ({youtubeLink}) => {
    const id = youtubeLink.slice(youtubeLink.lastIndexOf('=')+1);
    return (
        <div className="ing-list-25 col-4">
            <iframe src={`//www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Video;
