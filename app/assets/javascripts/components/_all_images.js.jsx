const AllImages = (props) => {
    var images = props.images.map((image) => {
        return(
            <div key={image.id}>
                <Image image={image} handleDelete={props.handleDelete}/>
            </div>
        )
    });
    return(
        <div class="container">
            {images}
        </div>
    )
}