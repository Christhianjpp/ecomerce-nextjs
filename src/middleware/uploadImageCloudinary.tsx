

interface Props {
    images: File[];
};

const cloudUrl = 'https://api.cloudinary.com/v1_1/dl6oea68u/image/upload';

export const uploadImageCloudinaryCrop = async ({ images }: Props) => {
    console.log('UploadImageCloudinaryCrop')
    console.log({ images })

    try {
        const uploadPromises = images.map(async (image) => {

            // const source = {
            //     uri: URL.createObjectURL(image),
            //     type: image.type,
            //     name: 'fileName',
            // };
            const source = new Blob([image], { type: image.type });

            const data = new FormData();

            data.append('file', source);
            data.append('upload_preset', 'conocepanama');
            data.append('cloud_name', 'dl6oea68u');
            data.append('folder', 'tienda');

            const resp = await fetch(cloudUrl, {
                method: 'POST',
                body: data,
            });

            if (resp.status === 200) {
                const cloudResp = await resp.json();
                return cloudResp.secure_url;
            }

            throw new Error('Image upload failed');
        });

        const cloudUrls = await Promise.all(uploadPromises);

        return cloudUrls;
    } catch (error) {
        console.log(error);
        return [];
    }
};
