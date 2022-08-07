const Avatar = (props) => {
    return (
        <div>
            <img src={props.urlAvatar} className="rounded-circle w-75 " alt="img" />
            <br />
            <button className="btn btn-outline-primary mt-3 col-lg-8">{props.repo}</button>

        </div>
    )
}

export default Avatar;