$("#upload_widget_opener").cloudinary_upload_widget(
    {
        cloud_name: "dvme554nj",
        upload_preset: "qtzenltc",
        // cropping: "server",
        showAdvancedOptions: true,
        folder: "skep",
        theme: "minimal",
        stylesheet: ".drag_content { border: 4px solid red }",
        multiple: true,
        sources: ["local"],
        button_class: "ud_button inline no_margin",
        button_caption: "Upload",
        thumbnails: ".feature_thumb",
        thumbnail_transformation: { width: 100, height: 100, crop: "fit" },
        resource_type: "image"
    },
    function (error, result) {
        console.log(error, result);
    }
);

