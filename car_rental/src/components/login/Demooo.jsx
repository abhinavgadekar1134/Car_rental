import React, { useState } from 'react';

const Demooo = () => {

    const [base64Image, setBase64Image] = useState('');
    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // 'reader.result' contains the base64 representation of the image
            setBase64Image(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <form action="/stats" enctype="multipart/form-data" method="post">
                <div class="form-group">
                    <input type="file" class="form-control-file" name="uploaded_file" />
                    <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers" />
                    <input type="submit" value="Get me the stats!" class="btn btn-default" />
                </div>
            </form>
        </div>
    );
};

export default Demooo;
